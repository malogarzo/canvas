// var vid = document.getElementById("bgvid");
// var pauseButton = document.querySelector("#polina button");

// if (window.matchMedia('(prefers-reduced-motion)').matches) {
//     vid.removeAttribute("autoplay");
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
// }

// function vidFade() {
//   vid.classList.add("stopfade");
// }

// vid.addEventListener('ended', function()
// {
// // only functional if "loop" is removed 
// vid.pause();
// // to capture IE10
// vidFade();
// }); 


// pauseButton.addEventListener("click", function() {
//   vid.classList.toggle("stopfade");
//   if (vid.paused) {
//     vid.play();
//     pauseButton.innerHTML = "Pause";
//   } else {
//     vid.pause();
//     pauseButton.innerHTML = "Paused";
//   }
// })

var estado = 0;          // estado del click      
var colorLinea = "red";    // color a la linea

var area = document.getElementById('area_dibujo');
var papel = area.getContext("2d");

window.addEventListener('resize', resizeCanvas, false);

function resizeCanvas() {
  area.width = window.innerWidth;
  area.height = window.innerHeight;
  drawStuff();
}

resizeCanvas();


function drawStuff() {

  var x;                      // guardar coordenada en X
  var y;                      // guardar coordenada en Y
  document.addEventListener("mousedown",presionarMouse);  //cuando presionas click
  document.addEventListener("mouseup",soltarMouse);       //cuando sueltas click
  document.addEventListener("mousemove",dibujarMouse);    //cuando mueves el mouse

  // dibujo del borde
  // dibujarLinea("red", 0, 0, 300, 0, papel)
  // dibujarLinea("red", 300, 0, 300, 300, papel)
  // dibujarLinea("red", 300, 300, 0, 300, papel)
  // dibujarLinea("red", 0, 300, 0, 0, papel)

  // Funcion para mousedown
  function presionarMouse(evento) {
    estado = 1;         //click presionado  
    x = evento.layerX;
    y = evento.layerY;
  }

  // Funcion para mouseup
  function soltarMouse(evento){
    estado = 0;         // click suelto
    x = evento.layerX;
    y = evento.layerY;
  }

  // Funcion para mousemove
  function dibujarMouse(evento){
    if (estado == 1) {   // solo se dibujara si esta el click del mouse presionado
      dibujarLinea(colorLinea, x, y, evento.layerX, evento.layerY, papel);
    }
    x = evento.layerX;
    y = evento.layerY;
  }

  function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo){
    lienzo.beginPath();                  // Inicia el trazo
    lienzo.strokeStyle = color;          // Estilo de trazo (color)
    lienzo.lineWidth = 2;                // Ancho de la linea
    lienzo.moveTo(xinicial, yinicial);   // Donde comienza la linea
    lienzo.lineTo(xfinal, yfinal);       // Traza la linea (ubica punto final)
    lienzo.stroke();                     // Dibuja con el estio de trazo
    lienzo.closePath();                  // Cierra el dibujo
  }
}



