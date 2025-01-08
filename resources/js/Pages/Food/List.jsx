import React from "react";
import Card from "./Card.jsx";

const List = ({ items }) => {
    // console.log(items);
    if (!items || items.length === 0) {
        return <p>No food items found</p>;
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((food) => (
                <Card key={food.id} food={food} />
            ))}
        </div>
    );
};

export default List;
