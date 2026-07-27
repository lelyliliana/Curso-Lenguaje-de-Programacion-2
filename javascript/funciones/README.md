# Laboratorio 07: Funciones

**Nivel:** Básico

**Duración estimada:** 25 minutos

**Requisitos previos:**

- Variables
- Operadores
- Condicionales
- Ciclos

**Concepto principal:**

Crear funciones reutilizables mediante parámetros y valores de retorno.

---

## Objetivo

Aprender a dividir un problema en pequeñas tareas reutilizables mediante funciones, utilizando parámetros de entrada y valores de retorno.

## Descripción

Una función es un bloque de código diseñado para realizar una tarea específica.

Las funciones permiten organizar mejor los programas, evitar la duplicación de código y facilitar el mantenimiento de una aplicación.

En este laboratorio se construye una función que calcula el área de un rectángulo utilizando la base y la altura ingresadas por el usuario.

## Conceptos trabajados

- Funciones
- Parámetros
- Valor de retorno (`return`)
- Variables locales
- Eventos
- DOM
- Formularios

## Sintaxis

```javascript
function nombreFuncion(parametro1, parametro2){

    // instrucciones

    return resultado;

}
```

## Ejemplo

```javascript
function calcularArea(base, altura){

    return base * altura;

}
```

Uso:

```javascript
let area = calcularArea(8, 5);

console.log(area);
```

Resultado:

```
40
```

## Funcionamiento del laboratorio

1. El usuario ingresa la base y la altura.
2. Presiona **Calcular área**.
3. JavaScript envía los datos a la función `calcularArea()`.
4. La función realiza el cálculo.
5. Retorna el resultado.
6. El programa muestra el área calculada en la página.

## Componentes de una función

| Elemento | Descripción |
|----------|-------------|
| Nombre | Identifica la función. |
| Parámetros | Datos que recibe la función. |
| Cuerpo | Instrucciones que ejecuta. |
| `return` | Devuelve un resultado. |

## Archivos

| Archivo | Descripción |
|---------|-------------|
| `index.html` | Interfaz del laboratorio. |
| `style.css` | Estilos visuales. |
| `script.js` | Implementación de funciones. |
| `README.md` | Documentación del laboratorio. |

## Cómo ejecutar el laboratorio

1. Abra la carpeta `javascript/funciones`.
2. Ejecute `index.html`.
3. Ingrese la base y la altura.
4. Presione **Calcular área**.
5. Observe el resultado.

## Reto

Implemente nuevas funciones para calcular:

- Área de un cuadrado.
- Área de un triángulo.
- Perímetro de un rectángulo.

## Resultado esperado

El laboratorio debe calcular correctamente el área del rectángulo utilizando una función reutilizable.

## Conclusiones

Las funciones permiten organizar mejor el código, reutilizar instrucciones y desarrollar aplicaciones más fáciles de mantener. Constituyen uno de los pilares fundamentales de la programación estructurada y del desarrollo moderno con JavaScript.