export default class Pokemon {
  constructor (name) {
    this.name = name
  }

  sayHello () {
    console.log(`Hola a todos, me llamo ${this.name}`)
  }
}
