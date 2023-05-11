
fetch('assets/colegios.txt')
.then(response => response.text())
.then(data => {
  const select = document.getElementById('colegios');
    const lines = data.split('\n');
    lines.forEach(line => {
      const [value, text] = line.split(':');
      const option = document.createElement('option');
      option.value = value;
      option.text = text;
      select.appendChild(option);
    });
  });
    
const colegios = document.getElementById('colegios');
const rutasContainer = document.getElementById('rutas-container');
const rutas = document.getElementById('rutas');
const horarioContainer = document.getElementById('horario-container');
const horario = document.getElementById('horario');
const articles = document.querySelectorAll('article');

let multiSelection = '';

colegios.addEventListener('change', function() {
  console.log(`Se ha seleccionado ${colegios.value}`);
  multiSelection = colegios.value;
  rutasContainer.style.display = 'block';
});

fetch('assets/rutas.txt')
  .then(response => response.text())
  .then(data => {
    const select = document.getElementById('rutas');
    const lines = data.split('\n');
    lines.forEach(line => {
      const [value, text] = line.split(':');
      const option = document.createElement('option');
      option.value = value;
      option.text = text;
      select.appendChild(option);
    });
  });


rutas.addEventListener('change', function() {
  console.log(`Se ha seleccionado ${rutas.value}`);
  multiSelection += '-' + rutas.value;
  horarioContainer.style.display = 'block';
});

horario.addEventListener('change', function() {
  console.log(`Se ha seleccionado ${horario.value}`);
  multiSelection += '-' + horario.value;
  console.log(`Se ha seleccionado: ${multiSelection}`);
  
  //Leer el archivo "articles.html"
  fetch("assets/articles.html")
    .then(response => response.text())
    .then(data => {
      console.log("Contenido del archivo articles.html cargado:");
  
      // Convertir el contenido del archivo en un objeto DOM
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(data, "text/html");
  
      console.log("Objeto DOM generado a partir del archivo:");
      console.log(htmlDoc);
  
      // Buscar todos los elementos "article"
      const articles = htmlDoc.querySelectorAll("article");
  
      console.log("Elementos 'article' encontrados en el archivo:");
      console.log(articles);
  
      // Recorrer cada "article" y comparar su id con la variable "multiSelection"
      articles.forEach(article => {
        console.log(`Comprobando si ${article.id} coincide con ${multiSelection}`);
        if (article.id === multiSelection) {
          console.log(`Coincidencia encontrada: ${article.id} coincide con ${multiSelection}`);
          // Si hay coincidencia, añadir el "article" a la página web
          const contenido = document.querySelector(".contenido");
          contenido.appendChild(article);
          console.log(`El elemento ${article.id} se ha añadido a la página web.`);
        }
      });
    })
    .catch(error => console.error(error));

});

const resetButton = document.getElementById('reset-button');

resetButton.addEventListener('click', function() {
  console.clear();
  for (let i = 0; i < articles.length; i++) {
    articles[i].style.display = 'none';
  }
  horario.selectedIndex = 0;
  rutas.selectedIndex = 0;
  colegios.selectedIndex = 0;
  rutasContainer.style.display = 'none';
  horarioContainer.style.display = 'none';
  multiSelection = '';

  const articleToHide = document.querySelector("article");
  if (articleToHide) {
    articleToHide.style.display = "none";
    console.log("El elemento article ha sido ocultado.");
  } else {
    console.log("No se ha encontrado ningún elemento article.");
  }
  
});

for (let i = 0; i < articles.length; i++) {
  articles[i].style.display = 'none';
}
horario.selectedIndex = 0;
rutas.selectedIndex = 0;
colegios.selectedIndex = 0;
rutasContainer.style.display = 'none';
horarioContainer.style.display = 'none';
multiSelection = '';