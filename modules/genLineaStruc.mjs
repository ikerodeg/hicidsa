function headerLineaBaseInfo(globalObject, lineaBaseInfoMatch) {
  return  `
      <article class="article__baseInfo">
        <h2 class="article__h2">Línea</h2>
        <p class="article__p article__p--code">${lineaBaseInfoMatch.maquina.codeLineaLabo} - ${lineaBaseInfoMatch.maquina.codeLineaIni}</p>
        <h3 class="header__h3">${lineaBaseInfoMatch.info.value}</h3>
        <h3 class="header__h3 header__h3--bus">⧼ ${lineaBaseInfoMatch.rutas[globalObject.SELECTED_DIAS_id].buses[globalObject.SELECTED_BUS_id].value} ⧽</h3>
      </article>
  `
};

function articleLineaJornada(globalObject, lineaBaseInfoMatch){
  return `
    <article class="article__jornada">
      <h2 class="article__h2">Inicio Jornada</h2>
      <p class="article__p">📍 <a target="_blank" href='${'https://maps.app.goo.gl/2jGinLz6hphgikEW9'}'>${lineaBaseInfoMatch.rutas[globalObject.SELECTED_DIAS_id].buses[globalObject.SELECTED_BUS_id].turno[globalObject.SELECTED_TURNO_id].lgInicio} 🔗</a></p>
      <p class="article__p article__p--hrs">${lineaBaseInfoMatch.rutas[globalObject.SELECTED_DIAS_id].buses[globalObject.SELECTED_BUS_id].turno[globalObject.SELECTED_TURNO_id].hrInicio}</p>
      <h2 class="article__h2">Relevo / Fin Jornada</h2>
      <p class="article__p">📍 <a target="_blank" href='${'https://maps.app.goo.gl/Ham3U6XMtEsxbaJh7'}'>${lineaBaseInfoMatch.rutas[globalObject.SELECTED_DIAS_id].buses[globalObject.SELECTED_BUS_id].turno[globalObject.SELECTED_TURNO_id].lgRelevo} 🔗</a></p>
      <p class="article__p article__p--hrs">${lineaBaseInfoMatch.rutas[globalObject.SELECTED_DIAS_id].buses[globalObject.SELECTED_BUS_id].turno[globalObject.SELECTED_TURNO_id].hrRelevo}</p>
    </article>
  `
};

