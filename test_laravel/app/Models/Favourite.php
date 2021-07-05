<?php
    namespace App\Models;
    use Illuminate\Database\Eloquent\Model;
    use App\Models\User;

    class Favourite extends Model {
        
        protected $fillable = [
            'id_fav',
            'type_fav',
            'user_id'
        ];
        public function user() {
            return $this->belongsTo('User');
        }
    }

?>