const URL = 'http://localhost:1337/Users';

async function getRequest(url){
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    return fetch(url, options)
        .then(response => response.json())
        .then(data => data);
}

async function getPlayers(name , pass){
    const result =  await getRequest('http://localhost:1337/Users');
    console.log('result',result);
    for(let i = 0; i < result.length; i++){
        console.log(result[i].username+' '+result[i].password)
        if(result[i].username == name && result[i].password == pass){
            alert('Has iniciado sesión en RPG!');
        }else{
            alert('pepe')
        }
    }
}