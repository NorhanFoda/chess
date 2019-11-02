<?php

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

Route::get('/rand', 'RandomController@index');
// Route::get('/random', function () {
    // for($i = 1; $i <= 768; $i++){
    //     App\Random::create([
    //         'random_value' => rand(1, 2*64 - 1)
    //     ]);
    // }
//     return App\Random::all();
// });
