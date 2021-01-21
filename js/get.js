const URL = 'http://localhost:1337';

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

async function getGames(){
    const result =  await getRequest(URL+'/Juegos');
    console.log('result',result);
    let container = document.createElement('div');
    container.className = 'container-fluid d-flex justify-content-center';
    let row = document.createElement('div');
    row.className = 'row col-lg-6 d-flex justify-content-center';

    for(let i = 0; i < result.length; i++){
        let card = document.createElement('div');
        card.className = 'card';
        card.style.width='22rem;';

        let img = document.createElement('img');
        img.className = 'card-img';
        img.src=result[i].portada.Url;
        card.appendChild(img);

        let card_body = document.createElement('div');
        card_body.className = 'card-body';
        card.appendChild(card_body);

        let h5 = document.createElement('h5');
        h5.className = 'card-title';
        h5.innerText = result[i].Nombre;
        card_body.appendChild(h5);
        let p = document.createElement('p');
        p.className = 'card-text';
        p.innerText = result[i].Descripcion;
        card_body.appendChild(p);
        let a = document.createElement('a');
        a.href='juegos.html';
        a.setAttribute('onclick','localGame("'+result[i].Nombre+'","'+result[i].id+'")');
        a.className = 'btn btn-primary';
        a.innerText = 'Ir a la comunidad';
        card_body.appendChild(a);
        row.appendChild(card);
    }
    container.appendChild(row);
    document.body.appendChild(container);
    
}
