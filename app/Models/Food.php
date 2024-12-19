<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    protected $table = 'food_items';
    protected $fillable = ['name', 'category', 'ingredients', 'price'];

    protected $casts = [
        'ingredients' => 'array',
    ];

    public function scopeCategory($query, $category)
    {
        return $query->where('category', $category);
    }
}
