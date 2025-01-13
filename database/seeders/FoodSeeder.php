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
            'size' => ['Small', 'Medium', 'Big'],
            'ingredients' => ['Tomato', 'Mozzarella', 'Basil'],
            'description' => ['Classic Italian pizza with fresh tomato, creamy mozzarella, and aromatic basil.'],
            'price' => [6.99, 8.99, 10.99],
        ]);

        Food::create([
            'name' => 'Pepperoni',
            'category' => 'Pizza',
            'size' => ['Small', 'Medium', 'Big'],
            'ingredients' => ['Tomato', 'Mozzarella', 'Pepperoni'],
            'description' => ['A popular pizza topped with delicious pepperoni slices, melted mozzarella, and tomato sauce.'],
            'price' => [7.99, 9.99, 11.99],
        ]);

        Food::create([
            'name' => 'Coca-Cola',
            'category' => 'Beverage',
            'size' => ['0.33l', '0.5l', '0.85l'],
            'ingredients' => [],
            'description' => ['Enjoy a cold, refreshing Coca-Cola®, the iconic carbonated soft drink.'],
            'price' => [1.99, 2.99, 3.99],
        ]);

        Food::create([
            'name' => 'Sprite',
            'category' => 'Beverage',
            'size' => ['0.33l', '0.5l', '0.85l'],
            'ingredients' => [],
            'description' => ['Cool off with the refreshing Sprite®, the classic and delicious lemon-lime drink.'],
            'price' => [1.99, 2.99, 3.99],
        ]);

        Food::create([
            'name' => 'Lipton Ice Tea Peach',
            'category' => 'Beverage',
            'size' => ['0.33l', '0.5l', '0.85l'],
            'ingredients' => [],
            'description' => ['A refreshing iced tea with the delicious flavor of ripe peaches.'],
            'price' => [1.99, 2.99, 3.99],
        ]);

        Food::create([
            'name' => 'Garlic Bread',
            'category' => 'Side',
            'size' => ['Small', 'Medium'],
            'ingredients' => ['Bread', 'Garlic', 'Butter'],
            'description' => ['Warm and crispy bread topped with garlic butter, perfect as a side dish.'],
            'price' => [1.99, 2.99],
        ]);

        Food::create([
            'name' => 'Ketchup',
            'category' => 'Side',
            'size' => ['Small', 'Medium'],
            'ingredients' => ['Vinegar', 'Salt', 'Spices', 'Seasonings'],
            'description' => ['A classic tomato-based condiment to complement your favorite dishes.'],
            'price' => [0.99, 1.99],
        ]);

        Food::create([
            'name' => 'French Fries',
            'category' => 'Side',
            'size' => ['Small', 'Medium', 'Big'],
            'ingredients' => ['Potato', 'Salt'],
            'description' => ['Crispy golden French fries, lightly salted for the perfect snack or side.'],
            'price' => [2.49, 3.49, 4.49],
        ]);
    }
}
