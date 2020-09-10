<?php

namespace App\Http\Controllers\Home;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\University;

class AccomodationController extends Controller
{
    public function locationIndex(University $university)
    {
        return response($university->properties()->paginate(30));
    }
}
