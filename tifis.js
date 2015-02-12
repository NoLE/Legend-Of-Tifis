var tablero;

var teclas =
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
var fondo = {
    imagenURL: "img/fondo.png",
    imagenOK: false
};
var tifis = {
    frenteOK: false,
    atrasOK: false,
    derOK: false,
    izqOK: false,
    velocidad: 20,
    x: 0,
    y: 0
};
var liz = {
    imagenOK: false,
    x: 400,
    y: 200
};
    var t = [frenteOK, atrasOK, izqOK, derOK]
function inicio()
{
    var canvas = document.getElementById("campo");
    tablero = canvas.getContext("2d");

    fondo.imagen = new Image();
    fondo.imagen.src = fondo.imagenURL;
    fondo.imagen.onload = confirmarFondo;

    tifis.frente = new Image();
    tifis.frente.src = "img/diana-frente.png";
    tifis.frente.onload = confirmar;

    tifis.atras = new Image();
    tifis.atras.src = "img/diana-atras.png";
    tifis.atras.onload = confirmar;

    tifis.izq = new Image();
    tifis.izq.src = "img/diana-izq.png";
    tifis.izq.onload = confirmar;

    tifis.der = new Image();
    tifis.der.src = "img/diana-der.png";
    tifis.der.onload = confirmar;

    liz.imagen = new Image();
    liz.imagen.src = "img/liz.png";
    liz.imagen.onload = confirmarLiz;

    document.addEventListener("keydown", teclado);

}
function teclado(evento)
{
    var codigo = evento.keyCode;
    if(codigo == teclas.UP)
    {
        tifis.y -= tifis.velocidad;
    }
    if(codigo == teclas.DOWN)
    {
        tifis.y += tifis.velocidad;
        if(tifis.y>300)
        {
            tifis.y -= tifis.velocidad;
        }
    }
    if(codigo == teclas.LEFT)
    {
        tifis.x -= tifis.velocidad;
    }
    if(codigo == teclas.RIGHT)
    {
        tifis.x += tifis.velocidad;
    }
    dibujar(codigo);
}

function confirmarFondo()
{
    fondo.imagenOK = true;
    dibujar();
}

function confirmar()
{
    for (var i = 0; i <= t.length; i++)
    {
        tifis.t[i] = true;
        dibujar();
    };

}

// function confirmarFrente()
// {
//     tifis.frenteOK = true;
//     dibujar();
// }
// function confirmarAtras()
// {
//     tifis.atrasOK = true;
//     dibujar();
// }
// function confirmarIzq()
// {
//     tifis.izqOK = true;
//     dibujar();
// }
// function confirmarDer()
// {
//     tifis.derOK = true;
//     dibujar();
// }
function confirmarLiz()
{
    liz.imagenOK = true;
    dibujar();
}


function dibujar(direccion)
{
    if(fondo.imagenOK)
    {
        tablero.drawImage(fondo.imagen, 0, 0);    
    }

    var tifisOrientada = tifis.frente;

    if(tifis.frenteOK && tifis.atrasOK && tifis.derOK && tifis.izqOK)
    {
        if(direccion == teclas.DOWN || direccion == undefined)
        {
            tifisOrientada = tifis.frente;
        }
        else if(direccion == teclas.UP)
        {
            tifisOrientada = tifis.atras;
        }
        else if(direccion == teclas.LEFT)
        {
            tifisOrientada = tifis.izq;
        }
        else if(direccion == teclas.RIGHT)
        {
            tifisOrientada = tifis.der;
        }
    }
    tablero.drawImage(tifisOrientada, tifis.x, tifis.y);

    if(liz.imagenOK)
    {
        tablero.drawImage(liz.imagen, liz.x, liz.y);
    }
}
