# Laboratorio 04: ¿En qué formato viajan los datos?

**Nivel:** Básico

**Duración estimada:** 50 minutos

**Requisitos previos:**

- Laboratorio 01: ¿Qué ocurre cuando escribes una dirección web?
- Laboratorio 02: Cliente y servidor.
- Laboratorio 03: ¿Cómo se comunican el cliente y el servidor?

**Concepto principal:**

Comprender cómo se representan los datos que intercambian las aplicaciones web mediante JSON y XML.

---

# Objetivo

Comprender cómo se estructuran y representan los datos que viajan entre aplicaciones utilizando JSON y XML.

---

# Introducción

En el laboratorio anterior descubrimos que el cliente y el servidor se comunican utilizando HTTP.

Ahora aparece una nueva pregunta.

> **¿Qué información viaja realmente entre ellos?**

La respuesta puede parecer sencilla:

> "Los datos."

Pero inmediatamente surge otra pregunta.

> **¿Cómo se representan esos datos?**

En este laboratorio conoceremos los formatos más utilizados para intercambiar información entre aplicaciones.

---

# La gran pregunta

> **¿En qué formato viajan los datos entre dos aplicaciones?**

---

# Información estructurada

Las aplicaciones no envían información desordenada.

Necesitan utilizar un formato que pueda ser comprendido tanto por el cliente como por el servidor.

Los dos formatos más conocidos son:

- JSON
- XML

Actualmente JSON es el formato predominante en el desarrollo web.

---

# ¿Qué es JSON?

JSON significa:

```text
JavaScript Object Notation
```

Es un formato ligero para representar información.

Se basa en pares:

```text
clave : valor
```

Ejemplo:

```json
{
    "nombre": "María",
    "edad": 22,
    "programa": "Ingeniería de Sistemas"
}
```

---

# Tipos de datos en JSON

JSON permite representar:

- Texto.
- Números.
- Booleanos.
- Objetos.
- Arreglos.
- Valores nulos.

Ejemplo:

```json
{
    "activo": true,
    "promedio": 4.8,
    "materias": [
        "HTML",
        "CSS",
        "JavaScript"
    ]
}
```

---

# Objetos

Un objeto representa una entidad.

Ejemplo:

```json
{
    "id": 15,
    "nombre": "Carlos"
}
```

Cada propiedad posee un nombre y un valor.

---

# Arreglos

Cuando existen varios elementos similares se utilizan arreglos.

Ejemplo:

```json
[
    "HTML",
    "CSS",
    "JavaScript",
    "React"
]
```

También pueden almacenarse objetos.

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

# ¿Qué es XML?

Antes de que JSON se popularizara, muchas aplicaciones utilizaban XML.

XML significa:

```text
eXtensible Markup Language
```

La información se representa mediante etiquetas.

Ejemplo:

```xml
<estudiante>

    <nombre>María</nombre>

    <edad>22</edad>

</estudiante>
```

---

# Comparación entre JSON y XML

| JSON | XML |
|------|-----|
| Más compacto. | Más extenso. |
| Fácil de leer. | Más verboso. |
| Muy utilizado en APIs REST. | Muy utilizado en sistemas antiguos y SOAP. |

Actualmente la mayoría de aplicaciones web modernas utilizan JSON.

---

# JSON en JavaScript

JavaScript dispone de funciones para trabajar con JSON.

---

## Convertir un objeto a JSON

```javascript
JSON.stringify(objeto)
```

Ejemplo:

```javascript
const estudiante = {
    nombre: "María",
    edad: 22
};

const texto = JSON.stringify(estudiante);
```

---

## Convertir JSON en un objeto

```javascript
JSON.parse(texto)
```

Ejemplo:

```javascript
const objeto = JSON.parse(texto);
```

---

# ¿Dónde aparece JSON?

JSON se utiliza constantemente.

Por ejemplo:

- APIs.
- Aplicaciones móviles.
- Sitios web.
- Sistemas bancarios.
- Comercio electrónico.
- Redes sociales.

Cada vez que una aplicación consulta información normalmente recibe un documento JSON.

---

# Ejemplo completo

```text
Cliente

↓

GET

↓

Servidor

↓

JSON

↓

JavaScript

↓

Pantalla
```

Este flujo será exactamente el que utilizaremos más adelante con React.

---

# Conceptos aprendidos

Durante este laboratorio el estudiante comprenderá:

- JSON.
- XML.
- Objetos.
- Arreglos.
- Clave.
- Valor.
- JSON.stringify().
- JSON.parse().

---

# Funcionamiento del laboratorio

Durante esta práctica el estudiante:

1. Analiza documentos JSON.
2. Analiza documentos XML.
3. Compara ambos formatos.
4. Identifica objetos y arreglos.
5. Comprende cómo JavaScript interpreta JSON.

---

# Actividad propuesta

Observe los siguientes ejemplos.

Indique:

- ¿Cuál corresponde a JSON?
- ¿Cuál corresponde a XML?
- ¿Cuál considera más fácil de leer?
- ¿Por qué cree que actualmente la mayoría de APIs utilizan JSON?

---

# Buenas prácticas

- Utilizar nombres descriptivos para las propiedades.
- Mantener estructuras consistentes.
- Evitar información repetida.
- Utilizar JSON cuando se desarrollen APIs modernas.

---

# Resultado esperado

Al finalizar el laboratorio el estudiante comprenderá cómo se representan los datos que intercambian las aplicaciones modernas.

---

# Conclusiones

JSON se ha convertido en el formato predominante para el intercambio de información entre aplicaciones web.

Comprender su estructura facilitará posteriormente el consumo de APIs mediante JavaScript y React.

---

# ¿Qué sigue?

Hasta este momento sabemos:

- Cómo aparece una página.
- Quién participa.
- Cómo se comunican.
- Cómo viajan los datos.

En el siguiente laboratorio responderemos una nueva pregunta:

> **¿Cómo logran comunicarse dos aplicaciones diferentes?**

A partir de ella conoceremos los conceptos de **Servicios Web**, **SOAP** y **REST**.