let creature = "nightmare"

const url = `https://api.tibiadata.com/v4/creature/${creature}`


fetch(url, {
    method: "GET",
    headers: {
        "accept": "application/json"  
    }
})
.then(response => response.json())

.then(monster => { 
    console.log(monster);
})
.catch(error => {
   
    console.error("Erro ao consumir a API:", error);
})
