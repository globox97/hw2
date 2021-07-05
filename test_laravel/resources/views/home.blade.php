<!DOCTYPE html>

<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Homepage</title>
        <link rel="stylesheet" href='{{ url("css/home.css") }}'>
        <script src="{{ url('js/home1.js') }}" defer></script>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100&display=swap" rel="stylesheet">
    </head>

    <body>
        <header>
            <div id='overlay'></div>
            <nav>
                <span class='flex-item'>Album</span>
                <span class='flex-item'>Artist</span>
                <span class='flex-item'>Playlist</span>
                <span class='flex-item'>Track</span>
                @if (isset($utente_loggato))
                <span class='flex-item' id='fav_redirect'>Preferiti</span>
                @endif
                <div id='menu'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
            <article id='intestazione'>
                <span>
                    @if (isset($utente_loggato))
                        Bentornato/a {{ $utente_loggato }} <br>Ecco le ultime uscite
                    @else 
                        Ultime uscite
                    @endif
                </span>
            </article>
        </header>
        <div>
            
                @if(isset($utente_loggato))
                    <div class='user'>Accesso effettuato: {{ $utente_loggato }} <br>
                    <a href='{{ url("logout") }}'>Esci</a>
                    </div>
                @else
                    <div class='login'>
                    Hai un account?<br>
                    <a href= "{{ url("login") }}">Accedi</a><br>
                    Oppure<br>
                    <a href= {{ url("signup") }}>Creane uno</a>
                    </div>
                @endif
            <form class='search'>
                <input type='text' id='ricerca'>
                <input type='submit' value='Cerca'>
            </form>
        </div>
        <section>
        @foreach($elements["albums"]["items"] as $album)
        <div class="contenuto">
            <img src="{{$album["images"][0]["url"]}}">
            <span class="nome">{{$album["name"]}}</span>
            <span>Di {{$album["artists"][0]["name"]}}</span>
            <span class="hidden" id="id-fav">{{$album["id"]}}</span>
            <span class="titolo">Clicca qui per vedere la lista dei brani</span>
            <span class="hidden" id="tipo">album</span>
            @if(isset($utente_loggato))
            <img class="add-fav" src="https://icon-library.com/images/add-to-favorites-icon/add-to-favorites-icon-16.jpg">
            @endif
        </div>
        @endforeach
        </section>
        <footer>
            <span>Designed by Angelo Barbasola O46001232 for Web Programming 2021</span>
        </footer>
    </body>
</html>