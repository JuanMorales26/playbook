const repo = {
    name: "LaunchX Node JS",
    author: "Juan Morales",
    language: "JavaScript",
    numberOfCommits: 17,
    stars: 19,
    forks: 5,
    issues_open: 100,
    issues_close: 1,
    getTotalIssues: function(){
      return this.issues_open + this.issues_close
    },
    getGeneralInfo: function(){
      return `This repository ${this.name} was created by ${this.author}`
    }
   }
   
   console.log("Nombre del repo:" + repo.name)
   console.log("Issues totales: " + repo.getTotalIssues())
   console.log(repo.getGeneralInfo())
   