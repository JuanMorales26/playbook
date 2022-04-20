const PullRequest={
    title: "New Module added",
    author: "Juan Morales",
    branchName: "Develop Deparmet Branch",
    dateCreated: "19/04/2022",
    status: "open",
    repositoryNameAssociated: "Launch X Node JS Practice",

    getStatus : function(){
        return this.status
    },
    getTitleAndAuthor: function(){
        return `The Pull request ${this.title} was create by ${this.author}`
    }
}

console.log("Ejercicio 1.3, probando clase Pull Request")
console.log("El Pull Request llamado"+ "'"+PullRequest.title+"'")
console.log("Status actual del Pull Request: "+PullRequest.getStatus())
console.log(PullRequest.getTitleAndAuthor())