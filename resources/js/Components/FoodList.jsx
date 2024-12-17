import React from "react";

const FoodList = ({ items }) => {
    if (!items || items.length === 0) {
        return <p>No food items found</p>;
    }

    return (
        <div>
            {items.map((food) => (
                <div
                    key={food.id}
                    className="p-3 mb-2 rounded-lg shadow-sm border border-gray-200"
                >
                    {food.name} - <strong>{food.category}</strong>
                </div>
            ))}
        </div>
    );
};

export default FoodList;
