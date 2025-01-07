const Card = ({ food }) => {
    return (
        <div className="border border-gray-200 rounded-md p-4 flex items-center space-x-4">
            <img
                src={food.image || "https://via.placeholder.com/64"}
                alt={food.name}
                className="w-16 h-16 object-cover rounded-full"
            />
            <div>
                <h4 className="font-semibold text-gray-600">{food.name}</h4>
                <p className="text-sm text-gray-500">Category: {food.category}</p>

                {/* Display sizes if available */}
                {food.size && Array.isArray(food.size) && food.size.length > 0 ? (
                    <p className="text-sm text-gray-500">
                        Size: {food.size.join(', ')}
                    </p>
                ) : (
                    food.size && <p className="text-sm text-gray-500">Size: {food.size}</p>
                )}

                {/* Display ingredients if available */}
                {food.ingredients && Array.isArray(food.ingredients) && food.ingredients.length > 0 && (
                    <p className="text-sm text-gray-500">
                        Ingredients: {food.ingredients.join(", ")}
                    </p>
                )}

                {/* Display prices if available */}
                {food.price && Array.isArray(food.price) && food.price.length > 0 ? (
                    <div>
                        <p className="text-sm text-gray-500">Prices:</p>
                        <ul className="list-disc pl-5">
                            {food.price.map((price, index) => (
                                <li key={index} className="text-sm text-gray-500">
                                    ${price}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    food.price && (
                        <p className="text-sm text-gray-500">Price: ${food.price}</p>
                    )
                )}
            </div>
        </div>
    );
};

export default Card;
