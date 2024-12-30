# :date: RETO #17: Busca las bombas del Grinch

<p align="center">
  <a href="https://adventjs.dev/es/challenges/2024/17">
    <img src="../../assets/2024/challenge17.webp" height="100" />
  </a>
 </p>


## Instrucciones

El Grinch ha estado haciendo de las suyas en el Polo Norte y ha sembrado **bombas de carbón explosivo** 💣 en la fábrica de juguetes de los duendes. Quiere que todos los juguetes queden inutilizados y por eso ha dejado una cuadrícula donde algunas celdas tienen carbón explosivo (`true`) y otras están vacías (`false`).

Los duendes necesitan tu ayuda para **mapear las zonas peligrosas**. Cada celda vacía debe mostrar un número que indique **cuántas bombas de carbón explosivo hay en las posiciones adyacentes**, incluidas las diagonales.

```js
detectBombs([
  [true, false, false],
  [false, true, false],
  [false, false, false]
])
// [
//   [1, 2, 1],
//   [2, 1, 1],
//   [1, 1, 1]
// ]

detectBombs([
  [true, false],
  [false, false]
])
// [
//   [0, 1],
//   [1, 1]
// ]

detectBombs([
  [true, true],
  [false, false],
  [true, true]
])

// [
//   [1, 1],
//   [4, 4],
//   [1, 1]
// ]
```

**Nota:** ¿Quieres una pista? Seguro que has jugado al juego de buscaminas antes… 😉
