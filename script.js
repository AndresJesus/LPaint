var cuadro = document.getElementById('zone');
var papel = cuadro.getContext("2d");
var x, y, actionS;
var color = "red";
cuadro.addEventListener("mousedown", draw);
cuadro.addEventListener("mouseup", stopDraw);
cuadro.addEventListener("mousemove", moving);

function dibujarLinea(color, xi, yi, xf, yf, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

function draw(e) {
    action = 0
    x = e.layerX;
    y = e.layerY;
}

function moving(e) {
    if (action == 0) {
        dibujarLinea(color, x, y, e.layerX, e.layerY, papel);
    }
    x = e.layerX;
    y = e.layerY;
}

function stopDraw(e) {
    action = 1;
}