function coleStructure(GLOBAL_V) {
  const stopsRuta = GLOBAL_V.COLE_FULL_MATCH.stops.map ( (parada, index) => `<li><a href="${GLOBAL_V.COLE_FULL_MATCH.stops[index].linkMaps}">${GLOBAL_V.COLE_FULL_MATCH.stops[index].name}<br>${GLOBAL_V.COLE_FULL_MATCH.stops[index].descript}</a></li>`).join('');
  return  `
    <header>
      <h2>${GLOBAL_V.COLE_MATCH.name}</h2>
      <p><a target="_blank" href='${GLOBAL_V.COLE_MATCH.linkMaps}'>${GLOBAL_V.COLE_MATCH.address} 🔗</a></p>
      <p>${GLOBAL_V.COLE_MATCH.contact}</p>
    </header>
    <section class="section-rutaInfo" id="sectionRutaInfo">
      <h2>${GLOBAL_V.COLE_FULL_MATCH.rutaName}</h2>
      <p id='entrada_p'>Entrada mañanas</p>
      <p id='salida_p'>Salida tardes</p>
      <p class="horas__p" id='hInOutCole'>${GLOBAL_V.COLE_FULL_MATCH.hInOutCole}</p>
    </section>
    <section class="section-guia">
      <h2>Recogida Guía</h2>
      <h3>${GLOBAL_V.COLE_FULL_MATCH.zonaGuia.nameGuia}</h3>
      <p><a target="_blank" href='${GLOBAL_V.COLE_FULL_MATCH.zonaGuia.linkPlaceTakeGuia}'>${GLOBAL_V.COLE_FULL_MATCH.zonaGuia.placeTakeGuia}</a></p>
      <p class="horas__p">${GLOBAL_V.COLE_FULL_MATCH.zonaGuia.hTakeGuia}</p>
    </section>
    <section class="section-stops">
      <h2>Paradas Ruta</h2>
      <ol>${stopsRuta}</ol>
    </section>
    <section class="section-rutaMaps">
      <h2>Ruta Google Maps</h2>
      <p><a target="_blank" href='${GLOBAL_V.COLE_FULL_MATCH.linkRutaMaps}'>Enlace a ruta Maps 🔗</a></p>
    </section>
    <section class='section-obser' id='section_obser'>
      <h2>Observaciones ⚠️</h2>
      <ul>
        <li id='obser_p'>${GLOBAL_V.COLE_FULL_MATCH.observaciones}</li>
      </ul>
    </section>
    <section class="section-parteTrabajo">
      <h2>Datos parte trabajo</h2>
      <p>Inicio</p>
      <p class="horas__p">${GLOBAL_V.COLE_FULL_MATCH.parteHr[0]}</p>
      <p>Final</p>
      <p class="horas__p">${GLOBAL_V.COLE_FULL_MATCH.parteHr[1]}</p>
    </section>
    `
}

export { coleStructure };