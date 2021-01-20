const URL = 'http://localhost:1337/auth/local';

function postRequest(email, pass){
    const options = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            identifier:email,
            password:pass
        }),
    };
    return fetch(URL, options)
        .then(response => {
            if(response.status !== 200){
                alert('Introduce bien tus credenciales')
            }else{
                response.json()
                    .then(data => {
                        alert('Te has logueado correctamente')
                    })
                    .catch(error => {
                        alert('Te has equivocado')
                    })
            }
        })
        .catch(error => {
            alert('Te has equivocado')
        });
}
