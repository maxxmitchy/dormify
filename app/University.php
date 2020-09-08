<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class University extends Model
{
    protected $guarded = [];

    public function properties()
    {
        return $this->hasMany(\App\Property::class);
    }
    
}
