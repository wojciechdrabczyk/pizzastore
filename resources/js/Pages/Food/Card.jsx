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
                <p className="text-sm text-gray-500">
                    Ingredients: {food.ingredients?.join(", ") || "N/A"}
                </p>
                <p className="text-sm text-gray-500">Price: ${food.price}</p>
            </div>
        </div>
    );
};
export default Card;
