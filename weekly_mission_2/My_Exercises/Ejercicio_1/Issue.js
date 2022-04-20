const issue= {
    title: "Not opening a file",
    repositoryNameAssociated: "Launch X Node JS Practice",
    status: "Open",
    numberOfComments: "10",
    labels: "",
    author:"Juan Morales",
    dateCreated: "19/04/2022",
    lastUpdated: "19/04/2022",

    getTitleAndAuthor: function(){
        return `The Issue '${this.title}' was create by ${this.author}.` 
    },
    getGeneralInfo: function(){
        return issue
    }
}

console.log("Ejercicio 1.2. Manejando la clase issue")
console.log("Issue name: "+"'"+ issue.title+"'")
console.log(issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())
