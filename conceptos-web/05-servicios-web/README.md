# Laboratorio 05: ¿Cómo se comunican dos aplicaciones?

**Nivel:** Básico

**Duración estimada:** 45 minutos

**Requisitos previos:**

- Laboratorio 01: ¿Qué ocurre cuando escribes una dirección web?
- Laboratorio 02: Cliente y servidor.
- Laboratorio 03: ¿Cómo se comunican el cliente y el servidor?
- Laboratorio 04: ¿En qué formato viajan los datos?

**Concepto principal:**

Comprender qué es un servicio web y cómo permite la comunicación entre aplicaciones.

---

# Objetivo

Comprender el papel que desempeñan los servicios web en el intercambio de información entre aplicaciones y conocer las principales arquitecturas utilizadas actualmente.

---

# Introducción

Hasta este momento hemos analizado cómo un navegador se comunica con un servidor.

Sin embargo, hoy en día las aplicaciones no solo se comunican con navegadores.

También intercambian información entre ellas.

Por ejemplo:

- Una aplicación bancaria consulta otra aplicación.
- Un sistema de pagos se comunica con un banco.
- Una tienda virtual consulta una empresa transportadora.
- Una aplicación del clima consulta un servicio meteorológico.

En todos estos casos intervienen los **Servicios Web**.

---

# La gran pregunta

> **¿Cómo logran comunicarse dos aplicaciones diferentes?**

---

# ¿Qué es un Servicio Web?

Un Servicio Web es un mecanismo que permite intercambiar información entre dos aplicaciones utilizando una red.

Su función consiste en recibir solicitudes, procesarlas y devolver una respuesta.

No importa:

- el lenguaje utilizado;
- el sistema operativo;
- la base de datos;
- la tecnología empleada.

Mientras ambas aplicaciones hablen el mismo protocolo podrán comunicarse.

---

# Comunicación entre aplicaciones

Una comunicación típica puede representarse así:

```text
Aplicación A

↓

Servicio Web

↓

Aplicación B
```

Cada aplicación puede estar desarrollada con tecnologías completamente diferentes.

---

# Ejemplo

Supongamos una tienda virtual.

Cuando el usuario realiza un pago:

```text
Tienda virtual

↓

Servicio de pagos

↓

Banco

↓

Respuesta

↓

Tienda virtual
```

La tienda nunca habla directamente con el banco.

La comunicación se realiza mediante servicios.

---

# Arquitecturas más conocidas

A lo largo de la evolución del desarrollo web han existido diferentes formas de construir servicios.

Las más conocidas son:

- XML-RPC.
- SOAP.
- REST.

---

# XML-RPC

XML-RPC fue uno de los primeros mecanismos utilizados para intercambiar información mediante XML.

Su funcionamiento es relativamente sencillo.

Actualmente se utiliza muy poco en proyectos nuevos.

---

# SOAP

SOAP significa:

```text
Simple Object Access Protocol
```

Características principales:

- Utiliza XML.
- Sigue reglas muy estrictas.
- Incluye estándares de seguridad.
- Muy utilizado históricamente en entidades financieras, gubernamentales y empresariales.

SOAP continúa presente en muchos sistemas heredados.

---

# REST

REST significa:

```text
Representational State Transfer
```

No es un protocolo.

Es un estilo de arquitectura.

Generalmente utiliza:

- HTTP.
- JSON.

Actualmente es el modelo más utilizado para desarrollar APIs web.

---

# Comparación

| XML-RPC | SOAP | REST |
|---------|------|------|
| XML | XML | Generalmente JSON |
| Poco utilizado | Utilizado en sistemas empresariales | Muy utilizado actualmente |
| Más simple | Más estricto | Más flexible |

---

# ¿Cuál utilizaremos?

Durante este curso trabajaremos principalmente con:

- HTTP.
- JSON.
- REST.

Esto se debe a que representan la arquitectura predominante en el desarrollo web moderno.

Sin embargo, es importante conocer que SOAP y XML-RPC existen y aún son utilizados en algunos sistemas.

---

# Conceptos aprendidos

Durante este laboratorio el estudiante comprenderá:

- Servicio Web.
- XML-RPC.
- SOAP.
- REST.
- Comunicación entre aplicaciones.

---

# Funcionamiento del laboratorio

Durante esta práctica el estudiante:

1. Analiza diferentes escenarios de comunicación.
2. Identifica cuándo interviene un servicio web.
3. Diferencia SOAP y REST.
4. Comprende por qué actualmente REST es la arquitectura predominante.

---

# Actividad propuesta

Seleccione una aplicación que utilice frecuentemente.

Por ejemplo:

- WhatsApp.
- Bancolombia.
- Mercado Libre.
- Amazon.
- Spotify.

Después responda:

- ¿Con qué otras aplicaciones cree que se comunica?
- ¿Qué información podría intercambiar?
- ¿Considera que utiliza servicios web?

Justifique su respuesta.

---

# Buenas prácticas

- Pensar en los servicios web como mecanismos de comunicación.
- Diferenciar protocolo y arquitectura.
- No asumir que dos aplicaciones comparten la misma base de datos.
- Comprender que actualmente REST domina el desarrollo web.

---

# Resultado esperado

Al finalizar el laboratorio el estudiante comprenderá cómo se comunican aplicaciones diferentes mediante servicios web y conocerá las principales arquitecturas utilizadas.

---

# Conclusiones

Los servicios web permiten integrar aplicaciones desarrolladas con tecnologías diferentes.

Gracias a ellos es posible construir sistemas distribuidos capaces de compartir información de manera segura y organizada.

REST se ha convertido en la arquitectura predominante debido a su simplicidad y facilidad de integración con aplicaciones modernas.

---

# ¿Qué sigue?

Hasta este momento sabemos:

- Cómo aparece una página.
- Quién participa.
- Cómo se comunican.
- Cómo viajan los datos.
- Cómo intercambian información diferentes aplicaciones.

En el siguiente laboratorio responderemos una nueva pregunta:

> **¿Qué es realmente una API REST?**

A partir de ella conoceremos:

- Recursos.
- Endpoints.
- CRUD.
- Parámetros.
- URLs.
- Arquitectura REST.