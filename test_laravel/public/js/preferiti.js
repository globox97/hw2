function espandi(event) {
    event.currentTarget.parentNode.querySelector('ol').classList.remove('hidden');
    event.currentTarget.parentNode.querySelector('.titolo').textContent = 'Clicca qui per nascondere la lista dei brani';
    event.currentTarget.removeEventListener('click', espandi);
    event.currentTarget.addEventListener('click', riduci);
}

function riduci(event) {
    event.currentTarget.parentNode.querySelector('ol').classList.add('hidden');
    event.currentTarget.parentNode.querySelector('.titolo').textContent = 'Clicca qui per vedere i brani';
    event.currentTarget.removeEventListener('click', riduci);
    event.currentTarget.addEventListener('click', espandi);
}

function filtra(event) {
    const albums = document.querySelectorAll('.contenuto');
    for(let album of albums) {
        if(album.querySelector('span').textContent.toLowerCase().indexOf(event.currentTarget.value.toLowerCase()) === -1) {
            album.classList.add('hidden');
            const brani = album.querySelectorAll('li');
            for(let brano of brani){
                if(brano.textContent.toLowerCase().indexOf(event.currentTarget.value.toLowerCase()) !== -1) {
                    album.classList.remove('hidden');
                }
            }    
        }
        else album.classList.remove('hidden');
        if(event.currentTarget.value === '') {
            album.classList.remove('hidden');
        }

    }
    
}

function removeFavourite(event) {
    const id = event.currentTarget.parentNode.querySelector('#id-fav').innerHTML;
    const type = event.currentTarget.parentNode.querySelector('#tipo').innerHTML;
    fetch("delete-fav/"+type+"/"+id);
    location.reload();
}

function redirect(event) {
    window.location.href = "home";
}

function onResponse(response) {
    return response.json();
}

function onFavJson(json) {
    if(json.length === 0) {
        document.querySelector('section').textContent = "Nessun preferito";
    } else {
        console.log(json);
        document.querySelector('section').innerHTML = '';
        for(var elemento of json) {
            fetch("get-element/"+elemento.type_fav+"/"+elemento.id_fav).then(onResponse).then(createFav);
        }
    }
}

function create_album(album) {
    const copertina = document.createElement('img');
    copertina.src = album.images[0].url;
    const nome_album = document.createElement('span');
    nome_album.classList.add('nome');
    nome_album.textContent = album.name;
    const autore = document.createElement('span');
    autore.textContent = "Di " + album.artists[0].name;
    const id_fav = document.createElement('span');
    id_fav.classList.add('hidden');
    id_fav.id = "id-fav";
    id_fav.textContent = album.id;
    const lista_brani = document.createElement('span');
    lista_brani.classList.add('titolo');
    lista_brani.textContent = "Clicca qui per vedere la lista dei brani";
    lista_brani.addEventListener('click', espandi);
    const type = document.createElement('span');
    type.classList.add('hidden');
    type.textContent = "album";
    type.id = "tipo";
    const contenitore = document.createElement('div');
    contenitore.classList.add('contenuto');
    contenitore.appendChild(copertina);
    contenitore.appendChild(nome_album);
    contenitore.appendChild(autore);
    contenitore.appendChild(id_fav);
    contenitore.appendChild(lista_brani);
    contenitore.appendChild(type);
    if(document.querySelector('.user') != null) {
        const add_fav = document.createElement('img');
        add_fav.src = "https://cdn2.iconfinder.com/data/icons/picons-essentials/57/favorite_remove-512.png";
        add_fav.classList.add('add-fav');
        add_fav.addEventListener('click', removeFavourite);
        contenitore.appendChild(add_fav);
    }
    fetch("get-element/"+type.textContent+"/"+id_fav.textContent).then(onResponse).then(onTracks);
    document.querySelector('section').appendChild(contenitore);
}

function create_single(single) {
    const copertina = document.createElement('img');
    copertina.src = single.images[0].url;
    const nome_album = document.createElement('span');
    nome_album.classList.add('nome');
    nome_album.textContent = single.name;
    const autore = document.createElement('span');
    autore.textContent = "Di " + single.artists[0].name;
    const id_fav = document.createElement('span');
    id_fav.classList.add('hidden');
    id_fav.id = "id-fav";
    id_fav.textContent = single.id;
    const type = document.createElement('span');
    type.classList.add('hidden');
    type.textContent = "album";
    type.id = "tipo";
    const contenitore = document.createElement('div');
    contenitore.classList.add('contenuto');
    contenitore.appendChild(copertina);
    contenitore.appendChild(nome_album);
    contenitore.appendChild(autore);
    contenitore.appendChild(id_fav);
    contenitore.appendChild(type);
    if(document.querySelector('.user') != null) {
        const add_fav = document.createElement('img');
        add_fav.src = "https://cdn2.iconfinder.com/data/icons/picons-essentials/57/favorite_remove-512.png";
        add_fav.classList.add('add-fav');
        add_fav.addEventListener('click', addFavourite);
        contenitore.appendChild(add_fav);
    }
    document.querySelector('section').appendChild(contenitore);
}

