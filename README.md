# 📇 Agenda de Contactos - CRUD con JavaScript Vanilla

## 📌 Descripción

Aplicación web que permite gestionar una lista de contactos mediante un sistema CRUD (Crear, Leer, Actualizar y Eliminar), utilizando JavaScript Vanilla, manipulación del DOM y almacenamiento local con **localStorage**.

La interfaz cuenta con: validaciones en tiempo real y experiencia de usuario mejorada.

---

## 🚀 Funcionalidades

### ✅ CRUD Completo

* Crear nuevos contactos
* Visualizar lista de contactos
* Editar contactos existentes
* Eliminar contactos

---

### 🎨 Interfaz Moderna

* Fondo degradado
* Tarjetas con sombras suaves
* Botones con animaciones

---

### 🧾 Campos del Contacto

* Nombre
* Apellido
* Correo electrónico
* Teléfono
* Ciudad
* Género (con icono 👩 👨)

---

### 🔍 Validaciones

* Campos obligatorios
* Validación de correo (`email`)
* Validación de teléfono (7–15 dígitos)
* Feedback visual con CSS (`:valid` / `:invalid`)

---

### 🔔 Experiencia de Usuario

* Modal animado para crear/editar
* Notificaciones tipo **Toast**
* Indicador visual de acciones (crear, editar, eliminar)

---

### 💾 Persistencia de Datos

* Uso de **localStorage**
* Los datos permanecen aunque se recargue la página

---

### 📱 Diseño Responsive

* Adaptable a celulares, tablets y escritorio
* Uso de **Flexbox y Grid**
* Tarjetas que se reorganizan automáticamente

---

## 🗂️ Estructura del Proyecto

```
index.html
css/
  └── style.css
js/
  └── script.js
```

---

## 🛠️ Tecnologías Utilizadas

* HTML5
* CSS3 (Variables, Flexbox, Grid, Media Queries)
* JavaScript Vanilla (DOM, Eventos, LocalStorage)

---

## ▶️ Cómo Ejecutar el Proyecto

1. Descarga o clona el proyecto
2. Abre el archivo `index.html` en tu navegador
3. Haz clic en **"Nuevo contacto"**
4. Completa el formulario y guarda

---

## 🧪 Ejemplo de Uso

1. Crear contacto:

   * Nombre: Ana
   * Apellido: López
   * Correo: [ana@gmail.com](mailto:ana@gmail.com)
   * Teléfono: 3001234567
   * Ciudad: Cali

2. Resultado:

   * Se muestra una tarjeta con los datos
   * Aparece notificación "Creado"
   * Se guarda automáticamente

---

## ⚙️ Buenas Prácticas Aplicadas

* Código modular y organizado
* Separación de HTML, CSS y JS
* Funciones reutilizables
* Uso de constantes (`const`, `let`)
* Nombres descriptivos

---

## 💡 Posibles Mejoras

* Subida de foto real por contacto
* Buscador en tiempo real 🔍
* Filtros por ciudad o género
* Uso de IndexedDB en lugar de localStorage
* Exportar contactos a PDF o Excel

---

## 👨‍💻 Autor

Proyecto académico enfocado en el manejo del DOM, eventos y almacenamiento local.

---
