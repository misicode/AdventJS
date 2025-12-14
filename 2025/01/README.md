# :date: RETO #1: Filtrar los regalos defectuosos

<p align="center">
  <a href="https://adventjs.dev/es/challenges/2025/1">
    <img src="../../assets/2025/challenge01.webp" height="100" />
  </a>
 </p>


## Instrucciones

Santa ha recibido una lista de regalos, pero algunos están **defectuosos**. Un regalo es defectuoso si su nombre contiene el carácter `#`.

Ayuda a Santa escribiendo una función que reciba una lista de nombres de regalos y devuelva una nueva lista que **solo contenga los regalos sin defectos**.

### Ejemplos

```js
const gifts1 = ['car', 'doll#arm', 'ball', '#train']
const good1 = filterGifts(gifts1)
console.log(good1)
// ['car', 'ball']

const gifts2 = ['#broken', '#rusty']
const good2 = filterGifts(gifts2)
console.log(good2)
// []

const gifts3 = []
const good3 = filterGifts(gifts3)
console.log(good3)
// []
```