function create_artist(artist) {
    const copertina = document.createElement('img');
    copertina.src = artist.images[0].url;
    const nome_artista = document.createElement('span');
    nome_artista.classList.add('nome');
    nome_artista.textContent = artist.name;
    const id_fav = document.createElement('span');
    id_fav.classList.add('hidden');
    id_fav.id = "id-fav";
    id_fav.textContent = artist.id;
    const type = document.createElement('span');
    type.classList.add('hidden');
    type.textContent = "artist";
    type.id = "tipo";
    const contenitore = document.createElement('div');
    contenitore.classList.add('contenuto');
    contenitore.appendChild(copertina);
    contenitore.appendChild(nome_artista);
    contenitore.appendChild(id_fav);
    contenitore.appendChild(type);
    if(document.querySelector('.user') != null) {
        const add_fav = document.createElementtt('img');
        add_fav.src = "https://cdn2.iconfinder.com/data/icons/picons-essentials/57/favorite_remove-512.png";
        add_fav.classList.add('add-fav');
        add_fav.addEventListener('click', addFavourite);
        contenitore.appendChild(add_fav);
    }
    document.querySelector('section').appendChild(contenitore);
}

function create_playlist(playlist) {
    console.log(playlist);
    const copertina = document.createElement('img');
    copertina.src = playlist.images[0].url;
    const nome_playlist = document.createElement('span');
    nome_playlist.classList.add('nome');
    nome_playlist.textContent = playlist.name;
    const autore = document.createElement('span');
    autore.textContent = "Di: " + playlist.owner.display_name;
    const id_fav = document.createElement('span');
    id_fav.classList.add('hidden');
    id_fav.id = "id-fav";
    id_fav.textContent = playlist.id;
    const type = document.createElement('span');
    type.classList.add('hidden');
    type.textContent = "playlist";
    type.id = "tipo";
    const contenitore = document.createElement('div');
    contenitore.classList.add('contenuto');
    contenitore.appendChild(copertina);
    contenitore.appendChild(nome_playlist);
    contenitore.appendChild(autore);
    contenitore.appendChild(id_fav);
    contenitore.appendChild(type);
    if(document.querySelector('.user') != null) {
        const add_fav = document.createElement('img');
        add_fav.src = "https://cdn2.iconfinder.com/data/icons/picons-essentials/57/favorite_remove-512.png";
        add_fav.classList.add('add-fav');
        add_fav.addEventListener('click', addFavourite);
        contenitore.appendChild(add_fav);
    }
    document.querySelector('section').appendChild(contenitore);
}

function create_track(track) {
    const copertina = document.createElement('img');
    copertina.src = track.album.images[0].url;
    const nome_traccia = document.createElement('span');
    nome_traccia.classList.add('nome');
    nome_traccia.textContent = track.name;
    const autore = document.createElement('span');
    autore.textContent = "Di " + track.artists[0].name;
    const fromAlbum = document.createElement('span');
    fromAlbum.textContent = "Dall'album: " + track.album.name;
    const id_fav = document.createElement('span');
    id_fav.classList.add('hidden');
    id_fav.id = "id-fav";
    id_fav.textContent = track.id;
    const type = document.createElement('span');
    type.classList.add('hidden');
    type.textContent = "track";
    type.id = "tipo";
    const contenitore = document.createElement('div');
    contenitore.classList.add('contenuto');
    contenitore.appendChild(copertina);
    contenitore.appendChild(nome_traccia);
    contenitore.appendChild(autore);
    contenitore.appendChild(fromAlbum);
    contenitore.appendChild(id_fav);
    contenitore.appendChild(type);
    if(document.querySelector('.user') != null) {
        const add_fav = document.createElement('img');
        add_fav.src = "https://cdn2.iconfinder.com/data/icons/picons-essentials/57/favorite_remove-512.png";
        add_fav.classList.add('add-fav');
        add_fav.addEventListener('click', addFavourite);
        contenitore.appendChild(add_fav);
    }
    document.querySelector('section').appendChild(contenitore);
}

function createFav(json) {
    console.log(json);
    switch(json.type) {
        case 'album':
            create_album(json);
            break;
        case 'single':
            create_single(json);
            break;
        case 'artist':
            create_artist(json);
            break;
        case 'playlist':
            create_playlist(json);
            break;
        case 'track':
            create_track(json);
            break;
    }
}

function onTracks(json) {
    console.log(json);
    const albums = document.querySelectorAll('.contenuto');
    for(var album of albums) {
        if(album.querySelector('#id-fav').textContent == json.id) {
            const lista = document.createElement('ol');
            lista.classList.add('hidden');
            for(var traccia of json.tracks.items) {
                const track = document.createElement('li');
                track.textContent = traccia.name;
                lista.appendChild(track);
            }
            album.appendChild(lista);
        }
    }
}

document.querySelector('#home_redirect').addEventListener('click', redirect);
fetch("get-fav").then(onResponse).then(onFavJson);
document.querySelector('input').addEventListener('keyup', filtra);