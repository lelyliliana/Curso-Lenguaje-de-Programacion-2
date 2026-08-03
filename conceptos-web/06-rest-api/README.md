# Laboratorio 06: ¿Qué es realmente una API REST?

**Nivel:** Básico

**Duración estimada:** 60 minutos

**Requisitos previos:**

- Laboratorio 01: ¿Qué ocurre cuando escribes una dirección web?
- Laboratorio 02: Cliente y servidor.
- Laboratorio 03: ¿Cómo se comunican el cliente y el servidor?
- Laboratorio 04: ¿En qué formato viajan los datos?
- Laboratorio 05: ¿Cómo se comunican dos aplicaciones?

**Concepto principal:**

Comprender qué es una API REST y cómo permite acceder a los recursos de una aplicación.

---

# Objetivo

Comprender el funcionamiento de una API REST, identificar sus recursos, endpoints y operaciones principales, y prepararse para consumir información desde JavaScript y React.

---

# Introducción

En el laboratorio anterior aprendimos que dos aplicaciones pueden comunicarse mediante Servicios Web.

Sin embargo, todavía falta responder una pregunta.

> **¿Qué es realmente una API?**

Hoy prácticamente todas las aplicaciones modernas utilizan APIs.

Por ejemplo:

- Instagram.
- Facebook.
- Spotify.
- YouTube.
- GitHub.
- Google Maps.
- OpenWeather.
- Mercado Libre.

Todas permiten que otras aplicaciones consulten información de forma controlada.

---

# La gran pregunta

> **¿Qué es una API REST?**

---

# ¿Qué significa API?

API significa:

```text
Application Programming Interface
```

En español:

```text
Interfaz de Programación de Aplicaciones.
```

Una API es un conjunto de reglas que permite que otras aplicaciones consulten o envíen información.

No es una base de datos.

No es un programa.

Es un intermediario entre aplicaciones.

---

# ¿Qué significa REST?

REST significa:

```text
Representational State Transfer
```

REST es un estilo de arquitectura.

Define una forma organizada de diseñar APIs utilizando principalmente:

- HTTP
- JSON

---

# ¿Qué es un recurso?

Una API organiza la información mediante recursos.

Ejemplos:

```text
Usuarios

Productos

Pedidos

Cursos

Noticias

Comentarios
```

Cada recurso representa un conjunto de información relacionada.

---

# ¿Qué es un endpoint?

Un endpoint es una dirección específica de una API.

Ejemplo:

```text
https://api.ejemplo.com/usuarios
```

Otro ejemplo:

```text
https://api.ejemplo.com/productos
```

Cada endpoint representa un recurso diferente.

---

# Ejemplo completo

Supongamos una API para una biblioteca.

```text
https://api.biblioteca.com/libros
```

El recurso es:

```text
Libros
```

Si el cliente realiza:

```text
GET /libros
```

obtendrá la lista de libros disponibles.

---

# CRUD

Las APIs REST normalmente implementan las operaciones CRUD.

CRUD significa:

```text
Create

Read

Update

Delete
```

Estas operaciones se relacionan directamente con HTTP.

| CRUD | HTTP |
|------|------|
| Create | POST |
| Read | GET |
| Update | PUT / PATCH |
| Delete | DELETE |

---

# Parámetros de ruta

Muchas APIs utilizan parámetros dentro de la URL.

Ejemplo:

```text
GET /usuarios/15
```

El número:

```text
15
```

identifica el usuario solicitado.

---

# Parámetros de consulta

También es posible enviar parámetros mediante la URL.

Ejemplo:

```text
GET /productos?categoria=computadores
```

o

```text
GET /usuarios?ciudad=Medellín
```

Estos parámetros permiten realizar filtros.

---

# Respuesta de una API

Normalmente una API REST responde utilizando JSON.

Ejemplo:

```json
{
    "id": 15,
    "nombre": "María",
    "programa": "Ingeniería de Sistemas"
}
```

Cuando existen varios elementos:

```json
[
    {
        "id": 1,
        "nombre": "Juan"
    },
    {
        "id": 2,
        "nombre": "María"
    }
]
```

---

# Arquitectura general

Una consulta REST puede representarse así:

```text
Cliente

↓

GET

↓

REST API

↓

Servidor

↓

Base de datos

↓

JSON

↓

Cliente
```

---

# Ejemplo de la vida real

Una aplicación del clima podría realizar:

```text
GET /clima?ciudad=Medellín
```

La API respondería:

```json
{
    "temperatura": 31,
    "estado": "Soleado"
}
```

La aplicación solamente muestra la información.

Toda la lógica ocurre en la API.

---

# Conceptos aprendidos

Durante este laboratorio el estudiante comprenderá:

- API.
- REST.
- Endpoint.
- Recurso.
- CRUD.
- Parámetros.
- JSON.
- Arquitectura REST.

---

# Funcionamiento del laboratorio

Durante esta práctica el estudiante:

1. Analiza diferentes APIs.
2. Identifica recursos.
3. Identifica endpoints.
4. Diferencia recursos y parámetros.
5. Relaciona CRUD con HTTP.
6. Interpreta respuestas JSON.

---

# Actividad propuesta

Observe las siguientes direcciones.

```text
/api/usuarios

/api/productos

/api/cursos

/api/noticias
```

Responda:

- ¿Cuál es el recurso?
- ¿Qué método HTTP utilizaría para consultar?
- ¿Qué método utilizaría para crear un nuevo elemento?
- ¿Qué método utilizaría para eliminarlo?

---

# Buenas prácticas

- Utilizar nombres claros para los recursos.
- Mantener URLs sencillas.
- Utilizar correctamente los métodos HTTP.
- No incluir acciones dentro del nombre del endpoint.

Por ejemplo:

Correcto:

```text
/api/productos
```

Evitar:

```text
/api/obtenerProductos
```

---

# Resultado esperado

Al finalizar el laboratorio el estudiante comprenderá cómo se organiza una API REST y cómo una aplicación puede acceder a información mediante recursos y endpoints.

---

# Conclusiones

Las APIs REST constituyen actualmente el mecanismo más utilizado para intercambiar información entre aplicaciones.

Comprender su organización facilitará enormemente el consumo de datos mediante JavaScript y React.

---

# ¿Qué sigue?

Hasta este momento sabemos:

- Cómo aparece una página.
- Quién participa.
- Cómo se comunican.
- Cómo viajan los datos.
- Qué son los Servicios Web.
- Qué es una API REST.

En el siguiente laboratorio aprenderemos a explorar una API real utilizando herramientas especializadas.

Antes de programar, veremos cómo consultar información y analizar respuestas utilizando aplicaciones como **Postman** o **Bruno**.