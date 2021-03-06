<?php

use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;

if (App::environment('testing')) {
Route::get('__testing__/create/{model}', function ($model) {
    return factory("App\\{$model}")->create(request()->all());
});
Route::get('__testing__/login', function () {
    $user =  factory("App\\User")->create(request()->all());
    auth()->login($user);
});
}

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::post('/books', 'BookController@store');
Route::patch('/books/{book}', 'BookController@update');
