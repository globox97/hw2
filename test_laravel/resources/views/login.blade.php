<html>
    <head>
        <link rel='stylesheet' href='css/login.css'>
        <meta name='viewport' content= 'width=device-width, initial-scale=1'>
        <title>Accedi al tuo account</title>
    </head>
    <body>
        <h1>Accedi</h1>
        <form method='post'>
            <div>
                <label for='username'>Nome utente</label>
                <input type='text' name='username' value='<?php if(isset($old_username)) echo $old_username?>'>
            </div>
            <div>
                <label for='password'>Password</label>
                <input type='password' name='password'>
            </div>
            <section>
                <input type='checkbox' name='remember'>
                <label for='remember'>Rimani connesso</label>
            </section>
            <?php
                echo "<input name='_token' type='hidden' value='".csrf_token()."'>";
            ?>

            <input type='submit'></input>
            @if(isset($old_username))
            <div id='error'>Username e/o password errati</div>
            @endif
        </form>
        <span>Non hai un account? <a href='{{ url("signup") }}'>Creane uno</a></span>
    </body>
</html>