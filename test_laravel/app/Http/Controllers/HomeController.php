<?php

    use Illuminate\Routing\Controller;
    use App\Models\User;
    use App\Models\Favourite;

    class HomeController extends Controller {
        
        public function home() {
            $elements = Http::get(url("get-latest"));
            
            if(session('username') != NULL) {
                return view('home')
                    ->with("utente_loggato", session('username'))
                    ->with("elements", $elements);
            }
            return view('home')
                ->with("elements", $elements);;
        }

        public function preferiti() {
            if(session("username") == null) {
                return redirect("home");
            }
            return view('preferiti')
            ->with("utente_loggato", session("username"));
        }
    }
?>