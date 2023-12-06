# :date: DÍA 3: El Grinch quiere fastidiar la Navidad

<table frame="box">
  <tr>
    <td>¡El Grinch anda suelto y quiere fastidiar la Navidad! 😱 Vamos a arreglar el lío que ha montado en la fábrica de regalos de Santa Claus.</td>
    <td align="center"><a href="https://adventjs.dev/challenges/03"><img src="../images/grinch.png" width="200"/></a></td>
  </tr>
</table>

## Descripción del Reto
El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱

Las cartas son una cadena de texto que incluyen regalos y paréntesis `()`.

Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.

**¡Pero ojo!** Porque el Grinch ha dejado llaves `{` y corchetes `[` dentro de los paréntesis que **hacen que no sean válidas**. Por suerte sólo los ha dejado en medio de los paréntesis...

Ejemplos:

```js
"bici coche (balón) bici coche peluche" // -> ✅
"(muñeca) consola bici" // ✅

"bici coche (balón bici coche" // -> ❌
"peluche (bici [coche) bici coche balón" // -> ❌
"(peluche {) bici" // -> ❌
"() bici" // ❌
```
      
Crea una función que pasándole el texto de la carta, devuelva `true` si es válida y `false` si no lo es. ¡Y acaba con la travesura del Grinch!
