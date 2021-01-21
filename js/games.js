const URL = 'http://localhost:1337';

function getCommentaries(){
    getGames();
}

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
    for(let i = 0; i < result.length; i++){
        if(result[i].Nombre == juego){
            let div_foto = document.createElement('div');
            div_foto.className = 'foto-juego';
            let cont = document.createElement('div');
            cont.className = 'container-lg';
            div_foto.appendChild(cont);
            let img = document.createElement('img');
            img.src=result[i].portada.Url;
            img.className = 'foto_portada';
            cont.appendChild(img);
            document.body.appendChild(div_foto);

            // Creacion comentario
            let div_coment = document.createElement('div');
            div_coment.className = 'card';
            div_coment.setAttribute('id','caja');
            let div = document.createElement('div');
            div_coment.appendChild(div);
            let cb = document.createElement('div');
            cb.className = 'card-body';
            div_coment.appendChild(cb);
            let ct = document.createElement('h5');
            ct.className = 'card-title';
            cb.appendChild(ct);
            let div_md = document.createElement('div');
            div_md.className = 'md-form';
            cb.appendChild(div_md);
            let text_area = document.createElement('textarea');
            text_area.setAttribute('id','form10');
            text_area.className = 'md-textarea form-control';
            text_area.setAttribute('rows',3);
            text_area.setAttribute('placeholder','Introduce un comentario...');
            div_md.appendChild(text_area);
            let center = document.createElement('center');
            cb.appendChild(center);
            let button = document.createElement('button');
            button.className = 'btn btn-danger';
            button.setAttribute('type','button');
            button.setAttribute('id','boton-comentario');
            button.setAttribute('onclick','comentar()');
            button.innerText = 'Comentar';
            center.appendChild(button);
            document.body.appendChild(div_coment);

            // Caja de comentarios
            let comentarios = result[i].comentarios;
            for(let o = comentarios.length-1; o >= 0; o--){
                let carta = document.createElement('div');
                carta.className = 'cartas';
                let card = document.createElement('div');
                card.className = 'card';
                carta.appendChild(card);
                let header = document.createElement('div');
                header.className = 'card-header';
                card.appendChild(header);
                let lead = document.createElement('p');
                lead.className = 'lead';
                lead.innerText = comentarios[o].publisher;
                lead.setAttribute('id',comentarios[o].user);
                header.appendChild(lead);
                let card_body = document.createElement('div');
                card_body.className = 'card-body';
                card.appendChild(card_body);
                let h5 = document.createElement('h5');
                h5.className = 'card-title';
                card_body.appendChild(h5);
                let avatar = document.createElement('img');
                avatar.src=comentarios[o].avatar_user;
                avatar.className = 'icon';
                avatar.setAttribute('id', 'i'+comentarios[o].user);
                h5.appendChild(avatar);
                let ptext = document.createElement('p');
                ptext.className = 'card-text';
                ptext.innerText = comentarios[o].Descripcion;
                card_body.appendChild(ptext);
                let fecha = document.createElement('p');
                fecha.className = 'fecha';
                let date = new Date(comentarios[o].published_at);               
                let dia = date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear() + " - "+ date.getHours() + ":" + date.getMinutes();
                fecha.innerText = dia;
                card_body.appendChild(fecha);
                document.body.appendChild(carta);
            }
        }
    }
}

// COMENTAR

function comentar(){
    let texto = document.getElementById('form10').value;
    let id_juego = localStorage.getItem('id_juego');
    let publisher = localStorage.getItem('username');
    let avatar = localStorage.getItem('avatar');
    postCommentary(texto,id_juego,publisher,avatar);
}


const URLc = 'http://localhost:1337/Comentarios';

function postCommentary(desc, id, pub, ava){
    const options = {
        method: 'POST',
        headers: { 
            'Content-Type': 'application/json'
        },
        body:JSON.stringify( {
            "Descripcion":desc,
            "juego":{
                "id":id
            },
            "publisher":pub,
            "avatar_user":ava
        }),
    };
    return fetch(URLc, options)
        .then(response => location.reload())
        .then(data => data);
}