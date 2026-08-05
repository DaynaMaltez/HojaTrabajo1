


const imagenes = document.querySelectorAll(".galeria img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const modalDesc = document.getElementById("modal-desc");


imagenes.forEach(img => {
  img.addEventListener("click", () => {
    modal.classList.add("visible");
    modalImg.src = img.src;
    modalDesc.innerText = img.dataset.desc;
  });
});

const cerrar = document.getElementById("cerrar");

cerrar.addEventListener("click", () => {
  console.log("Clic en cerrar detectado");
  modal.classList.remove("visible"); // oculta el modal
});




const calcularBtn = document.getElementById("calcular");
const resultado = document.getElementById("resultado");

calcularBtn.addEventListener("click", () => {
  const asistentes = parseInt(document.getElementById("asistentes").value);
  const paquete = document.getElementById("paquete").value;
  let total = 0;

  if (paquete === "basico") total = asistentes * 50;
  if (paquete === "premium") total = asistentes * 100;

  if (document.getElementById("transporte").checked) total += 200;
  if (document.getElementById("alimentacion").checked) total += 150;
  if (document.getElementById("equipo").checked) total += 100;

  resultado.innerText = "Total estimado: Q" + total;
});


const buscador = document.getElementById("buscador");
const actividades = document.querySelectorAll("#lista-actividades li");

buscador.addEventListener("input", () => {
  const filtro = buscador.value.toLowerCase();
  actividades.forEach(item => {
    item.style.display = item.innerText.toLowerCase().includes(filtro) ? "" : "none";
  });
});


const formReserva = document.getElementById("form-reserva");
const mensaje = document.getElementById("mensaje");

formReserva.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const personas = document.getElementById("personas").value;

  if (nombre && personas) {
    mensaje.innerText = `¡Gracias ${nombre}, tu solicitud para ${personas} personas ha sido registrada!`;
  } else {
    mensaje.innerText = "Por favor completa todos los campos.";
  }
});


const nombres = ["Ana Gómez", "Carlos López", "María Pérez", "Luis Díaz", "Dayna Meza"];
const comentarios = [
  "Una experiencia inolvidable.",
  "El guía fue excelente.",
  "Los paisajes son espectaculares.",
  "Muy buena organización.",
  "Recomendado al 100%."
];

const reseñaCont = document.getElementById("contenedor-reseña");
const i = Math.floor(Math.random() * nombres.length);
reseñaCont.innerHTML = `<h4>${nombres[i]}</h4><p>${comentarios[i]}</p>`;
