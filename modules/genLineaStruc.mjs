function headerLineaBaseInfo(globalObject, lineaBaseInfoMatch) {
  return  `
      <header class="header__baseInfo">
        <h2>Línea</h2>
        <p class="p__code">${lineaBaseInfoMatch.maquina.codeLineaLabo} - ${lineaBaseInfoMatch.maquina.codeLineaIni}</p>
        <h3 class="header__h3">${lineaBaseInfoMatch.info.value}</h3>
        <h3 class="header__h3 header__h3--bus">❮ ${lineaBaseInfoMatch.rutas[globalObject.SELECTED_DIAS_id].buses[globalObject.SELECTED_BUS_id].value} ❯</h3>
      </header>
  `
};

function articleLineaJornada(globalObject, lineaBaseInfoMatch){
  return `
    <article class="article__jornada">
      <h2>Inicio Jornada</h2>
      <p class="article__p">📍 <a target="_blank" href='${'#'}'>${lineaBaseInfoMatch.rutas[globalObject.SELECTED_DIAS_id].buses[globalObject.SELECTED_BUS_id].turno[globalObject.SELECTED_TURNO_id].lgInicio} 🔗</a></p>
      <p class="horas__p">${lineaBaseInfoMatch.rutas[globalObject.SELECTED_DIAS_id].buses[globalObject.SELECTED_BUS_id].turno[globalObject.SELECTED_TURNO_id].hrInicio}</p>
      <h2>Relevo / Fin Jornada</h2>
      <p class="article__p">📍 <a target="_blank" href='${'#'}'>${lineaBaseInfoMatch.rutas[globalObject.SELECTED_DIAS_id].buses[globalObject.SELECTED_BUS_id].turno[globalObject.SELECTED_TURNO_id].lgRelevo} 🔗</a></p>
      <p class="horas__p">${lineaBaseInfoMatch.rutas[globalObject.SELECTED_DIAS_id].buses[globalObject.SELECTED_BUS_id].turno[globalObject.SELECTED_TURNO_id].hrRelevo}</p>
    </article>
  `
};

function articleLineaBilletes(globalObject, lineaBaseInfoMatch){
  return `
    <article class="article__billetes">
      <h2>Códigos Billetes</h2>
      <p class="article__p"><span class="span__icon">🎟️</span> interurbano</p>
      <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bInterUrbano}</span> ${lineaBaseInfoMatch.maquina.bInterUrbanoPrec}</p>
      <p class="article__p"><span class="span__icon">🎟️</span> urbano</p>
      <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bUrbano}</span> ${lineaBaseInfoMatch.maquina.bUrbanoPrec}</p>
      <p class="article__p"><span class="span__icon">🎟️</span> jubilados</p>
      <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bJubilados}</span> ${lineaBaseInfoMatch.maquina.bJubiladosPrec}</p>
      <p class="article__p"><span class="span__icon">🎟️</span> < 3 años</p>
      <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bmenores}</span> ${lineaBaseInfoMatch.maquina.bmenoresPrec}</p>
      <p class="article__p"><span class="span__icon">🎟️</span> < 7 años</p>
      <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bhasta7}</span> ${lineaBaseInfoMatch.maquina.bhasta7Prec}</p>
      <p class="article__p"><span class="span__icon">🎟️</span> transbordo</p>
      <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bTransbordo}</span> ${lineaBaseInfoMatch.maquina.bTransbordoPrec}</p>
      <p class="article__p"><span class="span__icon">🎟️</span> desc. general</p>
      <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bDescGeneral}</span> ${lineaBaseInfoMatch.maquina.bDescGeneralPrec}</p>
      <p class="article__p"><span class="span__icon">🎟️</span> desc. especial</p>
      <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bDescEspecial}</span> ${lineaBaseInfoMatch.maquina.bDescEspecialPrec}</p>
    </article>
  `
};

function articleLineaHorarios(globalObject, lineaBaseInfoMatch){
  let horarios = lineaBaseInfoMatch.rutas[globalObject.SELECTED_DIAS_id].buses[globalObject.SELECTED_BUS_id].turno[globalObject.SELECTED_TURNO_id].horarios;
  let rows = '';
  for(let i = 0; i < horarios.length; i+=2) {
    let horario1 = horarios[i] ? horarios[i] : '';
    let horario2 = horarios[i+1] ? horarios[i+1] : '';
    rows += `
      <tr>
        <td>${horario1}</td>
        <td>${horario2}</td>
      </tr>
    `;
  }
  return `
    <article class="article__horarios">
      <h2>Horarios</h2>
      <table>
        <thead>
          <tr>
            <th>Castellon</th>
            <th>Almazora</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    </article>
  `;
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

function lineaStructure(globalObject, lineaBaseInfoMatch, rutasObject) {

  return  `
    ${headerLineaBaseInfo(globalObject, lineaBaseInfoMatch)}
    ${articleLineaJornada(globalObject, lineaBaseInfoMatch)}
    ${articleLineaBilletes(globalObject, lineaBaseInfoMatch)}
    ${articleLineaHorarios(globalObject, lineaBaseInfoMatch)}
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