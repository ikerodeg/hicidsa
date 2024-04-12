function coleStructure(COLE_RUTA_FOUND, colegioSelected) {
  const stopsRuta = COLE_RUTA_FOUND.stops.map ( (parada, index) => `<li><a href="${COLE_RUTA_FOUND.stops[index].linkMaps}">${COLE_RUTA_FOUND.stops[index].name}<br>${COLE_RUTA_FOUND.stops[index].descript}</a></li>`).join('');
  return  `
    <header>
      <h2>${colegioSelected.name}</h2>
      <p><a target="_blank" href='${colegioSelected.linkMaps}'>${colegioSelected.address} 🔗</a></p>
      <p>${colegioSelected.contact}</p>
    </header>
    <section class="section-rutaInfo">
      <h2>${COLE_RUTA_FOUND.rutaName}</h2>
      <p id='entrada_p'>Entrada mañanas</p>
      <p id='salida_p'>Salida tardes</p>
      <p class="horas__p" id='hInOutCole'>${COLE_RUTA_FOUND.hInOutCole}</p>
    </section>
    <section class="section-guia">
      <h2>Recogida Guía</h2>
      <h3>${COLE_RUTA_FOUND.zonaGuia.nameGuia}</h3>
      <p><a target="_blank" href='${COLE_RUTA_FOUND.zonaGuia.linkPlaceTakeGuia}'>${COLE_RUTA_FOUND.zonaGuia.placeTakeGuia}</a></p>
      <p class="horas__p">${COLE_RUTA_FOUND.zonaGuia.hTakeGuia}</p>
    </section>
    <section class="section-stops">
      <h2>Paradas Ruta</h2>
      <ol>${stopsRuta}</ol>
    </section>
    <section class="section-rutaMaps">
      <h2>Ruta Google Maps</h2>
      <p><a target="_blank" href='${COLE_RUTA_FOUND.linkRutaMaps}'>Enlace a ruta Maps 🔗</a></p>
    </section>
    <section class='section-obser' id='section_obser'>
      <h2>Observaciones ⚠️</h2>
      <ul>
        <li id='obser_p'>${COLE_RUTA_FOUND.observaciones}</li>
      </ul>
    </section>
    <section class="section-parteTrabajo">
      <h2>Datos parte trabajo</h2>
      <p>Inicio</p>
      <p class="horas__p">${COLE_RUTA_FOUND.parteHr[0]}</p>
      <p>Final</p>
      <p class="horas__p">${COLE_RUTA_FOUND.parteHr[1]}</p>
    </section>
    `
}

export { coleStructure };