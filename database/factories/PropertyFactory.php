<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Property as Model;
use Faker\Generator as Faker;

$factory->define(Model::class, function (Faker $faker) {
    return [
        'name' => $faker->name,
        'address' => $faker->address,
        'description' => $faker->paragraph(8),
        'eta' => $faker->time(),
        'user_id' => factory('App\User'),
        'university_id' => factory('App\University'),
        'property_type_id' => factory('App\PropertyType')
    ];
});
