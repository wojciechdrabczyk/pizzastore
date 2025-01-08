<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    protected $table = 'foods';
    protected $fillable = ['name', 'category', 'size', 'ingredients', 'description', 'price'];

    protected $casts = [
        'size' => 'array',
        'price' => 'array',
        'ingredients' => 'array',
        'description' => 'array'
    ];

    public function scopeCategory($query, $category)
    {
        return $query->where('category', $category);
    }
}
