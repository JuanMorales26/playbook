export default class pokemon {
  constructor (name) {
    this.name = name
  }
  
  sayHello () {
    console.log(`Mi Pokemon [${this.name}] te saluda`)
  }
  
  sayMessage (message) {
    console.log(`Mi Pokemon [${this.name}] dice: ${message}`)
  }
