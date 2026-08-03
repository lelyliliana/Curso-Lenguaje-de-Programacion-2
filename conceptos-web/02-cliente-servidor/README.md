# Laboratorio 02: Cliente y servidor

**Nivel:** Básico

**Duración estimada:** 45 minutos

**Requisitos previos:**

- Laboratorio 01: ¿Qué ocurre cuando escribes una dirección web?

**Concepto principal:**

Comprender las responsabilidades de cada uno de los componentes que participan en una aplicación web.

---

# Objetivo

Identificar el papel del cliente, el servidor, el frontend, el backend y la base de datos dentro de una aplicación web moderna.

---

# Introducción

En el laboratorio anterior descubrimos el recorrido que realiza una solicitud web.

Ahora responderemos una nueva pregunta.

> **¿Quién hace realmente el trabajo?**

Cuando abrimos una página web intervienen varios componentes.

Cada uno tiene responsabilidades diferentes.

Comprender estas responsabilidades facilitará posteriormente el aprendizaje de HTML, CSS, JavaScript, React y las APIs.

---

# La gran pregunta

> **¿Quién hace qué dentro de una aplicación web?**

---

# El cliente

El cliente es el dispositivo desde el cual una persona utiliza una aplicación.

Puede ser:

- Un computador.
- Un teléfono móvil.
- Una tableta.
- Un televisor inteligente.

En la mayoría de los casos el cliente utiliza un navegador web para acceder al sitio.

---

# El navegador

El navegador es la aplicación que ejecuta el código del lado del cliente.

Entre sus funciones se encuentran:

- Descargar archivos.
- Interpretar HTML.
- Aplicar CSS.
- Ejecutar JavaScript.
- Mostrar la página al usuario.

El navegador constituye el principal representante del cliente.

---

# El servidor

El servidor es un computador que permanece disponible para responder solicitudes.

Su función consiste en:

- Recibir peticiones.
- Buscar información.
- Ejecutar procesos.
- Enviar respuestas.

El servidor normalmente no muestra información al usuario.

Su trabajo consiste en responder correctamente al cliente.

---

# Frontend

El frontend corresponde a todo aquello con lo que interactúa el usuario.

Incluye:

- HTML.
- CSS.
- JavaScript.
- Imágenes.
- Videos.
- Formularios.
- Botones.

El frontend se ejecuta en el navegador.

---

# Backend

El backend corresponde a la parte interna de la aplicación.

Generalmente incluye:

- Servidor.
- Reglas del negocio.
- Acceso a bases de datos.
- Autenticación.
- Seguridad.
- Servicios Web.
- APIs.

El usuario normalmente no observa el backend.

---

# Base de datos

La base de datos almacena la información de la aplicación.

Por ejemplo:

- Usuarios.
- Productos.
- Pedidos.
- Calificaciones.
- Mensajes.
- Fotografías.

El navegador nunca consulta directamente la base de datos.

Siempre lo hace a través del backend.

---

# Arquitectura básica

El recorrido completo puede representarse así:

```text
Usuario

↓

Cliente

↓

Navegador

↓

Frontend

↓

Internet

↓

Servidor

↓

Backend

↓

Base de datos
```

Después la información realiza el recorrido contrario hasta llegar nuevamente al usuario.

---

# Ejemplo

Supongamos que un estudiante inicia sesión en una plataforma virtual.

El proceso sería:

```text
Usuario

↓

Escribe usuario y contraseña

↓

Navegador

↓

Servidor

↓

Backend

↓

Base de datos

↓

Validación

↓

Respuesta

↓

Página principal
```

---

# Diferencia entre frontend y backend

| Frontend | Backend |
|----------|----------|
| Se ejecuta en el navegador. | Se ejecuta en el servidor. |
| Lo observa el usuario. | Normalmente permanece oculto. |
| HTML, CSS y JavaScript. | Lenguajes del servidor y bases de datos. |
| Interfaz gráfica. | Lógica del negocio. |

---

# Conceptos aprendidos

Durante este laboratorio el estudiante comprenderá:

- Cliente.
- Navegador.
- Servidor.
- Frontend.
- Backend.
- Base de datos.

---

# Funcionamiento del laboratorio

Durante esta práctica el estudiante:

1. Analiza el recorrido de una solicitud.
2. Identifica el cliente.
3. Identifica el servidor.
4. Diferencia frontend y backend.
5. Comprende el papel de la base de datos.
6. Representa el proceso mediante un diagrama.

---

# Actividad propuesta

Seleccione una aplicación web que utilice frecuentemente.

Por ejemplo:

- Moodle.
- YouTube.
- Gmail.
- Facebook.
- Instagram.

Después identifique:

- ¿Quién es el cliente?
- ¿Dónde está el frontend?
- ¿Dónde se ejecuta el backend?
- ¿Qué información podría almacenarse en la base de datos?

---

# Buenas prácticas

- Diferenciar claramente frontend y backend.
- No asumir que el navegador almacena toda la información.
- Comprender que la base de datos nunca es consultada directamente por el usuario.
- Pensar siempre en el recorrido completo de la información.

---

# Resultado esperado

Al finalizar el laboratorio el estudiante comprenderá las responsabilidades del cliente, el servidor, el frontend, el backend y la base de datos dentro de una aplicación web.

---

# Conclusiones

Las aplicaciones web modernas distribuyen el trabajo entre diferentes componentes.

Cada uno cumple una función específica.

Comprender esta distribución permitirá entender posteriormente cómo React consume información proveniente de un backend mediante una API.

---

# ¿Qué sigue?

En el siguiente laboratorio responderemos una nueva pregunta:

> **¿Cómo se comunican el cliente y el servidor?**

A partir de esta pregunta estudiaremos el protocolo **HTTP**, sus métodos y los principales códigos de respuesta utilizados por las aplicaciones web.