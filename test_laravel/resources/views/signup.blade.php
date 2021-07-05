<html>
    <head>
        <link rel="stylesheet" href="css/signup.css">
        <script src="js/signup.js" defer></script>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta charset="utf-8">
        <title>Registrati</title>
    </head>
    <body>
        <h1>Inserisci i tuoi dati</h1>
        <form method='post' autocomplete='off'>

            <div class='username'><label for='username'>Nome utente</label>
                <input type='text' name='username' value=''>
            </div>
            <span id='username_span'></span>

            <div class='email'><label for='email'>E-mail</label>
                <input type='text' name='email'>
            </div>
            <span id='email_span'></span>

            <div class='password'><label for='password'>Password</label>
                <input type='password' name='password'>
            </div>
            <span id='password_span'></span>

            <div class='confirm_pwd'><label for='confirm_pwd'>Conferma Password</label>
                <input type='password' name='confirm_pwd'>
            </div>
            <span id='confirm_span'></span>
            <?php
                echo "<input name='_token' type='hidden' value='".csrf_token()."'>";
            ?>
            <input type='submit' value="Registrati" id="submit" disabled>
        </form>
        <div class="signup">Hai già un account? <a href="login">Accedi</a></div>
    </body>
</html>