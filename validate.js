'use strict';
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const context=vm.createContext({window:{},console,Math,Date});
for(const file of ['rules.js','data.js','modules.js','monsters.js','wilds.js','treasure.js','adventures.js'])vm.runInContext(fs.readFileSync(__dirname+'/'+file,'utf8'),context,{filename:file});
const E=context.window.Emberfall;
assert.equal(E.Data.items.length,300,'catalogue should contain 300 items');
assert.equal(E.Monsters.list.length,330,'bestiary should contain 330 creatures');
assert.equal(E.Adventures.generated.length,50,'should contain fifty generated adventures');
assert(E.Data.spells.length>=70&&E.Data.spells.length<=80,'spell catalogue should be about 75 spells');
assert.equal(E.Adventures.hand.length,4);
assert.equal(E.Adventures.generated.filter(a=>a.band===1).length,10);
for(let band=1;band<=5;band++)assert.deepEqual(Object.values(E.Adventures.generated.filter(a=>a.band===band).reduce((o,a)=>(o[a.size]=(o[a.size]||0)+1,o),{})),[4,3,2,1]);
for(const item of E.Data.items)if(item.type==='scroll')assert(E.Data.spells.some(s=>s.n===item.spell),`missing scroll spell: ${item.name}`);
for(const a of E.Adventures.all){assert(E.Monsters.byId[a.enemy],`${a.id} references missing monster ${a.enemy}`);const level=E.Adventures.createLevel(a,1);assert(level.secrets.length>=1&&level.secrets.length<=3);assert(level.traps.length>=2&&level.traps.length<=3);assert(level.grid[level.exit.y]?.[level.exit.x]!==undefined,`${a.id} has invalid exit`)}
assert.deepEqual(E.Adventures.validate(),[],'adventure exits should be reachable');
const a=E.Adventures.generated[13],one=JSON.stringify(E.Adventures.createLevel(a,2)),two=JSON.stringify(E.Adventures.createLevel(a,2));assert.equal(one,two,'seeded dungeon generation should be deterministic');
for(const race of Object.keys(E.Rules.races))assert(E.Rules.races[race].move>=.8,'demi-human movement must remain near human pace');
console.log(`PASS ${E.Monsters.list.length} creatures, ${E.Data.items.length} items, ${E.Data.spells.length} spells, ${E.Adventures.all.length} adventures; maps reachable and generation deterministic.`);
