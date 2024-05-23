// --------------------------- IMPORTACIÓN DE MODULOS ------------------------------------
import { lineaBaseInfo_OBJ } from "../../modules/baseInfoLineas.mjs";
import { paradasLinea_OBJ } from "../../modules/rutasLineas.mjs";
import { lineaStructure } from "../../modules/genLineaStruc.mjs";
import { hideElements, createOptionsForColegios, createOptionsForRutas, createOptionsForTurnos, createOptionsForMeses, createOptionsForDias, showNewSelect, changeStyles, savingSelectedData, styleResetButton, styleGeneral, initialStyle, putInitialStyle, buscaColeSeleccionado } from "../../modules/utilFunctions.mjs";


//-------------------------------- ID'S DE ELEMENTOS --------------------------------------
const SELECTS_ID = {
  SELECT_LINEAS: document.getElementById("lineasNameSelect"),
  SELECT_DIAS: document.getElementById('diasNameSelect'),
  SELECT_BUSES: document.getElementById('busesNameSelect'),
  SELECT_TURNOS: document.getElementById('turnoNameSelect'),
  ALL_SELECTS: document.querySelectorAll('select'),
};

const DOM_ELEMENTS = {
  SECTION_SELECTS: document.getElementById("main-nav__main"),
  SECTION_LINEA_INFO: document.getElementById("lineaInfo"),
  BOTON_RESET: document.getElementById("resetBttn"),
};


//-------------------------------- VARIABLES GLOBALES --------------------------------------
const GLOBAL_V = {
  LINEA_BASE_INFO_MATCH: "",
  SELECTED_LINEA_id: "",
  SELECTED_DIAS_id: "",
  SELECTED_BUS_id: '',
  SELECTED_TURNO_id: '',
  ALL_SELECTIONS: "",
};

// -------------------------------- FUNCION CARGA PAGINA ----------------------------------

