function headerLineaBaseInfo(lineaBaseInfoMatch, globalObject) {
  return  `
    <section class="section-infoLinea">
      <h2>${lineaBaseInfoMatch.info.name}</h2>
      <h2>${lineaBaseInfoMatch.rutas[globalObject.SELECTED_DIAS_id].buses[globalObject.SELECTED_BUS_id].value}</h2>
      <h3>Inicio Línea</h3>
      <p class="section__p"><a target="_blank" href='${'#'}'>${lineaBaseInfoMatch.rutas[globalObject.SELECTED_DIAS_id].buses[globalObject.SELECTED_BUS_id].turno[globalObject.SELECTED_TURNO_id].lgInicio} 🔗</a></p>
      <h3>Fin Línea</h3>
      <p class="section__p"><a target="_blank" href='${'#'}'>${lineaBaseInfoMatch.rutas[globalObject.SELECTED_DIAS_id].buses[globalObject.SELECTED_BUS_id].turno[globalObject.SELECTED_TURNO_id].lgFin} 🔗</a></p>
    </section>
  `
};

function articleNombreRutaHora(globalObject, coleBaseInfoMatch){
  return `
    <article>
      <h2>${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].value}</h2>
      <p class="section__p" id='inOut_h4'>${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].value}</p>
    </article>
  `
};

function articleRutaMesDias(globalObject, coleBaseInfoMatch){
  if (coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].mes) {
    return `
    <article>
      <h4 class="mes_h4" id='mes_h4'>${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].mes[globalObject.SELECTED_MES_VARIANT_id].value}</h4>
      <h4 class="dias" id='dias'>${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].mes[globalObject.SELECTED_MES_VARIANT_id].dias[globalObject.SELECTED_DIAS_id].value}</h4>
    </article>
  `
  } else {
    console.log(`NO hay mes ni dias disponibles`);
    return ``
  }

};

function articleRutaHoras(globalObject, coleBaseInfoMatch){

  if (coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].mes) {
    return `
      <article>
        <p class="horas__p">${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].mes[globalObject.SELECTED_MES_VARIANT_id].dias[globalObject.SELECTED_DIAS_id].hrSalida}</p>
      </article>
    `
  } else {
    return `
      <article>
        <p class="horas__p">${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].hrEntrada}</p>
      </article>
    `

  }
};

function sectionRutaInfo(coleBaseInfoMatch, globalObject) {
  if (coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].mes) {
    return `
      <section class="section-rutaInfo" id="sectionRutaInfo">
        ${articleNombreRutaHora(globalObject, coleBaseInfoMatch)}
        ${articleRutaMesDias(globalObject, coleBaseInfoMatch)}
        ${articleRutaHoras(globalObject, coleBaseInfoMatch)}
      </section>
    `
  } else {
    return `
      <section class="section-rutaInfo" id="sectionRutaInfo">
        ${articleNombreRutaHora(globalObject, coleBaseInfoMatch)}
        ${articleRutaHoras(globalObject, coleBaseInfoMatch)}
      </section>
    `
  }

};

function sectionGuiaInfo(coleBaseInfoMatch, globalObject){
  if (coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].mes) {
    return `
      <section class="section-guia">
        <h2>Recogida Guía</h2>
        <h3>${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].mes[globalObject.SELECTED_MES_VARIANT_id].dias[globalObject.SELECTED_DIAS_id].guia.nameGuia}</h3>
        <p class="section__p"><a target="_blank" href='linkMaps'>${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].mes[globalObject.SELECTED_MES_VARIANT_id].dias[globalObject.SELECTED_DIAS_id].guia.lgRecoGuia}</a></p>
        <p class="horas__p">${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].mes[globalObject.SELECTED_MES_VARIANT_id].dias[globalObject.SELECTED_DIAS_id].guia.hrRecoGuia}</p>
      </section>
    `
  } else {
    return `
      <section class="section-guia">
        <h2>Recogida Guía</h2>
        <h3>${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].guia.nameGuia}</h3>
        <p class="section__p"><a target="_blank" href='linkMaps'>${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].guia.lgRecoGuia}</a></p>
        <p class="horas__p">${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].guia.hrRecoGuia}</p>
      </section>
    `
  }
};

function sectionStops(globalObject, rutasObject){
  const stopsRuta = rutasObject[globalObject.SELECTED_COLEGIO_id][globalObject.ALL_SELECTIONS].stops.map ( (parada, index) => `<li><a href="${parada.linkMaps}">${index + 1}. ${parada.name}<br></a>${parada.descript}</li>`).join('');

  return `
    <section class="section-stops">
      <h2>Paradas Ruta</h2>
      <ul>${stopsRuta}</ul>
    </section>
  `

};

function  sectionLinkRuta(globalObject, rutasObject){
  return `
  <section class="section-linkRuta">
    <h2>Ruta Google Maps</h2>
    <p class="section__p"><a href="${rutasObject[globalObject.SELECTED_COLEGIO_id][globalObject.ALL_SELECTIONS].linkRutaMaps}"> Enlace a ruta Maps 🔗</a></p>
  </section>
  `
};

function sectionObservaciones(globalObject, rutasObject){
  if (rutasObject[globalObject.SELECTED_COLEGIO_id][globalObject.ALL_SELECTIONS].observaciones) {
    return `
    <section class="section-observaciones">
      <h2>Observaciones</h2>
      <p class="section__p">${rutasObject[globalObject.SELECTED_COLEGIO_id][globalObject.ALL_SELECTIONS].observaciones}</p>
    </section>
    `
  } else {
    return ``
  }
};

function sectionPartesTrabajo(globalObject, rutasObject){
  return `
    <section class="section-partesTrabajo">
      <h2>Parte de trabajo</h2>
      <p class="section__p">Hora inicio</p>
      <p class="horas__p">${rutasObject[globalObject.SELECTED_COLEGIO_id][globalObject.ALL_SELECTIONS].parteTrabajo.hrInicio}</p>
      <p class="section__p">Hora fin</p>
      <p class="horas__p">${rutasObject[globalObject.SELECTED_COLEGIO_id][globalObject.ALL_SELECTIONS].parteTrabajo.hrFin}</p>
    </section>
  
  `
};

function lineaStructure(coleBaseInfoMatch, globalObject, rutasObject) {

  return  `
    ${headerLineaBaseInfo(coleBaseInfoMatch, globalObject)}

    `
}

export { lineaStructure };


/*
function lineaStructure(coleBaseInfoMatch, globalObject, rutasObject) {

  return  `
    ${headerColeBaseInfo(coleBaseInfoMatch)}
    ${sectionRutaInfo(coleBaseInfoMatch, globalObject)}
    ${sectionGuiaInfo(coleBaseInfoMatch, globalObject)}
    ${sectionStops(globalObject, rutasObject)}
    ${sectionLinkRuta(globalObject, rutasObject)}
    ${sectionObservaciones(globalObject, rutasObject)}
    ${sectionPartesTrabajo(globalObject, rutasObject)}

    `
}
*/