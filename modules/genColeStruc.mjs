function headerColeBaseInfo(coleBaseInfoMatch) {
  return  `
    <article class="article__baseInfo">
      <h2 class="article__h2">${coleBaseInfoMatch.info.name}</h2>
      <p class="article__p"><a target="_blank" href='${coleBaseInfoMatch.info.linkMaps}'>${coleBaseInfoMatch.info.address} 🔗</a></p>
      <p class="article__p article__p--tlf">☎️ ${coleBaseInfoMatch.info.contact}</p>
    </article>
  `
};

function articleNombreRutaHora(globalObject, coleBaseInfoMatch){
  return `
    <section class="section__rutaTurno">
      <h2 class="article__h2">${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].value}</h2>
      <p class="article__p" id='inOut_h4'>${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].value}</p>
    </section>
  `
};

function articleRutaMesDias(globalObject, coleBaseInfoMatch){
  if (coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].mes) {
    return `
    <section class="section__mesDiasHora">
      <p class="article__p" id='mes_h4'>${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].mes[globalObject.SELECTED_MES_VARIANT_id].value}</p>
      <p class="article__p" id='dias'>${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].mes[globalObject.SELECTED_MES_VARIANT_id].dias[globalObject.SELECTED_DIAS_id].value}</p>
    </section>
  `
  } else {
    console.log(`NO hay mes ni dias disponibles`);
    return ``
  }

};

function articleRutaHoras(globalObject, coleBaseInfoMatch){

  if (coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].mes) {
    return `
      <section class="section__inOutHora">
        <p class="article__p article__p--hrs">${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].mes[globalObject.SELECTED_MES_VARIANT_id].dias[globalObject.SELECTED_DIAS_id].hrSalida}</p>
      </section>
    `
  } else {
    return `
      <section class="section__inOutHora">
        <p class="article__p article__p--hrs">${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].hrEntrada}</p>
      </section>
    `

  }
};

function sectionRutaInfo(coleBaseInfoMatch, globalObject) {
  if (coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].mes) {
    return `
      <article class="article__rutaInfo" id="articleRutaInfo">
        ${articleNombreRutaHora(globalObject, coleBaseInfoMatch)}
        ${articleRutaMesDias(globalObject, coleBaseInfoMatch)}
        ${articleRutaHoras(globalObject, coleBaseInfoMatch)}
      </article>
    `
  } else {
    return `
      <article class="article__rutaInfo" id="articleRutaInfo">
        ${articleNombreRutaHora(globalObject, coleBaseInfoMatch)}
        ${articleRutaHoras(globalObject, coleBaseInfoMatch)}
      </article>
    `
  }

};

function sectionGuiaInfo(coleBaseInfoMatch, globalObject){
  if (coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].mes) {
    return `
      <article class="article__guia">
        <h2 class="article__h2">Recogida Guía</h2>
        <h3 class="article__h3">${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].mes[globalObject.SELECTED_MES_VARIANT_id].dias[globalObject.SELECTED_DIAS_id].guia.nameGuia}</h3>
        <p class="article__p"><a target="_blank" href='linkMaps'>${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].mes[globalObject.SELECTED_MES_VARIANT_id].dias[globalObject.SELECTED_DIAS_id].guia.lgRecoGuia}</a></p>
        <p class="article__p article__p--hrs">${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].mes[globalObject.SELECTED_MES_VARIANT_id].dias[globalObject.SELECTED_DIAS_id].guia.hrRecoGuia}</p>
      </article>
    `
  } else {
    return `
      <article class="article__guia">
        <h2 class="article__h2">Recogida Guía</h2>
        <h3 class="article__h3">${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].guia.nameGuia}</h3>
        <p class="article__p"><a target="_blank" href='linkMaps'>${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].guia.lgRecoGuia}</a></p>
        <p class="article__p article__p--hrs">${coleBaseInfoMatch.rutas[globalObject.SELECTED_RUTA_id].turno[globalObject.SELECTED_TURNO_id].guia.hrRecoGuia}</p>
      </article>
    `
  }
};

function sectionStops(globalObject, rutasObject){
  const stopsRuta = rutasObject[globalObject.SELECTED_COLEGIO_id][globalObject.ALL_SELECTIONS].stops.map ( (parada, index) => `<li><a href="${parada.linkMaps}">${index + 1}. ${parada.name}<br></a>${parada.descript}</li>`).join('');

  return `
    <article class="article__stops">
      <h2 class="article__h2">Paradas Ruta</h2>
      <ul class="article__ul">${stopsRuta}</ul>
    </article>
  `

};

function  sectionLinkRuta(globalObject, rutasObject){
  return `
  <article class="article__linkRuta">
    <h2 class="article__h2">Ruta Google Maps</h2>
    <p class="article__p"><a href="${rutasObject[globalObject.SELECTED_COLEGIO_id][globalObject.ALL_SELECTIONS].linkRutaMaps}"> Enlace a ruta Maps 🔗</a></p>
  </article>
  `
};

function sectionObservaciones(globalObject, rutasObject){
  if (rutasObject[globalObject.SELECTED_COLEGIO_id][globalObject.ALL_SELECTIONS].observaciones) {
    return `
    <article class="article__observaciones">
      <h2 class="article__h2">Observaciones</h2>
      <p class="article__p">${rutasObject[globalObject.SELECTED_COLEGIO_id][globalObject.ALL_SELECTIONS].observaciones}</p>
    </article>
    `
  } else {
    return ``
  }
};

function sectionPartesTrabajo(globalObject, rutasObject){
  return `
    <article class="article__partesTrabajo">
      <h2 class="article__h2">Parte de trabajo</h2>
      <p class="article__p">Hora inicio</p>
      <p class="article__p article__p--hrs">${rutasObject[globalObject.SELECTED_COLEGIO_id][globalObject.ALL_SELECTIONS].parteTrabajo.hrInicio}</p>
      <p class="article__p">Hora fin</p>
      <p class="article__p article__p--hrs">${rutasObject[globalObject.SELECTED_COLEGIO_id][globalObject.ALL_SELECTIONS].parteTrabajo.hrFin}</p>
    </article>
  
  `
};

function coleStructure(coleBaseInfoMatch, globalObject, rutasObject) {

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

export { coleStructure };