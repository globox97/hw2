<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Homepage</title>
        <link rel="stylesheet" href="css/preferiti.css">
        <script src="js/preferiti.js" defer></script>
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@100&display=swap" rel="stylesheet">
    </head>

    <body>
        <header>
            <div id='overlay'></div>
            <nav>
                <span class='flex-item' id='home_redirect'>Home</span>
                <span class='flex-item'>Artist</span>
                <span class='flex-item'>Album</span>
                <span class='flex-item'>Playlist</span>
                <div id='menu'>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </nav>
            <article id='intestazione'>
                <span>
                    {{$utente_loggato}}, ecco i tuoi preferiti
                </span>
            </article>
        </header>
        <div>
            <div class='user'>Accesso effettuato: {{ $utente_loggato }}<br>
                    <a href='logout'>Esci</a>
            </div>
            <form class='search'>
                <input type='text' id='ricerca'>
                <input type='submit' value='Cerca'>
            </form>
        </div>
        <section>
        </section>
        <footer>
            <span>Designed by Angelo Barbasola O46001232 for Web Programming 2021</span>
        </footer>
    </body>
</html>