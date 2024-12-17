<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class FoodController extends Controller
{
    private array $foodItems = [
        ['id' => 1, 'name' => 'Margherita', 'category' => 'Pizza'],
        ['id' => 2, 'name' => 'Pepperoni', 'category' => 'Pizza'],
        ['id' => 3, 'name' => 'Italian', 'category' => 'Pizza'],
        ['id' => 4, 'name' => 'Greek', 'category' => 'Pizza'],
        ['id' => 5, 'name' => 'Chicken', 'category' => 'Pizza'],
        ['id' => 6, 'name' => 'Hawaiian', 'category' => 'Pizza'],
        ['id' => 7, 'name' => 'Kebab', 'category' => 'Pizza'],
        ['id' => 8, 'name' => 'Texas', 'category' => 'Pizza'],
        ['id' => 9, 'name' => 'Capricciosa', 'category' => 'Pizza'],
        ['id' => 10, 'name' => 'Fiji Water', 'category' => 'Beverage'],
        ['id' => 11, 'name' => 'Coca-Cola', 'category' => 'Beverage'],
        ['id' => 12, 'name' => 'Coca-Cola Zero', 'category' => 'Beverage'],
        ['id' => 13, 'name' => 'Red Bull', 'category' => 'Beverage'],
        ['id' => 14, 'name' => 'Sprite', 'category' => 'Beverage'],
        ['id' => 15, 'name' => 'Fanta', 'category' => 'Beverage'],
        ['id' => 16, 'name' => 'Iced Tea', 'category' => 'Beverage'],
        ['id' => 18, 'name' => 'Garlic Bread', 'category' => 'Side'],
        ['id' => 19, 'name' => 'Mozzarella Sticks', 'category' => 'Side'],
        ['id' => 20, 'name' => 'Chicken Wings', 'category' => 'Side'],
        ['id' => 21, 'name' => 'French Fries', 'category' => 'Side'],
    ];

    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $foodItems = Food::all();

        if ($request->has('category') && $request->category !== 'All') {
            $foodItems = $foodItems->where('category', $request->category);
        }

        return inertia('Food/Index', [
            'foodItems' => $foodItems,
            'category' => $request->category ?? 'All',
        ]);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
