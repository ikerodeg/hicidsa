// --------------------------- IMPORTACIÓN DE MODULOS ------------------------------------
import { coleBaseInfo_ARR } from "../../modules/baseInfoColes.mjs";
import { guias_CEIP_ReginaViolant, guias_IES_Betxi } from "../../modules/guiasInfoColes.mjs";
import { parte_IES_Betxi } from "../../modules/partesTrabajo.mjs";
import { paradasRutas } from "../../modules/rutasColes.mjs";
import { coleStructure } from "../../modules/generatorsFunc.mjs";
import { hideElements, createOptionsForColegios, createOptionsForRutas, createOptionsForTurnos, createOptionsForMeses, createOptionsForDias, showNewSelect, changeStyles, savingSelectedData, styleResetButton, styleGeneral, initialStyle, putInitialStyle, buscaColeSeleccionado } from "../../modules/utilFunctions.mjs";


//-------------------------------- ID'S DE ELEMENTOS --------------------------------------
const SELECTS_ID = {
  SELECT_COLEGIOS: document.getElementById('colegioNameSelect'),
  SELECT_RUTAS: document.getElementById('rutaNameSelect'),
  SELECT_MES: document.getElementById('mesNameSelect'),
  SELECT_TURNOS: document.getElementById('turnoNameSelect'),
  SELECT_DIAS: document.getElementById('diasNameSelect'),
  ALL_SELECTS: document.querySelectorAll('select'),
};

const DOM_ELEMENTS = {
  SECTION_SELECTS: document.getElementById('main-nav__main'),
  SECTION_COLEGIO_INFO: document.getElementById('colegioInfo'),
  BOTON_RESET: document.getElementById('resetBttn'),
};

const TURNOS = {
  entrada: 'Entrada (Mañanas)', 
  salida: 'Salida (Tardes)'
};

//-------------------------------- VARIABLES GLOBALES --------------------------------------
const GLOBAL_V = {
  SELECTED_COLEGIO_id: '',
  SELECTED_MES_VARIANT_id: '',
  SELECTED_RUTA_id: '',
  SELECTED_TURNO_id: '',
  SELECTED_DIAS_id: '',
  ALL_SELECTIONS: '',
  COLE_BASE_INFO_MATCH: '',
  MESES_VARIANT_MATCH: '',
  MES_RANGO_MATCH: '',
  DIAS_VARIANT_MATCH: '',
  GUIAS_MATCH: '',
  RUTA_MATCH: '',
};

// -------------------------------- FUNCION CARGA PAGINA ----------------------------------

