// Ejercicio 3: Instanciar un objeto con atributos
class Soldier {
  // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
  constructor(name, age, weapons){
    this.name = name
    this.age = age
    this.weapons = weapons
	}
}

// Crear un objeto de la clase Soldier (esto se le llama instanciación)
const privateJhon = new Soldier("Jhon", 26, ["MachineGun", "Rocket Launcher","Grenade","Knife"])
console.log("Ejercicio 3: Instanciar un objeto con atributos")
console.log(privateJhon)
