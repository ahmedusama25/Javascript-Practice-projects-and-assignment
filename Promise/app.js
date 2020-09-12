//Initializing a promise function

var promise = new Promise(function(resolve,Reject){
    var treat= "Due,But not given yet";
    if(treat==="Given"){
        resolve("OOh Yeah! Thanks alot")
    }
    else{
        Reject("WTH")
    }
})

promise.then(function(data){
    console.log(`Resolve==> ${data}`)
})
    .catch(function(error){
        console.log(`Error==> ${error}`)
    })