function articleLineaBilletes(globalObject, lineaBaseInfoMatch){
  if (lineaBaseInfoMatch.maquina.observaciones) {
    return `
    <article class="article__billetes">
      <h2 class="article__h2">Códigos Billetes</h2>
      <div>
        <p class="article__p"><span class="span__icon">🎟️</span> interurbano</p>
        <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bInterUrbano}</span> ${lineaBaseInfoMatch.maquina.bInterUrbanoPrec}</p>
      </div>
      <div>
        <p class="article__p"><span class="span__icon">🎟️</span> urbano</p>
        <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bUrbano}</span> ${lineaBaseInfoMatch.maquina.bUrbanoPrec}</p>
      </div>
      <div>
        <p class="article__p"><span class="span__icon">🎟️</span> jubilados</p>
        <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bJubilados}</span> ${lineaBaseInfoMatch.maquina.bJubiladosPrec}</p>
      </div>
      <div>
        <p class="article__p"><span class="span__icon">🎟️</span> < 3 años</p>
        <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bmenores}</span> ${lineaBaseInfoMatch.maquina.bmenoresPrec}</p>
      </div>
      <div>
        <p class="article__p"><span class="span__icon">🎟️</span> < 7 años</p>
        <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bhasta7}</span> ${lineaBaseInfoMatch.maquina.bhasta7Prec}</p>
      </div>
      <div>
        <p class="article__p"><span class="span__icon">🎟️</span> transbordo</p>
        <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bTransbordo}</span> ${lineaBaseInfoMatch.maquina.bTransbordoPrec}</p>
      </div>
      <div>
        <p class="article__p"><span class="span__icon">🎟️</span> desc. general</p>
        <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bDescGeneral}</span> ${lineaBaseInfoMatch.maquina.bDescGeneralPrec}</p>
      </div>
      <div>
        <p class="article__p"><span class="span__icon">🎟️</span> desc. especial</p>
        <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bDescEspecial}</span> ${lineaBaseInfoMatch.maquina.bDescEspecialPrec}</p>
      </div>
      <div>
      <p class="article__p">Cambio tipo de billete</p>
      <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.keyChangeBillete}</span></p>
      <p class="article__p">${lineaBaseInfoMatch.maquina.observaciones}</p>
    </div>
    </article>
  `
  }
  return `
    <article class="article__billetes">
      <h2 class="article__h2">Códigos Billetes</h2>
      <div>
        <p class="article__p"><span class="span__icon">🎟️</span> interurbano</p>
        <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bInterUrbano}</span> ${lineaBaseInfoMatch.maquina.bInterUrbanoPrec}</p>
      </div>
      <div>
        <p class="article__p"><span class="span__icon">🎟️</span> urbano</p>
        <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bUrbano}</span> ${lineaBaseInfoMatch.maquina.bUrbanoPrec}</p>
      </div>
      <div>
        <p class="article__p"><span class="span__icon">🎟️</span> jubilados</p>
        <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bJubilados}</span> ${lineaBaseInfoMatch.maquina.bJubiladosPrec}</p>
      </div>
      <div>
        <p class="article__p"><span class="span__icon">🎟️</span> < 3 años</p>
        <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bmenores}</span> ${lineaBaseInfoMatch.maquina.bmenoresPrec}</p>
      </div>
      <div>
        <p class="article__p"><span class="span__icon">🎟️</span> < 7 años</p>
        <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bhasta7}</span> ${lineaBaseInfoMatch.maquina.bhasta7Prec}</p>
      </div>
      <div>
        <p class="article__p"><span class="span__icon">🎟️</span> transbordo</p>
        <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bTransbordo}</span> ${lineaBaseInfoMatch.maquina.bTransbordoPrec}</p>
      </div>
      <div>
        <p class="article__p"><span class="span__icon">🎟️</span> desc. general</p>
        <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bDescGeneral}</span> ${lineaBaseInfoMatch.maquina.bDescGeneralPrec}</p>
      </div>
      <div>
        <p class="article__p"><span class="span__icon">🎟️</span> desc. especial</p>
        <p class="article__p"><span class="span__key">${lineaBaseInfoMatch.maquina.bDescEspecial}</span> ${lineaBaseInfoMatch.maquina.bDescEspecialPrec}</p>
      </div>
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
      <h2 class="article__h2">Horarios</h2>
      <table class="article__table">
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

function articleLineaStops(globalObject, lineaBaseInfoMatch, rutasObject){
  const stopsRuta = rutasObject[globalObject.SELECTED_LINEA_id][globalObject.ALL_SELECTIONS].stops.map ( (parada, index) => `<li><a target="_blank" href="${parada.linkMaps}">${index + 1}. ${parada.name}<br></a>${parada.descript}</li>`).join('');

  return `
    <article class="article__stops">
      <h2 class="article__h2">Paradas Ruta</h2>
      <ul class="article__ul">${stopsRuta}</ul>
    </article>
  `
};

function  articleLineaLinkRuta(globalObject, lineaBaseInfoMatch, rutasObject){
  return `
  <article class="article__linkRuta">
    <h2 class="article__h2">Ruta Google Maps</h2>
    <p class="article__p"><a target="_blank" href="${rutasObject[globalObject.SELECTED_LINEA_id][globalObject.ALL_SELECTIONS].linkRutaMaps}"> Enlace a ruta Maps 🔗</a></p>
  </article>
  `
};

function articleLineaObservaciones(globalObject, lineaBaseInfoMatch, rutasObject){
  if (rutasObject[globalObject.SELECTED_LINEA_id][globalObject.ALL_SELECTIONS].observaciones) {
    return `
    <article class="article__observaciones">
      <h2 class="article__h2">Observaciones</h2>
      <p class="article__p">${rutasObject[globalObject.SELECTED_LINEA_id][globalObject.ALL_SELECTIONS].observaciones}</p>
    </article>
    `
  } else {
    return ``
  }
};

function articleLineaPartesTrabajo(globalObject, lineaBaseInfoMatch, rutasObject){
  const parteTrabajo = lineaBaseInfoMatch.rutas[globalObject.SELECTED_DIAS_id].buses[globalObject.SELECTED_BUS_id].turno[globalObject.SELECTED_TURNO_id].parteTrabajo;
  return `
  <article class="article__partesTrabajo">
    <h2 class="article__h2">Parte de trabajo</h2>
    <div>
      <p class="article__p">Hora inicio</p>
      <p class="article__p article__p--hrs">${parteTrabajo.hrInicio}</p>
    </div>
    <div>
      <p class="article__p">Hora fin</p>
      <p class="article__p article__p--hrs">${parteTrabajo.hrFin}</p>
    </div>
    ${parteTrabajo.hrNoctur ? `
      <div>
        <p class="article__p">Horas noctur.</p>
        <p class="article__p article__p--hrs">${parteTrabajo.hrNoctur}</p>
      </div>
    ` : ''}
    ${parteTrabajo.diaFestivo ? `
      <div>
        <p class="article__p">Festivo</p>
        <p class="article__p article__p--hrs">${parteTrabajo.diaFestivo}</p>
      </div>
    ` : ''}
    ${parteTrabajo.pluses ? `
      <div>
        <p class="article__p">Pluses</p>
        <p class="article__p article__p--pluses">${parteTrabajo.pluses}</p>
      </div>
    ` : ''}
  </article>
`;
};

function lineaStructure(globalObject, lineaBaseInfoMatch, rutasObject) {

  return  `
    ${headerLineaBaseInfo(globalObject, lineaBaseInfoMatch)}
    ${articleLineaJornada(globalObject, lineaBaseInfoMatch)}
    ${articleLineaBilletes(globalObject, lineaBaseInfoMatch)}
    ${articleLineaHorarios(globalObject, lineaBaseInfoMatch)}
    ${articleLineaStops(globalObject, lineaBaseInfoMatch, rutasObject)}
    ${articleLineaLinkRuta(globalObject, lineaBaseInfoMatch, rutasObject)}
    ${articleLineaObservaciones(globalObject, lineaBaseInfoMatch, rutasObject)}
    ${articleLineaPartesTrabajo(globalObject, lineaBaseInfoMatch, rutasObject)}
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