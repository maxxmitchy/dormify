<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Auth;

Route::get('/linkstorage', function () {
    Artisan::call('storage:link');
});
// here we use a catch-all route to intercept all
// get requests on web route and return our blade file
Route::get('/{any}', function(){
    return view('index');
})->where('any','.*');

// since we have already intercepted the get requests
// only post requests available in the Auth::routes
// will be avaialable
Auth::routes();