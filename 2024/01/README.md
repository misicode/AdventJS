# :date: RETO #1: ¡Primer regalo repetido!

<p align="center">
  <a href="https://adventjs.dev/es/challenges/2024/1">
    <img src="../../assets/2024/challenge01.webp" width="100" height="100" />
  </a>
 </p>


## Instrucciones

**Santa Claus** 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. Además, **los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos**.

```js
const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2) // [5, 6]

const gifts3 = []
const preparedGifts3 = prepareGifts(gifts3)
console.log(preparedGifts3) // []
// No hay regalos, la lista queda vacía
```
