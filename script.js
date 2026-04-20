const lista = document.getElementById('lista');
const modal = document.getElementById('modal');
const form = document.getElementById('form');
const toast = document.getElementById('toast');

let editId = null;

/* STORAGE */
const getData = () => JSON.parse(localStorage.getItem('contactos')) || [];
const saveData = data => localStorage.setItem('contactos', JSON.stringify(data));

/* UI */
const showModal = () => modal.classList.remove('hidden');
const hideModal = () => modal.classList.add('hidden');

function showToast(msg) {
  toast.textContent = msg;
  toast.classList.remove('hidden');
  setTimeout(() => toast.classList.add('hidden'), 2000);
}

const icono = g => g === 'M' ? '👨' : '👩';

/* RENDER */
function render() {
  lista.innerHTML = '';
  getData().forEach(c => {
    const div = document.createElement('div');
    div.className = 'contacto';

    div.innerHTML = `
      <div>
        ${icono(c.genero)} <b>${c.nombre} ${c.apellido}</b><br>
        📧 ${c.correo}<br>
        📱 ${c.telefono} | 📍 ${c.ciudad}
      </div>
      <div>
        <button onclick="editar(${c.id})">✏️</button>
        <button onclick="eliminar(${c.id})">🗑️</button>
      </div>
    `;
    lista.appendChild(div);
  });
}

/* CRUD */
form.addEventListener('submit', e => {
  e.preventDefault();

  const data = {
    id: editId || Date.now(),
    nombre: nombre.value.trim(),
    apellido: apellido.value.trim(),
    correo: correo.value.trim(),
    telefono: telefono.value.trim(),
    ciudad: ciudad.value.trim(),
    genero: genero.value
  };

  let contactos = getData();

  if (editId) {
    contactos = contactos.map(c => c.id === editId ? data : c);
    showToast('Actualizado');
  } else {
    contactos.push(data);
    showToast('Creado');
  }

  saveData(contactos);
  form.reset();
  editId = null;
  hideModal();
  render();
});

function editar(id) {
  const c = getData().find(c => c.id === id);

  Object.keys(c).forEach(k => {
    if (form[k]) form[k].value = c[k];
  });

  editId = id;
  showModal();
}

function eliminar(id) {
  saveData(getData().filter(c => c.id !== id));
  showToast('Eliminado');
  render();
}

/* EVENTOS */
document.getElementById('btnNuevo').onclick = showModal;
document.getElementById('cerrarModal').onclick = hideModal;

/* INIT */
render();