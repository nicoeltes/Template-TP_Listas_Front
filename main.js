fetch('./data/comidas-extended.json')
  .then(response => response.json())
  .then(data => {
    console.log('Comidas cargadas desde JSON:');
    console.log(data);
    comidas = data;
    mostrarComida()
  })
  .catch(error => {
    console.error('Error al leer el archivo JSON:', error);
  });

let comidas = [];

function mostrarComida(){
  const comidaContainer = document.getElementById('comidaContainer');
  comidaContainer.innerHTML = "";

  comidas.forEach(comida => {
    comidaContainer.innerHTML += `
    <article class="card">
      <h2>${comida.nombre}</h2>
      <p>${comida.provincia}</p>
      <span>${comida.categoria}</span>
      <ul>
      </ul>
    </article>
    `
  })
}

const agregarComida = document.getElementById("agregarComidaForm");

agregarComida.addEventListener("submit", (event) => {

  event.preventDefault()
  alert("Comida agregada: " + event.target.nombre.value)

  let nuevaComida = {
    nombre: event.target.nombre.value,
    provincia: event.target.provincia.value,
    categoria: event.target.categoria.value,
    ingredientes: event.target.ingredientes.value.split(",")
  }

  console.log(nuevaComida)
  comidas.push(nuevaComida)
  mostrarComida()
  event.target.reset()

  const filtroCategoria = document.getElementById("filtroCategoria")

  filtroCategoria.addEventListener("change", () => {
    let comidasFiltradas = comidas.filter(comida => {
      return comida.categoria.includes(filtroCategoria.value)
      && comida.provincia.includes(filtroProvincia.value)

  })
  mostrarComidas(comidasFiltradas)
})

})
function buscar(){
  let comidasFiltradas = comidas.filter( comida => {
    return comida.nombre.toLowerCase().includes(busqueda.value.toLowerCase())
    || comida.Categoria.toLowerCase().includes(busqueda.value.toLowerCase())
    || comida.Provincia.toLowerCase().includes(busqueda.value.toLowerCase())
  })

  mostrarComidas(comidasFiltradas)
}
filtroCategoria.addEventListener("change" , filtrar)
filtroProvincia.addEventListener("change" , filtrar)
busqueda.addEventListener("input" , buscar)