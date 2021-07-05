<?php

use Illuminate\Support\Facades\Route;

Route::get('/', 'HomeController@home');
Route::get('login', 'LoginController@login');
Route::post('login', 'LoginController@checkLogin');
Route::get('logout', 'LoginController@logout');
Route::get('home', 'HomeController@home');
Route::get('get-fav', 'GeneralController@get_favourites');
Route::get('add-fav/{type}/{id}', 'GeneralController@add_fav');
Route::get('delete-fav/{type}/{id}', 'GeneralController@delete_fav');
Route::get('check-email/{email}', 'GeneralController@check_email');
Route::get('check-username/{username}', 'GeneralController@check_username');
Route::get('signup', 'LoginController@signup');
Route::post('signup', 'LoginController@create_user');
Route::get('preferiti', 'HomeController@preferiti');
Route::get('get-latest', 'GeneralController@getlatest')->name('getlatest/');
Route::get('search-for/{type}/{query}', 'GeneralController@search');
Route::get('get-element/{type}/{id}', 'GeneralController@getElement');

?>