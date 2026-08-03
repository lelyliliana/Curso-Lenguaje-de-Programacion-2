# Laboratorio 01: ¿Qué ocurre cuando escribes una dirección web?

**Nivel:** Básico

**Duración estimada:** 45 minutos

**Requisitos previos:**

- Ninguno.

**Concepto principal:**

Comprender el recorrido que realiza una solicitud web desde que un usuario escribe una dirección en el navegador hasta que la página aparece en pantalla.

---

# Objetivo

Comprender el funcionamiento general de una aplicación web siguiendo el recorrido que realiza una solicitud desde el navegador hasta el servidor y de regreso al usuario.

---

# Introducción

Todos los días utilizamos Internet.

Abrimos un navegador, escribimos una dirección como:

```text
https://www.uniremington.edu.co
```

presionamos **Enter** y, pocos segundos después, aparece una página completamente funcional.

Parece algo muy sencillo.

Sin embargo, durante ese breve instante ocurrieron decenas de procesos diferentes.

El navegador buscó un servidor.

Internet transportó información.

Se estableció una comunicación.

Se descargaron archivos.

El navegador interpretó esos archivos y finalmente construyó la página que observamos en pantalla.

En este laboratorio seguiremos ese recorrido paso a paso.

---

# La gran pregunta

> **¿Qué sucede exactamente después de presionar Enter?**

Esta pregunta será el hilo conductor de todo el laboratorio.

---

# Paso 1. El usuario

Todo comienza con una persona.

El usuario escribe una dirección web.

Por ejemplo:

```text
https://www.uniremington.edu.co
```

y presiona **Enter**.

Hasta este momento todavía no existe comunicación con el servidor.

Únicamente se ha introducido una dirección.

---

# Paso 2. El navegador

El siguiente protagonista es el navegador.

Puede ser:

- Google Chrome.
- Microsoft Edge.
- Mozilla Firefox.
- Safari.
- Opera.
- Brave.

El navegador interpreta la dirección escrita por el usuario y comienza el proceso para localizar el sitio solicitado.

Es importante comprender que el navegador **no almacena la página web**.

Su función consiste en solicitar la información al servidor correspondiente.

---

# Paso 3. La URL

La dirección escrita por el usuario recibe el nombre de:

**URL (Uniform Resource Locator).**

Ejemplo:

```text
https://www.uniremington.edu.co
```

Una URL puede dividirse en diferentes partes.

Por ahora identificaremos dos:

```text
https://
```

Corresponde al protocolo de comunicación.

Y:

```text
www.uniremington.edu.co
```

Corresponde al dominio del sitio.

En los siguientes laboratorios estudiaremos cada uno de estos elementos con mayor detalle.

---

# Paso 4. ¿Cómo encuentra el servidor?

El navegador necesita descubrir dónde se encuentra el servidor que almacena el sitio solicitado.

Para lograrlo consulta un servicio denominado:

**DNS (Domain Name System).**

El DNS traduce nombres fáciles de recordar en direcciones IP.

Por ejemplo:

```text
www.uniremington.edu.co

↓

200.xxx.xxx.xxx
```

La dirección IP utilizada aquí es únicamente un ejemplo.

Una dirección IP puede cambiar con el tiempo.

---

# Paso 5. Internet

Una vez conocida la dirección IP, la solicitud viaja a través de Internet.

Internet funciona como la infraestructura que permite transportar información entre millones de dispositivos alrededor del mundo.

Su función consiste en llevar la solicitud hasta el servidor correspondiente.

---

# Paso 6. El servidor

El servidor es un computador que permanece disponible para responder solicitudes.

Cuando recibe la petición del navegador localiza los recursos solicitados y prepara la respuesta.

---

# Paso 7. ¿Qué responde el servidor?

Muchas personas responden:

> "La página web."

En realidad, el servidor envía diferentes recursos.

Generalmente:

- Documento HTML.
- Hoja de estilos CSS.
- Archivos JavaScript.
- Imágenes.
- Fuentes.
- Videos.
- Audios.
- Otros recursos necesarios.

---

# Paso 8. El navegador construye la página

Después de recibir todos los archivos, el navegador comienza a interpretarlos.

El documento HTML proporciona la estructura.

La hoja de estilos CSS define la apariencia.

JavaScript incorpora comportamiento e interacción.

Finalmente el usuario observa la página web en pantalla.

---

# Resumen del recorrido

```text
Usuario

↓

Navegador

↓

URL

↓

DNS

↓

Dirección IP

↓

Internet

↓

Servidor

↓

HTML

↓

CSS

↓

JavaScript

↓

Navegador

↓

Página Web
```

---

# Conceptos aprendidos

Al finalizar este laboratorio el estudiante deberá comprender:

- Usuario.
- Navegador.
- URL.
- Dominio.
- DNS.
- Dirección IP.
- Internet.
- Servidor.
- HTML.
- CSS.
- JavaScript.

---

# Funcionamiento del laboratorio

Durante esta práctica el estudiante:

1. Escribe una dirección web en un navegador.
2. Analiza cada etapa del recorrido.
3. Identifica los principales componentes involucrados.
4. Comprende que una página web está formada por múltiples archivos.
5. Construye un esquema del recorrido realizado por la información.

---

# Actividad propuesta

Utilice cualquier sitio web.

Por ejemplo:

```text
https://www.uniremington.edu.co
```

o

```text
https://www.wikipedia.org
```

Después responda:

- ¿Quién inicia el proceso?
- ¿Qué hace el navegador?
- ¿Para qué sirve el DNS?
- ¿Qué función cumple Internet?
- ¿Qué hace el servidor?
- ¿Qué archivos devuelve el servidor?
- ¿Quién construye finalmente la página?

---

# Buenas prácticas

- No memorizar definiciones sin comprender el proceso.
- Pensar siempre en el recorrido completo de una solicitud.
- Relacionar cada concepto con el siguiente.
- Dibujar diagramas para representar el flujo de información.

---

# Resultado esperado

Al finalizar el laboratorio el estudiante comprenderá el recorrido completo que realiza una solicitud web desde que el usuario escribe una dirección hasta que la página aparece en pantalla.

---

# Conclusiones

Una página web no aparece instantáneamente.

Detrás de una acción tan cotidiana como presionar **Enter** participan diferentes componentes que trabajan coordinadamente.

Comprender este recorrido permitirá interpretar con mayor facilidad el funcionamiento de HTML, CSS, JavaScript, React y las APIs durante los siguientes módulos.

---

# ¿Qué sigue?

En el siguiente laboratorio responderemos una nueva pregunta:

> **¿Quién hace qué dentro de una aplicación web?**

A partir de ella conoceremos los conceptos de:

- Cliente.
- Servidor.
- Frontend.
- Backend.
- Base de datos.

Y comprenderemos el papel que desempeña cada uno dentro de una aplicación web moderna.