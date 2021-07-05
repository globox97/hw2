<?php
    namespace App\Models;
    use Illuminate\Database\Eloquent\Model;
    use App\Models\Favourite;

    class User extends Model {
        protected $hidden = ['password'];
        protected $fillable = [
            'username',
            'email',
            'password'
        ];
        
        public function favourites() {
            return $this->hasMany("App\Models\Favourite");
        }
    }

?>