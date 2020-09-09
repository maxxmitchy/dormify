<?php

namespace Tests\Feature\FindAccomodations;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class AvaialableLodgesTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     *
     * @return void
     */
    public function testSeeLodgesNearMe()
    {
        // creates a new city using city factory
        $city = factory(\App\City::class)->create();
        // 
        // creates 30 new university entries from factory
        $universities = $city->universities()->create(factory(\App\University::class, 30)->raw());
        $response = $this->getJson('/api/accomodation/'.$location);

        $response->assertStatus(200);
        $response->assertJsonFragment([
            'current_page' => 1
        ]);
    }
}
