# Laboratorio 14: Fetch

**Nivel:** Intermedio

**Duración estimada:** 40 minutos

**Requisitos previos:**

- Variables
- Funciones
- Arrays
- Objetos
- DOM
- Eventos

**Concepto principal:**

Consultar información desde servicios web utilizando la función `fetch()`.

---

## Objetivo

Aprender a consumir información desde una API utilizando la función `fetch()` y presentar los datos obtenidos dinámicamente en una página web.

## Descripción

Las aplicaciones modernas intercambian información constantemente con servidores remotos.

La función `fetch()` permite enviar solicitudes HTTP y recibir respuestas desde servicios web, generalmente en formato JSON.

En este laboratorio se consulta una API pública para obtener información de varios usuarios y mostrarla en la interfaz.

---

## Conceptos trabajados

- Fetch API
- HTTP
- JSON
- Promesas
- `async`
- `await`
- `try`
- `catch`
- Arrays
- Objetos
- DOM

---

## Métodos utilizados

| Método | Descripción |
|---------|-------------|
| `fetch()` | Realiza una petición HTTP. |
| `json()` | Convierte la respuesta a un objeto JavaScript. |
| `forEach()` | Recorre cada elemento recibido desde la API. |

---

## Ejemplo

```javascript
const respuesta = await fetch(
    "https://jsonplaceholder.typicode.com/users"
);

const usuarios = await respuesta.json();
```

---

## Funcionamiento del laboratorio

1. El usuario presiona **Consultar usuarios**.
2. JavaScript realiza una petición HTTP.
3. El servidor responde con información en formato JSON.
4. La respuesta se convierte a objetos JavaScript.
5. Cada usuario se muestra dinámicamente en la página.

---

## Flujo del laboratorio

```text
Usuario

↓

Fetch

↓

Servidor

↓

Respuesta JSON

↓

Objetos JavaScript

↓

Mostrar información
```

---

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Interfaz del laboratorio. |
| `style.css` | Estilos visuales. |
| `script.js` | Consulta la API utilizando Fetch. |
| `README.md` | Documentación del laboratorio. |

---

## Cómo ejecutar el laboratorio

1. Abra la carpeta `javascript/fetch`.
2. Ejecute `index.html`.
3. Presione **Consultar usuarios**.
4. Espere la respuesta del servidor.
5. Observe la información presentada.

---

## Reto

Amplíe la aplicación para mostrar:

- Teléfono.
- Sitio web.
- Empresa.
- Dirección completa.

---

## Resultado esperado

El laboratorio debe consultar correctamente la API pública y mostrar la información recibida utilizando JavaScript.

---

## Conclusiones

La función `fetch()` constituye el mecanismo estándar para consumir servicios web desde JavaScript. Gracias a ella es posible desarrollar aplicaciones que obtienen información dinámica desde servidores remotos, una característica esencial en el desarrollo web moderno.