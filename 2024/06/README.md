# :date: RETO #6: ¿Regalo dentro de la caja?

<p align="center">
  <a href="https://adventjs.dev/es/challenges/2024/6">
    <img src="../../assets/2024/challenge06.webp" height="100" />
  </a>
 </p>


## Instrucciones

Ya hemos empaquetado cientos de regalos 🎁… pero **a un elfo se le ha olvidado revisar si el regalo**, representado por un asterisco `*`, está dentro de la caja.

La caja tiene un regalo (`*`) y cuenta como *dentro de la caja* si:

- Está rodeada por # en los bordes de la caja.
- El `*` no está en los bordes de la caja.

Ten en cuenta entonces que el `*` puede estar dentro, fuera o incluso no estar. Y debemos devolver `true` si el `*` está dentro de la caja y `false` en caso contrario.

**Ejemplos:**

```js
inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false
```
