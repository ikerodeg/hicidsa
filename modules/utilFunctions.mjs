const STYLES = {
  backgroundImage: 'none',
  background: 'hsl(0, 0%, 10%)',
  fontSize: '100%',
  color: 'hsl(216, 69%, 41%)',
};

const STYLES_RESET = {
  border: '1px solid hsl(0, 100%, 50%)',
  color: 'hsl(0, 100%, 33%)',
}

// Función para ocultar elementos
function hideElements(elements) {
  elements.forEach((element) => {
    element.style.display = 'none';
  });
};

//Funcion para crear opciones para el select Colegios
function createOptionsForColegios(select_id, objeto) {
  Object.keys(objeto).forEach(key => {
    const option = document.createElement('option');
    option.text = objeto[key].info.name;
    option.value = key;
    option.id = key;

    // Añade cada <OPTION> creado al select
    select_id.add(option);
    
  });
};

//Funcion para crear opciones para el select Rutas
function createOptionsForRutas(select_id, objeto) {
  Object.keys(objeto).forEach(key => {
    const option = document.createElement('option');
    option.text = objeto[key].value;
    option.value = key;
    option.id = key;

    // Añade cada <OPTION> creado al select
    select_id.add(option);
  });
};

//Funcion para crear opciones para el select Turnos
function createOptionsForTurnos(selectId, objeto) {
  Object.entries(objeto).forEach(([key, value]) => {
    const option = document.createElement('option');
    option.id = key;
    option.value = key;
    option.text = value;

    // Añade cada <OPTION> creado al select
    selectId.add(option);
  })
};

//Funcion para crear opciones para el select Meses
function createOptionsForMeses(selectId, objeto) {
  Object.entries(objeto).forEach(([key, value]) => {
    const option = document.createElement('option');
    option.text = value.value;
    option.value = key;
    option.id = key;

    // Añade cada <OPTION> creado al select
    selectId.add(option);
  });
};

//Funcion para crear opciones para el select DIAS
function createOptionsForDias(selectId, objeto) {
  Object.entries(objeto).forEach(([key, value]) => {
    const option = document.createElement('option');
    option.text = value.value;
    option.value = key;
    option.id = key;
    
    // Añade cada <OPTION> creado al select
    selectId.add(option);
  });
};

//Funcioón que cambia el stilo y desabilita la seleccion
function changeStyle(element, styles) {
  Object.assign(element.style, styles);
};


//Funcion para cambiar estilos de los <select> una vez seleccionado
const styleGeneral = (selectId) => {
  Object.assign(selectId.style, STYLES);
  selectId.disabled = true;

}

//Funcion para habilitar y cambiar el estilo del boton reset
const styleResetButton = (selectId) => {
  Object.assign(selectId.style, STYLES_RESET);
  selectId.disabled = false;
  selectId.style.pointerEvents = 'auto';
  selectId.style.boxShadow = '0 0 10px rgb(255, 86, 86)';
  selectId.style.color = 'hsl(0, 100%, 58%)';
}

//Funcion para guardar el valor del option seleccionado en el objeto GLOBAL_V
const savingSelectedData = (newValue, objectPropertyAll, objecPropertySpecific, globalObject) => {
  console.log(`Seleccionado: ${newValue}`);

  //Guarda la seleccion en la propiedad especifica de SELECTED
  globalObject[objecPropertySpecific] = `${newValue}`;
  console.log(`OPTION_SELECTED_id: ${globalObject[objecPropertySpecific]}`);
  
  //Guarda la seleccion en la propiedad ALL_SELECTIONS del Objeto GLOBAL_V
  if (!globalObject[objectPropertyAll]) {
    globalObject[objectPropertyAll] = `${newValue}`;
  } else {
    globalObject[objectPropertyAll] += `-${newValue}`;
  }

  //Comprueba si lo ha guardado correctamente
  console.log(`ALL_SELECTIONS: ${globalObject[objectPropertyAll]}`);
};

//Funcion que cambia el estilo de un elemento
const changeStyles = (selectId, callback) => {
  //Cambia el estilo del <select> después de la selección y lo desabilita
  callback(selectId);
};

//Funcion que muestra un <select> y añade options
const showNewSelect = (selectId, object, createOptionsFunction) => {
  selectId.style.display = "block";
  createOptionsFunction(selectId, object);
};

//Funcion para buscar el colgio seleccionado dentro del array de colegios
const buscaColeSeleccionado = (coleId, arrayColes) => {
  return arrayColes[coleId] || `Colegio no encontrado!`;
};

export { buscaColeSeleccionado, hideElements, createOptionsForColegios, createOptionsForRutas, createOptionsForTurnos,createOptionsForMeses, createOptionsForDias, changeStyle, showNewSelect, changeStyles, savingSelectedData, styleResetButton, styleGeneral };
