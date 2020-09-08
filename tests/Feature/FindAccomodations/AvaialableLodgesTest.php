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
        $location_id = 2;
        $response = $this->getJson('/api/lodge/'.$location_id);

        $response->assertStatus(200);
        $response->assertJsonFragment([
            'current_page' => 1
        ]);
    }
}
