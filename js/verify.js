const URL = 'http://localhost:1337/auth/local';

async function postRequest(name, pass){
    const options = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body:JSON.stringify( {
            username:name,
            password:pass
        }),
    };
    return fetch(URL, options)
        .then(response => response.json())
        .then(data => data);
}
