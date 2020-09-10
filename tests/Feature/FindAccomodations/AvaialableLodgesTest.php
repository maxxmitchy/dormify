<?php

namespace Tests\Feature\FindAccomodations;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use PropertySeeder;
use Tests\TestCase;
use App\University;

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
        $this->withoutExceptionHandling();
        $this->seed(PropertySeeder::class);
        // 
        $university = University::firstOrFail();
        // 
        $response = $this->getJson('/api/accomodation/'.$university->id);

        $response->assertStatus(200);
        $response->assertJsonFragment([
            'current_page' => 1
        ]);
    }
}
