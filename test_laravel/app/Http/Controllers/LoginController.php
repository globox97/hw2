<?php

use Illuminate\Routing\Controller;
use App\Models\User;

class LoginController extends Controller {
    public function login() {
        if(session('username') != null) {
            return redirect('home');
        } else {
            return view('login');
        }
    }

    public function checkLogin() {
        $user = User::where('username', request('username'))->first();
        if(Hash::check(request("password"), $user->password)) {
            Session::flush();
            Session::put("username", $user->username);
            Session::put("user_id", $user->id);
            return redirect("home");
        } else {
            return view("login")->with("old_username", $user->username);
        }
        
    }

    public function create_user() {
        $created = User::create([
            'username' => request('username'),
            'email' => request('email'),
            'password' => bcrypt(request('password'))
        ]);
        return redirect('login');
    }

    public function logout() {
        Session::flush();
        return redirect('login');
    }

    public function signup() {
        return view('signup');
    }
}
