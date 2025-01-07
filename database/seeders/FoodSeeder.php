<?php

namespace Database\Seeders;

use App\Models\Food;
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
            'size' => json_encode(['Small', 'Medium', 'Big']),
            'ingredients' => json_encode(['tomato', 'mozzarella', 'basil']),
            'price' => json_encode([6.99, 8.99, 10.99]),
        ]);

        Food::create([
            'name' => 'Pepperoni',
            'category' => 'Pizza',
            'size' => json_encode(['Small', 'Medium', 'Big']),
            'ingredients' => json_encode(['tomato', 'mozzarella', 'pepperoni']),
            'price' => json_encode([7.99, 9.99, 11.99]),
        ]);

        Food::create([
            'name' => 'Coca-Cola',
            'category' => 'Beverage',
            'size' => json_encode(['0.33l', '0.5l', '0.85l']),
            'ingredients' => json_encode([]),
            'price' => json_encode([1.99, 2.99, 3.99]),
        ]);

        Food::create([
            'name' => 'Sprite',
            'category' => 'Beverage',
            'size' => json_encode(['0.33l', '0.5l', '0.85l']),
            'ingredients' => json_encode([]),
            'price' => json_encode([1.99, 2.99, 3.99]),
        ]);

        Food::create([
            'name' => 'Lipton Ice Tea Peach',
            'category' => 'Beverage',
            'size' => json_encode(['0.33l', '0.5l', '0.85l']),
            'ingredients' => json_encode([]),
            'price' => json_encode([1.99, 2.99, 3.99]),
        ]);

        Food::create([
            'name' => 'Garlic Bread',
            'category' => 'Side',
            'size' => json_encode(['Small', 'Medium']),
            'ingredients' => json_encode(['bread', 'garlic', 'butter']),
            'price' => json_encode([3.99]),
        ]);

        Food::create([
            'name' => 'Ketchup',
            'category' => 'Side',
            'size' => json_encode(['Small', 'Medium']),
            'ingredients' => json_encode(['vinegar', 'salt', 'spices', 'seasonings']),
            'price' => json_encode([0.99]),
        ]);

        Food::create([
            'name' => 'French Fries',
            'category' => 'Side',
            'size' => json_encode(['Small', 'Medium', 'Big']),
            'ingredients' => json_encode(['potato', 'salt']),
            'price' => json_encode([2.49, 3.49, 4.49]),
        ]);
    }
}

