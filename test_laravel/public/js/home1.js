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

function onResponse(response) {
    return response.json();
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
        add_fav.src = "https://icon-library.com/images/add-to-favorites-icon/add-to-favorites-icon-16.jpg";
        add_fav.classList.add('add-fav');
        add_fav.addEventListener('click', addFavourite);
        contenitore.appendChild(add_fav);
    }
    //for(let brano of album.tracks)
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
        add_fav.src = "https://icon-library.com/images/add-to-favorites-icon/add-to-favorites-icon-16.jpg";
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
        const add_fav = document.createElement('img');
        add_fav.src = "https://icon-library.com/images/add-to-favorites-icon/add-to-favorites-icon-16.jpg";
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
        add_fav.src = "https://icon-library.com/images/add-to-favorites-icon/add-to-favorites-icon-16.jpg";
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
        add_fav.src = "https://icon-library.com/images/add-to-favorites-icon/add-to-favorites-icon-16.jpg";
        add_fav.classList.add('add-fav');
        add_fav.addEventListener('click', addFavourite);
        contenitore.appendChild(add_fav);
    }
    document.querySelector('section').appendChild(contenitore);
}

function addFavourite(event) {
    const id = event.currentTarget.parentNode.querySelector('#id-fav').innerHTML;
    const type = event.currentTarget.parentNode.querySelector('#tipo').innerHTML;
    fetch('add-fav/'+type+'/'+id).then(onResponse).then(onFavAdd);
}

function onFavAdd(json) {
    console.log(json);
    const elementi = document.querySelectorAll('.contenuto');
    for(let element of elementi) {
        var tipo = null;
        if(element.querySelector('#tipo') != null) tipo = element.querySelector('#tipo').textContent;
        var id = null;
        if(element.querySelector('#id-fav') != null) id = element.querySelector('#id-fav').textContent;
        if(tipo == json.type && id == json.id) {
            if(json.AlreadyExists) {
                element.innerHTML = "Elemento già tra i preferiti";
            } else {
                element.innerHTML = "Aggiunto ai preferiti";
            }
        }
    }
}

function search(event) {
    event.preventDefault();
    const ricerca = document.querySelector('#ricerca').value;
    fetch('search-for/'+search_type+'/'+ encodeURIComponent(ricerca)).then(onResponse).then(onSearch);
}

function onSearch(json) {
    const section = document.querySelector('section');
    section.innerHTML = '';

    if(json.lenght == 0) {
        section.innerHTML = "Nessun risultato trovato";
    }

    for(var result of json[search_type+'s'].items) {
        console.log(result);
        switch(result.type) {
            case 'album':
                create_album(result);
                break;
            case 'single':
                create_single(result);
                break;
            case 'artist':
                create_artist(result);
                break;
            case 'playlist':
                create_playlist(result);
                break;
            case 'track':
                create_track(result);
                break;
        }
    }
}

function tipo_ricerca(event) {
    search_type = event.currentTarget.innerHTML.toLowerCase();
    const flex_items = document.querySelectorAll('.flex-item');
    for(var item of flex_items){
        item.classList.remove('selected');
    }
    event.currentTarget.classList.add('selected');
}

function redirect(event) {
    window.location.href = "preferiti";
}

function addTracks() {
    const elementi = document.querySelectorAll('.contenuto');
    for(var elemento of elementi) {
        const id = elemento.querySelector('#id-fav').textContent;
        const tipo = elemento.querySelector('#tipo').textContent;
        fetch("get-element/"+tipo+"/"+id).then(onResponse).then(onTracks);
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

function inizialize() {
    const elementi = document.querySelectorAll('.contenuto span.titolo');
    for(var elemento of elementi) {
        elemento.addEventListener('click', espandi);
    }

    if(document.querySelectorAll('.add-fav') != null) {
        const fav = document.querySelectorAll('.add-fav');
        for(var f of fav) {
            f.addEventListener('click', addFavourite);
        }
    }
    if(document.querySelector('#fav_redirect') != null) {
        document.querySelector('#fav_redirect').addEventListener('click', redirect);
    }

    const opzioni = document.querySelectorAll('span.flex-item');
    for(var opzione of opzioni) {
        opzione.addEventListener('click', tipo_ricerca);
    }

    addTracks();
}

var backup = undefined;
let search_type = 'album';
document.querySelector('form').addEventListener('submit', search);
inizialize();