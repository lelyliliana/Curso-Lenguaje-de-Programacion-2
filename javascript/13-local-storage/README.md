# Laboratorio 13: Local Storage

**Nivel:** Intermedio

**Duración estimada:** 40 minutos

**Requisitos previos:**

- Variables
- Objetos
- Formularios
- DOM

**Concepto principal:**

Almacenar información de manera permanente en el navegador utilizando **Local Storage**.

---

## Objetivo

Aprender a guardar, recuperar y eliminar información almacenada localmente en el navegador mediante la API `localStorage`.

## Descripción

Normalmente, cuando una página web se recarga, toda la información almacenada en variables desaparece.

Local Storage permite conservar datos incluso después de cerrar el navegador, lo que lo convierte en una excelente herramienta para desarrollar pequeñas aplicaciones sin necesidad de una base de datos.

En este laboratorio se registra un estudiante y la información permanece almacenada hasta que el usuario decida eliminarla.

---

## Conceptos trabajados

- Local Storage
- Objetos
- JSON
- `JSON.stringify()`
- `JSON.parse()`
- Formularios
- DOM
- Eventos

---

## Métodos utilizados

| Método | Descripción |
|---------|-------------|
| `setItem()` | Guarda información. |
| `getItem()` | Recupera información almacenada. |
| `removeItem()` | Elimina un elemento almacenado. |
| `clear()` | Elimina toda la información almacenada. |

---

## Ejemplo

```javascript
const estudiante = {

    nombre: "María",

    programa: "Ingeniería de Sistemas"

};

localStorage.setItem(
    "estudiante",
    JSON.stringify(estudiante)
);
```

Recuperación:

```javascript
const estudiante =
    JSON.parse(
        localStorage.getItem("estudiante")
    );
```

---

## Funcionamiento del laboratorio

1. El usuario diligencia el formulario.
2. JavaScript crea un objeto estudiante.
3. El objeto se convierte a formato JSON.
4. Se almacena en Local Storage.
5. Al recargar la página, la información continúa disponible.
6. El usuario puede eliminar el registro almacenado.

---

## Flujo del laboratorio

```text
Formulario

↓

Objeto JavaScript

↓

JSON.stringify()

↓

Local Storage

↓

JSON.parse()

↓

Mostrar información
```

---

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Interfaz del laboratorio. |
| `style.css` | Estilos del laboratorio. |
| `script.js` | Implementación de Local Storage. |
| `README.md` | Documentación del laboratorio. |

---

## Cómo ejecutar el laboratorio

1. Abra la carpeta `javascript/localStorage`.
2. Ejecute `index.html`.
3. Registre un estudiante.
4. Recargue la página.
5. Observe que la información continúa disponible.
6. Elimine el registro almacenado.

---

## Reto

Amplíe el laboratorio para almacenar:

- Una lista de estudiantes.
- El promedio académico.
- El correo electrónico.
- La fecha de registro.

---

## Resultado esperado

El laboratorio debe almacenar correctamente la información del estudiante y recuperarla automáticamente cada vez que se abra nuevamente la página.

---

## Conclusiones

Local Storage permite desarrollar aplicaciones capaces de conservar información sin necesidad de utilizar un servidor o una base de datos. Es una excelente alternativa para proyectos pequeños, prototipos y aplicaciones que requieren persistencia de datos en el navegador.