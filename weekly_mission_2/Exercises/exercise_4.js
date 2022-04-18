// Ejercicio 4: Métodos en los objetos
class Repository {
  constructor(name, author, language, stars){
   this.name = name
   this.author = author
   this.language = language
   this.stars = stars
  }

  getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase
    return `Repository ${this.name} has ${this.stars} stars, amaizing!`
  }
}
console.log("Ejercicio 4: Métodos en los objetos")
const myRepository = new Repository("LaunchX", "juanmorales", "Java Script", 117)
console.log(myRepository.getInfo())
