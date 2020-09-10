<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Property extends Model
{
    protected $guarded = [];

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function type()
    {
        return $this->belongsTo(PropertyType::class, 'property_type_id');
    }

    public function amenities()
    {
        return $this->belongsToMany(Amenity::class)->withTimestamps();
    }

    public function image()
    {
        return $this->morphOne(Image::class, 'imageable');
    }

    public function university()
    {
        return $this->belongsTo('App\University');
    }

}