window.onload = function () {

  //Desabilita el boton de reset de inicio
  DOM_ELEMENTS.BOTON_RESET.style.pointerEvents = 'none';
  DOM_ELEMENTS.BOTON_RESET.style.boxShadow = 'none';

  //Aplica estilos al select
  putInitialStyle(SELECTS_ID.SELECT_COLEGIOS, initialStyle);

  // Crea un <OPTION> por cada objeto del array coleBaseInfo_ARR con un id ,value y name igual al colegio
  createOptionsForColegios(SELECTS_ID.SELECT_COLEGIOS, coleBaseInfo_ARR);

  // ----------------------------------- DETECCION <SELECT> COLEGIOS -------------------  
  SELECTS_ID.SELECT_COLEGIOS.addEventListener('change', (event) => {

    //Detecta seleccion hecha en el <select> y guarda el valor en las dos propiedades del objeto GLOBAL_V ALL_SELECTIONS y SELECTED_COLEGIO_id
    savingSelectedData(event.target.value, 'ALL_SELECTIONS', 'SELECTED_COLEGIO_id', GLOBAL_V);

    //Busca y guarda la coleBaseInfo del colegio en la propiedad COLE_BASE_INFO_MATCH de GLOBAL_V
    GLOBAL_V.COLE_BASE_INFO_MATCH = buscaColeSeleccionado(event.target.value, coleBaseInfo_ARR);
    
    //Muestra en consola el colegio guardado
    console.log(`Colegio Encontrado ⬇️:`);
    console.log(GLOBAL_V.COLE_BASE_INFO_MATCH);

    console.log(`Coincidencia de Colegio en paradasRutasARR: ${paradasRutas[GLOBAL_V.SELECTED_COLEGIO_id].id}`);

    // Desabilita el <select> y cambia su estilo
    changeStyles(SELECTS_ID.SELECT_COLEGIOS, styleGeneral);
    
    //Habilita el boton de RESET
    changeStyles(DOM_ELEMENTS.BOTON_RESET, styleResetButton);

    //Habilita el <select> RUTAS y añade un <option> por cada ruta disponible
    showNewSelect(SELECTS_ID.SELECT_RUTAS, GLOBAL_V.COLE_BASE_INFO_MATCH.rutas, createOptionsForRutas);
    
    //Aplica estilos al select
    if (!SELECTS_ID.SELECT_RUTAS.disabled === true) {
      putInitialStyle(SELECTS_ID.SELECT_RUTAS, initialStyle);
    }
  });

  // ----------------------------------- DETECCION <SELECT> RUTA -------------------  
  SELECTS_ID.SELECT_RUTAS.addEventListener('change', (event) => {
    //Detecta seleccion hecha en el <select> y guarda el valor en las dos propiedades del objeto GLOBAL_V ALL_SELECTIONS y SELECTED_RUTA_id
    savingSelectedData(event.target.value, 'ALL_SELECTIONS', 'SELECTED_RUTA_id', GLOBAL_V);

    // Desabilita el <select> y cambia su estilo
    changeStyles(SELECTS_ID.SELECT_RUTAS, styleGeneral);

    //Habilita el <select> TURNO y añade un <option> por cada ruta disponible
    showNewSelect(SELECTS_ID.SELECT_TURNOS, TURNOS, createOptionsForTurnos)

    //Aplica estilos al select
    putInitialStyle(SELECTS_ID.SELECT_TURNOS, initialStyle);

  });

  // ----------------------------------- DETECCION <SELECT> TURNO -------------------  
  SELECTS_ID.SELECT_TURNOS.addEventListener('change', (event) => {
    //Detecta seleccion hecha en el <select> y guarda el valor en las dos propiedades del objeto GLOBAL_V ALL_SELECTIONS y SELECTED_RUTA_id
    savingSelectedData(event.target.value, 'ALL_SELECTIONS', 'SELECTED_TURNO_id', GLOBAL_V);

    // Desabilita el <select> y cambia su estilo
    changeStyles(SELECTS_ID.SELECT_TURNOS, styleGeneral);

    //No hay variante de mes ni de dia, muestra directamente la info del cole
    if (!GLOBAL_V.COLE_BASE_INFO_MATCH.rutas[GLOBAL_V.SELECTED_RUTA_id].turno[GLOBAL_V.SELECTED_TURNO_id]?.mes){
      console.log('No existe variante de mes ni de dias');
      // Crea una funcion con Delay para ingresar los datos dentro del html
      setTimeout(function () {
        // Oculta los select del html
        DOM_ELEMENTS.SECTION_SELECTS.style.display = 'none';
        // Añade la info dentro del section
        DOM_ELEMENTS.SECTION_COLEGIO_INFO.innerHTML = coleStructure(GLOBAL_V.COLE_BASE_INFO_MATCH, GLOBAL_V, paradasRutas);
      }, 800)
    } //No hay variante de mes pero puede haber de dia porque rangoMes1 = 'Todo el año'
    else if (GLOBAL_V.COLE_BASE_INFO_MATCH.rutas[GLOBAL_V.SELECTED_RUTA_id].turno[GLOBAL_V.SELECTED_TURNO_id].mes.rangoMes1.value === 'Todo el año'){
      GLOBAL_V.SELECTED_MES_VARIANT_id = 'rangoMes1';
      GLOBAL_V.ALL_SELECTIONS += '-rangoMes1';
      console.log(`No hay variante de mes pero puede haber de dia`);

      if (GLOBAL_V.COLE_BASE_INFO_MATCH.rutas[GLOBAL_V.SELECTED_RUTA_id].turno[GLOBAL_V.SELECTED_TURNO_id].mes[GLOBAL_V.SELECTED_MES_VARIANT_id].dias.rangoDias1.value === 'Todos los días') {
        GLOBAL_V.SELECTED_DIAS_id = 'rangoDias1';
        GLOBAL_V.ALL_SELECTIONS += '-rangoDias1';
        console.log(`No hay variante de Dias`);
        // Crea una funcion con Delay para ingresar los datos dentro del html
        setTimeout(function () {
        // Oculta los select del html
        DOM_ELEMENTS.SECTION_SELECTS.style.display = 'none';
        // Añade la info dentro del section
        DOM_ELEMENTS.SECTION_COLEGIO_INFO.innerHTML = coleStructure(GLOBAL_V.COLE_BASE_INFO_MATCH, GLOBAL_V, paradasRutas);
        }, 800)
      } else {
        //Habilita el <select> DIA y añade un <option> por cada Rango disponible
        showNewSelect(SELECTS_ID.SELECT_DIAS, GLOBAL_V.COLE_BASE_INFO_MATCH.rutas[GLOBAL_V.SELECTED_RUTA_id].turno[GLOBAL_V.SELECTED_TURNO_id].mes[GLOBAL_V.SELECTED_MES_VARIANT_id].dias, createOptionsForDias);
        console.log(GLOBAL_V.SELECTED_MES_VARIANT_id);
        console.log(GLOBAL_V.ALL_SELECTIONS);

        //Aplica estilos al select
        putInitialStyle(SELECTS_ID.SELECT_DIAS, initialStyle);
      }

    }  //Si que hay una variante de mes porque existe y no es igual a 'Todo el año'
    else if (GLOBAL_V.COLE_BASE_INFO_MATCH.rutas[GLOBAL_V.SELECTED_RUTA_id].turno[GLOBAL_V.SELECTED_TURNO_id].mes.rangoMes1.value !== 'Todo el año'){
      console.log('Hay variante de mes y no es Todo el año');

      //Habilita el <select> MES y añade un <option> por cada Rango disponible
      showNewSelect(SELECTS_ID.SELECT_MES, GLOBAL_V.COLE_BASE_INFO_MATCH.rutas[GLOBAL_V.SELECTED_RUTA_id].turno[GLOBAL_V.SELECTED_TURNO_id].mes, createOptionsForMeses);

      //Aplica estilos al select
      putInitialStyle(SELECTS_ID.SELECT_MES, initialStyle);

    }  

  });

// ----------------------------------- DETECCION <SELECT> MES -------------------  
  SELECTS_ID.SELECT_MES.addEventListener('change', (event) => {
    //Detecta seleccion hecha en el <select> y guarda el valor en las dos propiedades del objeto GLOBAL_V ALL_SELECTIONS y SELECTED_MES_id
    savingSelectedData(event.target.value, 'ALL_SELECTIONS', 'SELECTED_MES_VARIANT_id', GLOBAL_V);

    // Desabilita el <select> y cambia su estilo
    changeStyles(SELECTS_ID.SELECT_MES, styleGeneral);

    //Habilita el <select> RUTAS
    SELECTS_ID.SELECT_RUTAS.style.display = 'block';

    //Aplica estilos al select
    if (!SELECTS_ID.SELECT_RUTAS.disabled === true) {
      putInitialStyle(SELECTS_ID.SELECT_RUTAS, initialStyle);
    }

    //Añade un <option> por cada RUTA disponible
    createOptionsForMeses(SELECTS_ID.SELECT_RUTAS, GLOBAL_V.COLE_BASE_INFO_MATCH.rutas);

    if (GLOBAL_V.COLE_BASE_INFO_MATCH.rutas[GLOBAL_V.SELECTED_RUTA_id].turno[GLOBAL_V.SELECTED_TURNO_id].mes[GLOBAL_V.SELECTED_MES_VARIANT_id].dias.rangoDias1.value === 'Todos los días') {
      GLOBAL_V.SELECTED_DIAS_id = 'rangoDias1';
      GLOBAL_V.ALL_SELECTIONS += '-rangoDias1';
      console.log(`No hay variante de Dias`);
      // Crea una funcion con Delay para ingresar los datos dentro del html
      setTimeout(function () {
      // Oculta los select del html
      DOM_ELEMENTS.SECTION_SELECTS.style.display = 'none';
      // Añade la info dentro del section
      DOM_ELEMENTS.SECTION_COLEGIO_INFO.innerHTML = coleStructure(GLOBAL_V.COLE_BASE_INFO_MATCH, GLOBAL_V, paradasRutas);
      }, 800)
    } else {
    //Habilita el <select> DIA y añade un <option> por cada Rango disponible
    showNewSelect(SELECTS_ID.SELECT_DIAS, GLOBAL_V.COLE_BASE_INFO_MATCH.rutas[GLOBAL_V.SELECTED_RUTA_id].turno[GLOBAL_V.SELECTED_TURNO_id].mes[GLOBAL_V.SELECTED_MES_VARIANT_id].dias, createOptionsForDias);
    }

    //Aplica estilos al select
    putInitialStyle(SELECTS_ID.SELECT_DIAS, initialStyle);

  });

  // ----------------------------------- DETECCION <SELECT> DIAS -------------------  
  SELECTS_ID.SELECT_DIAS.addEventListener('change', (event) => {
    //Detecta seleccion hecha en el <select> y guarda el valor en las dos propiedades del objeto GLOBAL_V ALL_SELECTIONS y SELECTED_RUTA_id
    savingSelectedData(event.target.value, 'ALL_SELECTIONS', 'SELECTED_DIAS_id', GLOBAL_V);

    // Desabilita el <select> y cambia su estilo
    changeStyles(SELECTS_ID.SELECT_DIAS, styleGeneral)

    // Crea una funcion con Delay para ingresar los datos dentro del html
    setTimeout(function () {
      // Oculta los select del html
      DOM_ELEMENTS.SECTION_SELECTS.style.display = 'none';
      // Añade la info dentro del section
      DOM_ELEMENTS.SECTION_COLEGIO_INFO.innerHTML = coleStructure(GLOBAL_V.COLE_BASE_INFO_MATCH, GLOBAL_V, paradasRutas);
    }, 1800)

  });

};

// ---------------------- BOTON DE RESETEO SELECTS ------------------------------
DOM_ELEMENTS.BOTON_RESET.addEventListener('click', () => {
  SELECTS_ID.ALL_SELECTS.forEach( element => {
    element.disabled = false;
    element.value = 'default';
  });

  console.clear();
  Object.keys(GLOBAL_V).forEach( key => {
    GLOBAL_V[key] = '';
  });


location.reload();
  
});