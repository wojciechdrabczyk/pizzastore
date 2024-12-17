import React from 'react';
import { Inertia } from '@inertiajs/inertia';
import FoodList from './FoodList';

export default function FoodIndex({ foodItems, category }) {
    const handleCategoryChange = (newCategory) => {
        Inertia.get('/food', { category: newCategory });
    };

    return (
        <div>
            <h1>Food Menu</h1>
            <div className="flex space-x-4 mb-5">
                {['All', 'Pizza', 'Beverage', 'Side'].map((tag) => (
                    <button
                        key={tag}
                        onClick={() => handleCategoryChange(tag)}
                        className={`px-4 py-2 rounded-full ${category === tag ? 'bg-orange-400 text-white' : 'border border-orange-400'}`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <FoodList items={foodItems} />
        </div>
    );
}
