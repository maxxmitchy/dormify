<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;

Route::get('/linkstorage', function () {
    Artisan::call('storage:link');
});

Route::get('{reactRoutes}', function () {
    return view('index');
})->where('reactRoutes', '^((?!api).)*$');
