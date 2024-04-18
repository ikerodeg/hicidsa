// --------------------------- IMPORTACIÓN DE MODULOS ------------------------------
// Importa los modulos donde contienen los arrays de objetos
import { COLE_NAMES_ARR } from "../modules/coleNamARR.mjs";
import { COLE_FULL_ARR } from "../modules/coleFullARR.mjs";
import { coleStructure } from "../modules/generatorsFunc.mjs";

// ------------------- VARIABLES Y FUNCIONES GLOBALES ------------------------------

const GLOBAL_V = {
  COLE_SELECT_VALUE: null,
  RUTA_SELECT_VALUE: null,
  TURNO_SELECT_VALUE: null,
  DIAS_SELECT_VALUE: null,
  COLE_MATCH: null,
  RANGO_DIAS_MATCH: null,
  ALL_SELECTIONS: null,
  COLE_FULL_MATCH: null,
  TIME_LIMIT: '10:00',
};

const GET_ELEMENTS = {
  SELECT_COLEGIOS: document.getElementById('colegioNameSelect'),
  SELECT_RUTAS: document.getElementById('rutaNameSelect'),
  SELECT_TURNOS: document.getElementById('turnoNameSelect'),
  SELECT_DIAS: document.getElementById('diasNameSelect'),
  SECTION_SELECTS: document.getElementById('main-nav__main'),
  SECTION_COLEGIO_INFO: document.getElementById('colegioInfo'),
};

function changeStyle(element, styles) {
  Object.assign(element.style, styles);
};

const STYLES = {
  fontSize: '1.5rem',
  color: 'orangered',
  backgroundColor: 'hsl(241, 74%, 28%, 0.5)',
  border: '1px solid orangered',
}

// ------------------ FUNCION CARGA PAGINA Y PRIMER <SELECT> "COLEGIOS" -----------------------
// Cuando carga la página genera los options dinámicamente
window.onload = function () {

  // Desabilita primero los otros <SELECT> para no haber confusion
  [GET_ELEMENTS.SELECT_RUTAS, GET_ELEMENTS.SELECT_TURNOS, BOTON_RESET].forEach((element) => {
    element.disabled = true;
  });

  // Esconde el cuarto <SELECT> DIAS
  GET_ELEMENTS.SELECT_DIAS.style.display = 'none';

  // Crea un <OPTION> por cada objeto del array COLE_NAMES_ARR con un id y un value igual al colegio
  COLE_NAMES_ARR.forEach(colegio => {
    const OPTION = document.createElement('option');
    OPTION.text = colegio.name;
    OPTION.value = colegio.id;
    OPTION.id = colegio.id;

    // Añade cada <OPTION> creado al select
    GET_ELEMENTS.SELECT_COLEGIOS.add(OPTION);
  });

};

// -------- DETECCIÓN ELECCION PRIMER <SELECT> "COLE" Y CARGA DEL SEGUNDO <SELECT> "RUTA" -------
// Detecta cuando se hace una seleccion en <SELECT> "COLEGIOS" 
GET_ELEMENTS.SELECT_COLEGIOS.addEventListener('change', function () {
  GLOBAL_V.COLE_SELECT_VALUE = `${this.value}`;
  GLOBAL_V.ALL_SELECTIONS = `${this.value}`;

  // Busca el colegio seleccionado en el array y lo guarda en una variable
  GLOBAL_V.COLE_MATCH = COLE_NAMES_ARR.find(colegio => colegio.id === GLOBAL_V.COLE_SELECT_VALUE);
  console.log('Cabecera Colegio seleccionado:');
  console.table(GLOBAL_V.COLE_MATCH);

  // Habilita de nuevo el select de rutas
  [GET_ELEMENTS.SELECT_RUTAS, BOTON_RESET].forEach((element) => {
    element.disabled = false;
    BOTON_RESET.style.border = STYLES.border;
    BOTON_RESET.style.color = STYLES.color;
  });

  // Crea un <OPTION> por cada elemento del array con un id y un value igual al nombre de la ruta
  GLOBAL_V.COLE_MATCH.rutas.forEach(ruta => {
    const OPTION = document.createElement('option');
    OPTION.text = ruta.rutaName;
    OPTION.value = ruta.id;
    OPTION.id = ruta.id;

    // Añade el <OPTION> creado al <SELECT>
    GET_ELEMENTS.SELECT_RUTAS.add(OPTION);

    // Desabilita el <SELECT> despues de hacer la seleccion
    this.disabled = true;

    // Cambia el estilo del <SELECT>
    changeStyle(this, STYLES);
  })
});

