// Importa los modulos donde contienen los arrays de objetos
import { COLE_NAMES_ARR } from "../modules/coleNamARR.mjs";
import { COLE_FULL_ARR } from "../modules/coleFullARR.mjs";
import { coleStructure } from "../modules/generatorsFunc.mjs";

// Crea la variable de las selecciones hechas
let colegioSelected;
let optionsSelected;

//Captura los elementos y los guarda en una constante
const SELECT_NAMES_COLEGIOS = document.getElementById('colegioNameSelect');
const SELECT_NAMES_RUTAS = document.getElementById('rutaNameSelect');
const SELECT_NAMES_TURNO = document.getElementById('turnoNameSelect');
const SECTION_SELECTS = document.getElementById('main-nav__main');
const SECTION_COLEGIO_INFO = document.getElementById('colegioInfo');

// Cuando carga la página genera los options dinámicamente
window.onload = function () {

  //Desabilita primero los otros select para no haber confusion
  [SELECT_NAMES_RUTAS, SELECT_NAMES_TURNO, BOTON_RESET].forEach((element) => {
    element.disabled = true;
  })


  // Crea un option por cada elemento del array con un id y un value
  COLE_NAMES_ARR.forEach(colegio => {
    const OPTION = document.createElement('option');
    OPTION.text = colegio.name;
    OPTION.value = colegio.id;
    OPTION.id = colegio.id;

    // Añade el option creado al select
    SELECT_NAMES_COLEGIOS.add(OPTION);
  });
  
};

// Detecta cuando se hace una seleccion en SELECT_NAMES_COLEGIOS 
SELECT_NAMES_COLEGIOS.addEventListener('change', function() {
  optionsSelected = `${this.value}`;

  // Busca el colegio seleccionado en el array y lo guarda en una variable
  colegioSelected = COLE_NAMES_ARR.find(colegio => colegio.id === optionsSelected);

  // Habilita de nuevo el select de rutas
  [SELECT_NAMES_RUTAS, BOTON_RESET].forEach((element) => {
    element.disabled = false;
    BOTON_RESET.style.border = '1px solid orangered';
    BOTON_RESET.style.color = 'orangered';
  })

  // Crea un option por cada elemento del array con un id y un value
  colegioSelected.rutas.forEach(ruta => {
    const OPTION = document.createElement('option');
    OPTION.text = ruta.rutaName;
    OPTION.value = ruta.id;
    OPTION.id = ruta.id;

    // Añade el option creado al select
    SELECT_NAMES_RUTAS.add(OPTION);

    // Desabilita el select despues de hacer la seleccion
    this.disabled = true;

    // Cambia el estilo del select
    this.style.fontSize = '1.5rem'
    this.style.color = 'orangered';
    this.style.backgroundColor = 'hsl(241, 74%, 28%, 0.5)';
  })
})

// Detecta cuando se hace una seleccion en SELECT_NAMES_RUTAS
SELECT_NAMES_RUTAS.addEventListener('change', function () {
  optionsSelected += `-${this.value}-`;

  // Desabilita el select despues de hacer la seleccion
  this.disabled = true;

  // Habilita el select de eleccion de turno
  SELECT_NAMES_TURNO.disabled = false;

  // Cambia el estilo del select
  this.style.fontSize = '1.5rem'
  this.style.color = 'orangered';
  this.style.backgroundColor = 'hsl(241, 74%, 28%, 0.5)';
})

// Detecta cuando se hace una seleccion en SELECT_NAMES_TURNO
SELECT_NAMES_TURNO.addEventListener('change', function () {
  optionsSelected += `${this.value}`;

  // Desabilita el select despues de hacer la seleccion
  this.disabled = true;

  // Cambia el estilo del select
  this.style.fontSize = '1.5rem'
  this.style.color = 'orangered';
  this.style.backgroundColor = 'hsl(241, 74%, 28%, 0.5)';

  
  // Busca el objeto de rutas que coincida con la seleccion total de los select
  const COLE_RUTA_FOUND = COLE_FULL_ARR.find( obj => obj.id === optionsSelected);
  
  setTimeout(function() {
    // Oculta los select del html
    SECTION_SELECTS.style.display = 'none';

    // Añade la info dentro del section
    SECTION_COLEGIO_INFO.innerHTML = coleStructure(COLE_RUTA_FOUND, colegioSelected);
    
    if (hInOutCole.innerHTML < '10:00') {
      salida_p.style.display = 'none';
    } else {
      entrada_p.style.display = 'none';
    }

    if(!obser_p.innerHTML){
      section_obser.style.display = 'none';
    }
    
  }, 2000)
  
})

// Botón de reset
const BOTON_RESET = document.getElementById('resetBttn');

BOTON_RESET.addEventListener('click', () => {
  location.reload();
})