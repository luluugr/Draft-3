// --- Manejo de menú ---
const enlacesMenu = document.querySelectorAll('nav a');
const secciones = document.querySelectorAll('.seccion-menu');

enlacesMenu.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = link.getAttribute('href').substring(1);

    secciones.forEach(sec => {
      sec.style.display = "none"; // ocultar todas
      if (sec.id === target) {
        sec.style.display = "block"; // mostrar solo la clickeada
      }
    });
  });
});

// --- Formulario de registro ---
const btnAbrirRegistro = document.getElementById('abrirRegistro');
const formRegistro = document.getElementById('formRegistro');
const saludoUsuario = document.getElementById('saludoUsuario');
const usuarioGuardado = document.getElementById('usuarioGuardado');

btnAbrirRegistro.addEventListener('click', () => {
  formRegistro.classList.toggle('form-oculto');
});

formRegistro.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;
  saludoUsuario.textContent = `Hola ${nombre}!`;
  usuarioGuardado.textContent = "Tu cuenta está activa ✅";
  formRegistro.classList.add('form-oculto');
});

// --- Predicciones dinámicas ---
const botonesVerMas = document.querySelectorAll('.ver-mas');
const detallePrediccion = document.getElementById('detallePrediccion');

botonesVerMas.forEach(btn => {
  btn.addEventListener('click', () => {
    const dia = btn.dataset.dia;
    detallePrediccion.textContent = `Otras 3 posibles predicciones para el Día ${dia} con diferentes caritas aquí 😃😐😷`;
  });
});

