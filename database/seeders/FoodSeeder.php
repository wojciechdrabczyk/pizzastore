<?php

namespace Database\Seeders;

use App\Models\Food;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FoodSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Food::create([
            'name' => 'Margherita',
            'category' => 'Pizza',
            'ingredients' => ['tomato', 'mozzarella', 'basil'],
            'price' => 8.99,
        ]);
    }
}
