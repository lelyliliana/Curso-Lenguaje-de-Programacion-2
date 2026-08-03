# Laboratorio 03: ¿Cómo se comunican el cliente y el servidor?

**Nivel:** Básico

**Duración estimada:** 50 minutos

**Requisitos previos:**

- Laboratorio 01: ¿Qué ocurre cuando escribes una dirección web?
- Laboratorio 02: Cliente y servidor.

**Concepto principal:**

Comprender cómo se comunican el cliente y el servidor mediante el protocolo HTTP.

---

# Objetivo

Comprender el funcionamiento básico del protocolo HTTP, los métodos utilizados para intercambiar información y los principales códigos de respuesta empleados por las aplicaciones web.

---

# Introducción

En el laboratorio anterior conocimos el cliente y el servidor.

Ahora surge una nueva pregunta.

> **¿Cómo hablan entre ellos?**

La respuesta es:

**HTTP.**

Cada vez que una página solicita información, descarga una imagen, reproduce un video o envía un formulario, utiliza este protocolo de comunicación.

---

# La gran pregunta

> **¿Cómo viaja la información entre el navegador y el servidor?**

---

# ¿Qué es HTTP?

HTTP significa:

```text
HyperText Transfer Protocol
```

En español:

```text
Protocolo de Transferencia de Hipertexto.
```

Su función consiste en definir las reglas mediante las cuales un cliente y un servidor intercambian información.

---

# Cliente y servidor

La comunicación siempre comienza con el cliente.

```text
Cliente

↓

Petición HTTP

↓

Servidor

↓

Respuesta HTTP

↓

Cliente
```

El servidor nunca envía información sin haber recibido antes una solicitud.

---

# Petición HTTP

Una petición contiene información como:

- Dirección solicitada.
- Método HTTP.
- Encabezados.
- Datos enviados (cuando existen).

Por ejemplo:

```text
GET https://www.uniremington.edu.co
```

---

# Respuesta HTTP

Después de procesar la solicitud, el servidor responde.

La respuesta puede incluir:

- Código de estado.
- Encabezados.
- Documento HTML.
- Archivo JSON.
- Imagen.
- Video.
- Mensaje de error.

---

# Métodos HTTP

Los métodos indican la acción que el cliente desea realizar.

---

## GET

Solicita información.

Ejemplos:

- Abrir una página web.
- Consultar productos.
- Buscar usuarios.

```text
GET /productos
```

---

## POST

Envía información al servidor.

Ejemplos:

- Registrar un usuario.
- Iniciar sesión.
- Enviar un formulario.

```text
POST /usuarios
```

---

## PUT

Actualiza completamente un recurso existente.

Ejemplo:

```text
PUT /usuarios/15
```

---

## PATCH

Actualiza únicamente parte de un recurso.

Ejemplo:

```text
PATCH /usuarios/15
```

---

## DELETE

Elimina un recurso.

Ejemplo:

```text
DELETE /usuarios/15
```

---

# CRUD y HTTP

Existe una relación muy utilizada entre HTTP y CRUD.

| CRUD | HTTP |
|------|------|
| Create | POST |
| Read | GET |
| Update | PUT / PATCH |
| Delete | DELETE |

---

# Códigos de estado

Cada respuesta incluye un código.

---

## 200 OK

La solicitud fue procesada correctamente.

---

## 201 Created

El recurso fue creado correctamente.

---

## 400 Bad Request

La solicitud contiene información incorrecta.

---

## 401 Unauthorized

El usuario no ha iniciado sesión.

---

## 403 Forbidden

El usuario está autenticado, pero no tiene permisos.

---

## 404 Not Found

El recurso solicitado no existe.

---

## 500 Internal Server Error

Se produjo un error en el servidor.

---

# HTTPS

Actualmente la mayoría de sitios utilizan:

```text
HTTPS
```

La letra **S** significa:

```text
Secure
```

HTTPS incorpora cifrado para proteger la información intercambiada.

---

# Ejemplo completo

Un usuario inicia sesión.

```text
Usuario

↓

Formulario

↓

POST

↓

Servidor

↓

Base de datos

↓

Validación

↓

200 OK

↓

Página principal
```

---

# Conceptos aprendidos

Durante este laboratorio el estudiante comprenderá:

- HTTP.
- HTTPS.
- Solicitud.
- Respuesta.
- Métodos HTTP.
- CRUD.
- Códigos de estado.

---

# Funcionamiento del laboratorio

Durante esta práctica el estudiante:

1. Analiza una comunicación HTTP.
2. Identifica el método utilizado.
3. Interpreta el código de respuesta.
4. Relaciona HTTP con CRUD.
5. Comprende el uso de HTTPS.

---

# Actividad propuesta

Analice las siguientes situaciones e indique qué método HTTP utilizaría.

- Consultar una lista de productos.
- Registrar un usuario.
- Actualizar una fotografía.
- Cambiar únicamente el correo electrónico.
- Eliminar una publicación.

Después indique el código de respuesta esperado si la operación fue exitosa.

---

# Buenas prácticas

- Utilizar el método HTTP adecuado.
- Interpretar correctamente los códigos de respuesta.
- Preferir HTTPS sobre HTTP.
- No utilizar GET para enviar información sensible.

---

# Resultado esperado

Al finalizar el laboratorio el estudiante comprenderá cómo se comunican el cliente y el servidor mediante HTTP y podrá interpretar las operaciones básicas utilizadas por las aplicaciones web.

---

# Conclusiones

HTTP constituye el lenguaje de comunicación entre el navegador y el servidor.

Comprender sus métodos y códigos de respuesta facilitará posteriormente el consumo de APIs mediante JavaScript y React.

---

# ¿Qué sigue?

Hasta este momento sabemos cómo viaja la información.

En el siguiente laboratorio responderemos una nueva pregunta:

> **¿En qué formato viajan los datos?**

A partir de esa pregunta estudiaremos **JSON** y **XML**, los formatos más utilizados para intercambiar información entre aplicaciones.