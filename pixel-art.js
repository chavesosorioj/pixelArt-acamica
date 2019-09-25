//todo el código está guardado en jquery
$(document).ready(function(){

/////////////////////////////////////
///////// VARIABLES ///////////////////
////////////////////////////////////

var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];

// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

colorPersonalizado.addEventListener('change', (function() {
    // Se guarda el color de la rueda en colorActual
   var colorActual = colorPersonalizado.value;
    // Completar para que cambie el indicador-de-color al colorActual
    indicadorDeColores.style.backgroundColor = colorActual;

  })
);
//var de la paleta colores
var paleta = document.getElementById("paleta");
// var de la grilla pixeles
var grillaPixeles = document.getElementById("grilla-pixeles");

// var de indicador de colores
var indicadorDeColores = document.getElementById("indicador-de-color");

// var detecta mouse apretado
var mousePrecionado;

/////////////////////////////////////
///////// FUNCIONES ///////////////////
////////////////////////////////////

// Función que crea la paleta de colores

function creaPaleta (){
  for (var i=0; i<nombreColores.length ; i++){
    var nuevoDiv = document.createElement("div");
    nuevoDiv.style.backgroundColor = nombreColores[i];
    nuevoDiv.className = "color-paleta"
    paleta.appendChild(nuevoDiv);
    }
}

// función que crea la grilla pixeles
function crearGrillaPixeles(){
  for(var i=0; i<1750;i++){
  var divGrilla = document.createElement("div");
  grillaPixeles.appendChild(divGrilla);
  }
}
// función cambia el color cliqueado en indicador de color
function indicarColor(e){
  indicadorDeColores.style.backgroundColor = e.target.style.backgroundColor;
}

// función que cambia el color de la grilla
function cambiaColorGrilla (e){
  e.target.style.backgroundColor = indicadorDeColores.style.backgroundColor ;

}

// función para pintar en movimiento
function pintarEnMovimiento(e){
  if (mousePrecionado === true){
    cambiaColorGrilla(e);
  }
}

/////////////////////////////////////
///////// LLAMADO DE FUNCIONES//////
////////////////////////////////////
creaPaleta();
crearGrillaPixeles();


/////////////////////////////////////
///////// EVENTOS ///////////////////
////////////////////////////////////

// evento que escucha el color seleccionado
paleta.addEventListener("click", indicarColor);

// evento que escucha el cuadrado de la grilla que fue seleccionado
grillaPixeles.addEventListener("click", cambiaColorGrilla);

// evento que sucede cuando el mouse está precionado
grillaPixeles.addEventListener("mousedown", function(){
  mousePrecionado = true;
});

// evento que sucede cuando el mouse está presionado y luego soltado
grillaPixeles.addEventListener("mouseup", function(){
  mousePrecionado = false;
});
// evento que sucede cuando el mouse precionado está en movimiento
grillaPixeles.addEventListener("mousemove", pintarEnMovimiento);


/////////////////////////////////////
///////// JQUERY ///////////////////
////////////////////////////////////

// var que guarda todos los div de grilla pixeles
var $grillaPixeles = $("#grilla-pixeles div"); 

//función que vuelve toda la grilla a blanco
$("#borrar").click(function(){
  $grillaPixeles.animate({"backgroundColor": "#FFF"}, 2000);
});

// carga superheroe batman
$("#batman").click(function() {
  cargarSuperheroe(batman);
});

// carga superheroe mujer maravilla
$("#wonder").click(function() {
  cargarSuperheroe(wonder);
});
// carga superheroe invisible
$("#invisible").click(function() {
  cargarSuperheroe(invisible);
});
// carga superheroe flash
$("#flash").click(function() {
  cargarSuperheroe(flash);
});

//guarda el archivo
$("#guardar").click(function(){
  guardarPixelArt();  
});

});