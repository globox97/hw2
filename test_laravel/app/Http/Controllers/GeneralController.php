<?php

use Illuminate\Routing\Controller;
use App\Models\User;
use App\Models\Favourite;
use Illuminate\Support\Facades\Http;
use Facade\FlareClient\Http\Response;


class GeneralController extends Controller {

    public function check_username($username) {
        $user = User::where('username', $username)->exists();
        return ['exists' => $user];
    }

    public function check_email($email) {
        $email = User::where('email', $email)->exists();
        return ['exists' => $email];
    }
    
    public function getlatest() {
        $token = Http::asForm()->withHeaders([
            'Authorization' => 'Basic '.base64_encode(env('SPOTIFY_CLIENTID').':'.env('SPOTIFY_CLIENTSECRET')),
        ])->post('https://accounts.spotify.com/api/token', [
            'grant_type' => 'client_credentials',
        ]);

        if($token->failed()) abort(500);

        $latest = Http::withHeaders([
            'Authorization' => 'Bearer '.$token['access_token']
        ])->get('https://api.spotify.com/v1/browse/new-releases?country=IT&limit=12&type=album');
        if($latest->failed()) abort(500);

        return $latest->body();
    }

    public function search($type, $query) {
        $token = Http::asForm()->withHeaders([
            'Authorization' => 'Basic '.base64_encode(env('SPOTIFY_CLIENTID').':'.env('SPOTIFY_CLIENTSECRET')),
        ])->post('https://accounts.spotify.com/api/token', [
            'grant_type' => 'client_credentials',
        ]);
        if ($token->failed()) abort(500);

        $results = Http::withHeaders([
            'Authorization' => 'Bearer '.$token['access_token']
        ])->get('https://api.spotify.com/v1/search', [
            'type' => $type,
            'q' => $query,
            'limit' => '12'
        ]);
        if($results->failed()) abort(500);

        return $results->body();
    }

    public function getElement($type, $id) {
        $token = Http::asForm()->withHeaders([
            'Authorization' => 'Basic '.base64_encode(env('SPOTIFY_CLIENTID').':'.env('SPOTIFY_CLIENTSECRET')),
        ])->post('https://accounts.spotify.com/api/token', [
            'grant_type' => 'client_credentials',
        ]);
        if ($token->failed()) abort(500);

        $results = Http::withHeaders([
            'Authorization' => 'Bearer '.$token['access_token']
        ])->get('https://api.spotify.com/v1/'.$type.'s/'.$id);
        if($results->failed()) abort(500);

        return $results->body();
    }

    public function add_fav($type, $id) {
        if(session('username') != null) {
            $exists = Favourite::where('user_id', session('user_id'))
                ->where('id_fav', $id)
                ->where('type_fav', $type)->exists();
            if(!$exists) {
                Favourite::create([
                    'id_fav' => $id,
                    'type_fav' => $type,
                    'user_id' => session('user_id')
                ]);
            } 
            return ['type' => $type, 'id' => $id, 'AlreadyExists' => $exists];
        }
    }

    public function get_favourites() {
        if(session("username") != null) {
            $utente = User::find(session("user_id"));
            $preferiti = $utente->favourites->toArray();
            return $preferiti;
        }
    }

    public function delete_fav($type, $id) {
        if(session('username') != null) {
            DB::select("DELETE from FAVOURITES WHERE user_id = ? AND type_fav = ? AND id_fav = ?", [session("user_id"), $type, $id]);
        };
    }
}
