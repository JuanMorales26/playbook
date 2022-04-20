const explorers = [
    {
      name: "Explorer 1",
      exercises_completed: 10,
      rate: 99,
      city: "CDMX",
      stack: [
        "js",
        "c#"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: true,
          exercisesFinished: true
        }
      }
    },
    {
      name: "Explorer 2",
      exercises_completed: 9,
      city: "Veracruz",
      rate: 50,
      stack: [
        "js"
      ],
      missions: {
        onboarding: {
          isFinished: false,
          exercisesFinished: false
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    },
    {
      name: "Explorer 3",
      exercises_completed: 3,
      city: "Sonora",
      rate: 100,
      stack: [
        "elixir"
      ],
      missions: {
        onboarding: {
          isFinished: true,
          exercisesFinished: true
        },
        frontend: {
          isFinished: false,
          exercisesFinished: false
        }
      }
    }
   ]

   console.log("Desarrollando el ejercicio 2, by Juan Morales")

   console.log("1.- Imprimir los nombres de los explorer con un for each:")
   explorers.forEach(explorer => console.log(explorer.name))
   console.log("")

   console.log("2.- Imprimir los nombres de los explorer y sus stacks con un for each:")
   explorers.forEach(explorer => console.log(explorer.name+" tiene los stacks: "+explorer.stack))
   console.log("")

   console.log("3.- Crear nueva lista con la lista de stacks de cada explorer usando MAP:")
   const explorers_stacks = explorers.map( function (explorer) { 
            return explorer.stack
        }
    )
   console.log(explorers_stacks)
   console.log("")

   console.log("4.- Obtén la lista de explorers que tengan en su stack 'js', usa FILTER: ")
   const explorers_stack_js = explorers.filter((explorer) =>
                    explorer.stack.includes('js')
    )
   console.log(explorers_stack_js)
   console.log("")

   console.log("5.- Busca el primer explorer que sea de la CDMX, usa FIND:")
   const explorers_city_CDMX = explorers.find((explorer) => explorer.city == "CDMX")
   console.log(explorers_city_CDMX)
   console.log("")

   console.log("6.-Obtén la suma de todos los exercises_completed, usa REDUCE ")
   const result_exercisescompleted = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0)
   console.log(result_exercisescompleted)
   console.log("")

   console.log('7.-Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME')
   const areSomeTrue = explorers.some((explorer) =>  explorer.missions.frontend.exercisesFinished === true)
   console.log(areSomeTrue)
   console.log("")

   console.log('8.-Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY')
   const OnBordingtrue = explorers.every((explorer) => explorer.missions.onboarding.isFinished === true)
   console.log(OnBordingtrue)
   console.log("")