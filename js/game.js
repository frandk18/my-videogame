// MY OWN VIDEOGAME

var canvas = null,
    ctx = null;

function paint(ctx) {
    ctx.fillStyle = '#0f0';        // fill color
    ctx.fillRect(50, 50, 100, 60); // fillRect(x,y,width,height)
}

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    paint(ctx);
}

window.addEventListener('load', init, false);