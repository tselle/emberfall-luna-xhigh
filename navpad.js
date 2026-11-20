(function(E){'use strict';
E.NavPad={init(){let pad=document.getElementById('touch-pad');if(!pad)return;let touch=('ontouchstart'in window)||navigator.maxTouchPoints>0;if(touch)pad.classList.add('visible');pad.querySelectorAll('[data-move]').forEach(b=>{let run=e=>{e.preventDefault();E.Game.command(b.dataset.move)};b.addEventListener('touchstart',run,{passive:false});b.addEventListener('click',run)})}};
})(window.Emberfall=window.Emberfall||{});