// ---------------------- DETECCIÓN ELECCION SEGUNDO <SELECT> "RUTA" ----------------------------
// Detecta cuando se hace una seleccion en SELECT_NAMES_RUTAS
GET_ELEMENTS.SELECT_RUTAS.addEventListener('change', function () {
  GLOBAL_V.RUTA_SELECT_VALUE = this.value;
  GLOBAL_V.ALL_SELECTIONS += `-${this.value}-`;

  // Desabilita el select despues de hacer la seleccion
  this.disabled = true;

  // Habilita el select de eleccion de turno
  GET_ELEMENTS.SELECT_TURNOS.disabled = false;

  // Cambia el estilo del select
  changeStyle(this, STYLES);
})

// ---------------------- DETECCIÓN ELECCION TERCER <SELECT> "TURNO" ------------------------------
// Detecta cuando se hace una seleccion en SELECT_NAMES_TURNO
GET_ELEMENTS.SELECT_TURNOS.addEventListener('change', function () {
  GLOBAL_V.TURNO_SELECT_VALUE = `${this.value}`;
  GLOBAL_V.ALL_SELECTIONS += `${this.value}`;

  // Desabilita el select despues de hacer la seleccion
  this.disabled = true;

  // Cambia el estilo del select
  changeStyle(this, STYLES);

  // Muestra las rutas disponibles de ese colegio
  console.log('Rutas Disponibles del Colegio seleccionado:');
  console.table(GLOBAL_V.COLE_MATCH.rutas);

  // Busca en las rutas dentro del cole encontrado si hay una coincidencia con el value del <SELECT> "RUTA_SELECT_VALUE" y lo guarda en una variable que será un array de objetos de rutas
  const RUTAS_MATCH = GLOBAL_V.COLE_MATCH.rutas.find(ruta => ruta.id === GLOBAL_V.RUTA_SELECT_VALUE);

  // Muestra las rutas de ese colegio
  console.log('Ruta seleccionada del Colegio seleccionado:');
  console.table(RUTAS_MATCH);

  // ************************* CASO 1 ****************
  // Si el "TURNO_SELECT_VALUE" es de entrada no muestrael cuarto select y busca dentro del array de COLEFULLARR toda la info para cargarla en el html
  if (GLOBAL_V.TURNO_SELECT_VALUE === 'entrada') {
    console.log(`En el turno de mañana NO hay variaciones de dias`);

    // Busca el objeto de rutas que coincida con la seleccion total de los select
    GLOBAL_V.COLE_FULL_MATCH = COLE_FULL_ARR.find(obj => obj.id === GLOBAL_V.ALL_SELECTIONS);
    console.log('Colegio completo seleccionado:');
    console.table(GLOBAL_V.COLE_FULL_MATCH);


    // Crea una funcion con Delay para ingresar los datos dentro del html
    setTimeout(function () {
      // Oculta los select del html
      GET_ELEMENTS.SECTION_SELECTS.style.display = 'none';

      // Añade la info dentro del section
      GET_ELEMENTS.SECTION_COLEGIO_INFO.innerHTML = coleStructure(GLOBAL_V);

      // Si la hora de entrada es menor que la hora límite, se oculta el <p> salida y se muestra el <p> entrada
      if (hInOutCole.innerHTML < GLOBAL_V.TIME_LIMIT) {
        salida_p.style.display = 'none';
      } else {
        entrada_p.style.display = 'none';
      }

      // Si el <p> observaciones está vacío lo oculta
      if (!obser_p.innerHTML) {
        section_obser.style.display = 'none';
      }

    }, 1800)

    // ************************* CASO 2 ****************
    // Si la variable "MATCH" contiene algo y ademas tiene una propiedad llamada "rangoDias"  muestra el cuarto <SELECT> para seleccionar el rango de dias
  } else if (RUTAS_MATCH && RUTAS_MATCH.rangoDias) {
    console.log(`Esta ruta SI contiene un rango de dias!`);
    console.log('Rango de dias disponible en esta ruta');
    console.table(RUTAS_MATCH.rangoDias);

    // Habilita el SELECT de días
    GET_ELEMENTS.SELECT_DIAS.style.display = 'block';

    // Recorre cada elemento del array "RUTAS_MATCH.rangoDias" y crea un option por cada elemento para incluirlo dentro del <SELECT>
    RUTAS_MATCH.rangoDias.forEach((rango, index) => {
      const OPTION = document.createElement('option');
      OPTION.text = rango;
      OPTION.value = `rango${index + 1}`;
      OPTION.id = `rango${index + 1}`;

      // Añade el option creado al select
      GET_ELEMENTS.SELECT_DIAS.add(OPTION);
    });

    // ---------------------- DETECCIÓN ELECCION CUARTO SELECT ------------------------------
    // Detecta cuando se hace una seleccion en SELECT_NAMES_TURNO
    GET_ELEMENTS.SELECT_DIAS.addEventListener('change', function () {
      GLOBAL_V.DIAS_SELECT_VALUE = `${this.value}`;
      GLOBAL_V.ALL_SELECTIONS += `-${this.value}`;

      // Desabilita el select despues de hacer la seleccion
      this.disabled = true;

      // Cambia el estilo del select
      changeStyle(this, STYLES);

      // Busca el objeto de rutas que coincida con la seleccion total de los select
      GLOBAL_V.COLE_FULL_MATCH = COLE_FULL_ARR.find(obj => obj.id === GLOBAL_V.ALL_SELECTIONS);

      // Muestra el colegio completo seleccionado
      console.log('Colegio completo seleccionado:');
      console.table(GLOBAL_V.COLE_FULL_MATCH);

      // Crea una funcion con Delay para ingresar los datos dentro del html
      setTimeout(function () {

        // Oculta los select del html
        GET_ELEMENTS.SECTION_SELECTS.style.display = 'none';

        // Añade la info dentro del section
        GET_ELEMENTS.SECTION_COLEGIO_INFO.innerHTML = coleStructure(GLOBAL_V);

        // Si la hora de entrada es menor que la hora límite, se oculta el <p> salida y se muestra el <p> entrada
        if (hInOutCole.innerHTML < GLOBAL_V.TIME_LIMIT) {
          salida_p.style.display = 'none';
        } else {
          entrada_p.style.display = 'none';
        };

        // Si el <p> observaciones está vacío lo oculta
        if (!obser_p.innerHTML) {
          section_obser.style.display = 'none';
        };

        if (RUTAS_MATCH.rangoDias) {
          const H3_RANGO = document.createElement('h3');

          H3_RANGO.textContent = `${GET_ELEMENTS.SELECT_DIAS.options[GET_ELEMENTS.SELECT_DIAS.selectedIndex].text}`
          sectionRutaInfo.children[0].after(H3_RANGO);
        }

      }, 1800)

    })

    // ************************* CASO 3 ****************
    // Ese ruta no contiene nada o no tiene una propiedad llamada "rangoDias" 
  } else {
    console.log(`Esta ruta NO contiene un rango de dias!`);

    // Busca el objeto de rutas que coincida con la seleccion total de los select
    GLOBAL_V.COLE_FULL_MATCH = COLE_FULL_ARR.find(obj => obj.id === GLOBAL_V.ALL_SELECTIONS);
    console.log('Colegio completo seleccionado:');
    console.table(GLOBAL_V.COLE_FULL_MATCH);


    // Crea una funcion con Delay para ingresar los datos dentro del html
    setTimeout(function () {
      // Oculta los select del html
      GET_ELEMENTS.SECTION_SELECTS.style.display = 'none';

      // Añade la info dentro del section
      GET_ELEMENTS.SECTION_COLEGIO_INFO.innerHTML = coleStructure(GLOBAL_V);

      // Si la hora de entrada es menor que la hora límite, se oculta el <p> salida y se muestra el <p> entrada
      if (hInOutCole.innerHTML < GLOBAL_V.TIME_LIMIT) {
        salida_p.style.display = 'none';
      } else {
        entrada_p.style.display = 'none';
      };

      // Si el <p> observaciones está vacío lo oculta
      if (!obser_p.innerHTML) {
        section_obser.style.display = 'none';
      };

    }, 1800)
  }
});


// ---------------------- BOTON DE RESETEO SELECTS ------------------------------
// Botón de reset
const BOTON_RESET = document.getElementById('resetBttn');

BOTON_RESET.addEventListener('click', () => {
  location.reload();
});
