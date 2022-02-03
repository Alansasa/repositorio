const ID = document.getElementById("dibujo");
const lienzo = ID.getContext("2d");


const dibujar = (color, x_inicial, y_inicial, x_final, y_final) => {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo (x_inicial, y_inicial);
    lienzo.lineTo (x_final, y_final);
    lienzo.stroke();
    lienzo.closePath();
}

var totalLineas = 30;
var l;
var xi, yi, xf, yf,xi2, yi2, xf2, yf2;

for(l = 0; l < totalLineas; l ++){
    xi = 300 - [10 * (l + 1)];
    yf = 10 * l;
    yi = 10 * (l + 1);
    xf = 300 - (10 * l);
    xi2 = xi;
    yi2 = yf;
    xf2 = yi;
    yf2 = xf;

    dibujar("yellow", xi, 300, 300, yf);
    dibujar("yellow", 0, yi, xf, 0);
    dibujar("black", 0, yi2, xf2, 300);
    dibujar("black", xi2, 0, 300, yf2);
    dibujar("yellow", 0, 0, 0, 300);
    dibujar("blue", 0, 300, 300, 300);
    dibujar("blue", 300, 0, 300, 300);
    dibujar("black", 0, 0, 300, 0);
}