window.onload = function () {
  //Desabilita el boton de reset de inicio
  DOM_ELEMENTS.BOTON_RESET.style.pointerEvents = "none";
  DOM_ELEMENTS.BOTON_RESET.style.boxShadow = "none";

  //Aplica estilos al select
  putInitialStyle(SELECTS_ID.SELECT_LINEAS, initialStyle);

  // Crea un <OPTION> por cada objeto del objeto lineaBaseInfo_OBJ con un id ,value y name igual al colegio
  createOptionsForColegios(SELECTS_ID.SELECT_LINEAS, lineaBaseInfo_OBJ);

  // ----------------------------------- DETECCION <SELECT> LINEAS ----------------------
  SELECTS_ID.SELECT_LINEAS.addEventListener('change', (event) => {

    //Detecta seleccion hecha en el <select> y guarda el valor en las dos propiedades del objeto GLOBAL_V ALL_SELECTIONS y SELECTED_LINEA_id
    savingSelectedData(event.target.value, 'ALL_SELECTIONS', 'SELECTED_LINEA_id', GLOBAL_V);

  
    //Busca y guarda la lineaBaseInfo de la línea en la propiedad LINEA_BASE_INFO_MATCH de GLOBAL_V
    GLOBAL_V.LINEA_BASE_INFO_MATCH = buscaColeSeleccionado(event.target.value, lineaBaseInfo_OBJ);
  
    //Muestra en consola la linea guardada
    console.log(`Colegio Encontrado ⬇️:`);
    console.log(GLOBAL_V.LINEA_BASE_INFO_MATCH);

    console.log(`Coincidencia de Linea en paradasLinea: ${paradasLinea_OBJ[GLOBAL_V.SELECTED_LINEA_id].id}`);

    // Desabilita el <select> y cambia su estilo
    changeStyles(SELECTS_ID.SELECT_LINEAS, styleGeneral);
    
    //Habilita el boton de RESET
    changeStyles(DOM_ELEMENTS.BOTON_RESET, styleResetButton);

    //Habilita el <select> DIAS y añade un <option> por cada ruta disponible
    showNewSelect(SELECTS_ID.SELECT_DIAS, GLOBAL_V.LINEA_BASE_INFO_MATCH.rutas, createOptionsForDias);

    //Aplica estilos al select
    if (!SELECTS_ID.SELECT_DIAS.disabled === true) {
      putInitialStyle(SELECTS_ID.SELECT_DIAS, initialStyle);
    }

  });

  // ----------------------------------- DETECCION <SELECT> DIAS -------------------  
  SELECTS_ID.SELECT_DIAS.addEventListener('change', (event) => {
    //Detecta seleccion hecha en el <select> y guarda el valor en las dos propiedades del objeto GLOBAL_V ALL_SELECTIONS y SELECTED_RUTA_id
    savingSelectedData(event.target.value, 'ALL_SELECTIONS', 'SELECTED_DIAS_id', GLOBAL_V);

    // Desabilita el <select> y cambia su estilo
    changeStyles(SELECTS_ID.SELECT_DIAS, styleGeneral)

    //Habilita el <select> RUTAS y añade un <option> por cada ruta disponible
    showNewSelect(SELECTS_ID.SELECT_BUSES, GLOBAL_V.LINEA_BASE_INFO_MATCH.rutas[GLOBAL_V.SELECTED_DIAS_id].buses, createOptionsForRutas);
    
    //Aplica estilos al select
    putInitialStyle(SELECTS_ID.SELECT_BUSES, initialStyle);
  });

  // ----------------------------------- DETECCION <SELECT> BUS -------------------  
  SELECTS_ID.SELECT_BUSES.addEventListener('change', (event) => {
    //Detecta seleccion hecha en el <select> y guarda el valor en las dos propiedades del objeto GLOBAL_V ALL_SELECTIONS y SELECTED_BUS_id
    savingSelectedData(event.target.value, 'ALL_SELECTIONS', 'SELECTED_BUS_id', GLOBAL_V);

    // Desabilita el <select> y cambia su estilo
    changeStyles(SELECTS_ID.SELECT_BUSES, styleGeneral);

    //Habilita el <select> TURNO y añade un <option> por cada ruta disponible
    showNewSelect(SELECTS_ID.SELECT_TURNOS, GLOBAL_V.LINEA_BASE_INFO_MATCH.rutas[GLOBAL_V.SELECTED_DIAS_id].buses[GLOBAL_V.SELECTED_BUS_id].turno, createOptionsForRutas)

    //Aplica estilos al select
    putInitialStyle(SELECTS_ID.SELECT_TURNOS, initialStyle);

  });

    // ----------------------------------- DETECCION <SELECT> TURNO -------------------  
    SELECTS_ID.SELECT_TURNOS.addEventListener('change', (event) => {
      //Detecta seleccion hecha en el <select> y guarda el valor en las dos propiedades del objeto GLOBAL_V ALL_SELECTIONS y SELECTED_RUTA_id
      savingSelectedData(event.target.value, 'ALL_SELECTIONS', 'SELECTED_TURNO_id', GLOBAL_V);
  
      // Desabilita el <select> y cambia su estilo
      changeStyles(SELECTS_ID.SELECT_TURNOS, styleGeneral);


      // Crea una funcion con Delay para ingresar los datos dentro del html
      setTimeout(function () {
        // Oculta los select del html
        DOM_ELEMENTS.SECTION_SELECTS.style.display = 'none';
        // Añade la info dentro del section
        DOM_ELEMENTS.SECTION_LINEA_INFO.innerHTML = lineaStructure(GLOBAL_V, GLOBAL_V.LINEA_BASE_INFO_MATCH, paradasLinea_OBJ);
      }, 1800);

    });



  // ---------------------- BOTON DE RESETEO SELECTS ------------------------------
  DOM_ELEMENTS.BOTON_RESET.addEventListener("click", () => {
    SELECTS_ID.ALL_SELECTS.forEach((element) => {
      element.disabled = false;
      element.value = "default";
    });

    console.clear();
    Object.keys(GLOBAL_V).forEach((key) => {
      GLOBAL_V[key] = "";
    });

    location.reload();
  });


};

