<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::post('register', 'Auth\RegisterController@register');
Route::post('login', 'Auth\LoginController@login')->middleware('verified');
Route::post('logout', 'Auth\LoginController@logout')->name('logout');
Route::get('api/email/verify', 'Auth\VerificationController@show')->name('verification.notice');
Route::get('api/email/verify/{id}', 'Auth\VerificationController@verify')->name('verification.verify');
Route::get('api/email/resend', 'Auth\VerificationController@resend')->name('verification.resend');
Auth::routes(['verify' => true]);
