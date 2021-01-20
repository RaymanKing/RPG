const URL = 'http://localhost:1337/auth/local/register';

async function postRequest(name, mail, pass, avat){
    const options = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body:JSON.stringify( {
            username:name,
            email:mail,
            password:pass,
            avatar:avat
        }),
    };
    return fetch(URL, options)
        .then(response => response.json())
        .then(data => data);
}