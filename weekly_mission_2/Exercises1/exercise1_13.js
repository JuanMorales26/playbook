// Ejemplo 13: Uso de findIndex, este método regresa la posición del primer elemento que cumpla con la validación que indiques.
const names13 = ['Explorer 1', 'Explorer 2', 'Explorer 3', "zacate"]
const result = names13.findIndex((name) => name.length < 7)
console.log("Ejemplo 13: Primer elemento cuya palabra sea menor a 7 esta en la posición "+ result)