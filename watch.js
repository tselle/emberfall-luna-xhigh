(function(E){'use strict';
E.Watch={last:0,frame(t){if(t-this.last>50){this.last=t;if(E.State.activity==='combat'&&E.Combat?.draw)E.Combat.draw();else if(E.View?.render)E.View.render()}requestAnimationFrame(x=>this.frame(x))},start(){requestAnimationFrame(x=>this.frame(x))}};
})(window.Emberfall=window.Emberfall||{});
