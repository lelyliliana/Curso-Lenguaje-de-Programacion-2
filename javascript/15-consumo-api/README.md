# Laboratorio 15: Consumo de APIs

**Nivel:** Intermedio

**Duración estimada:** 45 minutos

**Requisitos previos:**

- Variables
- Funciones
- Arrays
- Objetos
- DOM
- Eventos
- Fetch

**Concepto principal:**

Consumir una API pública para construir una interfaz dinámica.

---

## Objetivo

Desarrollar una aplicación web que obtenga información desde una API pública y presente los datos de forma organizada mediante JavaScript.

## Descripción

Las API (Application Programming Interface) permiten que diferentes aplicaciones intercambien información.

En este laboratorio se consulta una API pública de productos y se construye automáticamente un catálogo mostrando información como el nombre, la imagen, la categoría y el precio.

A diferencia del laboratorio anterior, aquí el objetivo no es aprender la función `fetch()`, sino utilizarla para construir una aplicación útil.

---

## Conceptos trabajados

- Consumo de APIs
- Fetch API
- JSON
- Arrays
- Objetos
- DOM
- Eventos
- Funciones
- Programación asíncrona

---

## API utilizada

```
https://fakestoreapi.com/products
```

---

## Información obtenida

Cada producto contiene, entre otros, los siguientes atributos:

- id
- title
- price
- description
- category
- image
- rating

---

## Ejemplo

```javascript
const respuesta = await fetch(
    "https://fakestoreapi.com/products"
);

const productos = await respuesta.json();
```

---

## Funcionamiento del laboratorio

1. El usuario presiona **Consultar productos**.
2. JavaScript realiza la petición HTTP.
3. La API devuelve un arreglo de productos.
4. Se recorren los datos utilizando `forEach()`.
5. Se construye dinámicamente el catálogo.
6. Los productos aparecen en la página.

---

## Flujo del laboratorio

```text
Usuario

↓

Botón

↓

Fetch

↓

API

↓

JSON

↓

JavaScript

↓

Tarjetas de productos
```

---

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Interfaz del laboratorio. |
| `style.css` | Estilos del catálogo. |
| `script.js` | Consulta y presentación de los productos. |
| `README.md` | Documentación del laboratorio. |

---

## Cómo ejecutar el laboratorio

1. Abra la carpeta `javascript/consumoApi`.
2. Ejecute `index.html`.
3. Presione **Consultar productos**.
4. Espere la respuesta de la API.
5. Observe el catálogo generado automáticamente.

---

## Reto

Amplíe la aplicación para mostrar también:

- Descripción del producto.
- Calificación.
- Cantidad de opiniones.
- Botón "Ver detalle".

Opcionalmente, agregue un filtro por categoría.

---

## Resultado esperado

El laboratorio debe construir dinámicamente un catálogo de productos utilizando la información recibida desde una API pública.

---

## Conclusiones

Las API permiten integrar información proveniente de diferentes sistemas y constituyen uno de los pilares del desarrollo web moderno. Gracias a ellas es posible construir aplicaciones dinámicas que consumen información actualizada desde servidores remotos, ofreciendo experiencias mucho más completas a los usuarios.