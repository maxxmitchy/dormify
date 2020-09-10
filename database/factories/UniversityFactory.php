<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */
use App\University as Model;
use Faker\Generator as Faker;

$factory->define(Model::class, function (Faker $faker) {
    return [
        'name' => $faker->company,
        'city_id' => factory('App\City')
    ];
});