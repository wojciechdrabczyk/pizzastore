import React, {useState} from 'react';

const Card = ({food}) => {

    const [selectedSizeIndex, setSelectedSizeIndex] = React.useState(null);
    const [count, setCount] = React.useState(0);
    const incrementCount = () => {
        setCount(prevCount => prevCount + 1);
    }
    const handleSizeChange = (event) => {
        setSelectedSizeIndex(event.target.value);
    };

    return (
        <div className="relative border border-gray-200 rounded-md p-4 bg-white">
            <div className={"flex items-center space-x-4"}>

                <img
                    src={food.image || "https://dummyimage.com/64x64/000/fff"}
                    alt={food.name}
                    className="w-16 h-16 object-cover rounded-full self-start md:self-center"
                />
                <div>
                    <h4 className="font-semibold text-gray-600">{food.name}</h4>
                    <p className="text-sm text-gray-500">Category: {food.category}</p>

                    {Array.isArray(food.size) && food.size.length > 0 && (
                        <div className="text-sm text-gray-500 mt-4">
                            <label htmlFor="size-select" className="block mb-2 font-bold text-ex">
                                Choose a size:
                            </label>
                            <select
                                id="size-select"
                                className="block p-2 pr-8 border border-gray-300 rounded-full"
                                onChange={handleSizeChange}
                            >
                                <option value="" disabled selected>
                                    Select a size
                                </option>
                                {food.size.map((size, index) => (
                                    <option key={index} value={index}>
                                        {size}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                    {Array.isArray(food.ingredients) && food.ingredients.length > 0 && (
                        <p className="text-sm text-gray-500">
                            Ingredients: {food.ingredients.join(', ')}
                        </p>
                    )}

                    {food.description && Array.isArray(food.description) && food.description.length > 0 ? (
                        <p className={"text-sm text-gray-500"}>
                            Info: {food.description.join(', ')}
                        </p>
                    ) : (
                        food.description && <p className={"text-sm text-gray-500"}>Info: {food.description}</p>
                    )}

                    {selectedSizeIndex !== null && selectedSizeIndex !== "" && Array.isArray(food.price) && selectedSizeIndex !== "" ? (
                        <>
                            <button
                                onClick={incrementCount}
                                className={"absolute bottom-4 right-4 border border-gray-600 rounded-xl px-2.5 py-1 hover:bg-green-400 transition"}
                            >
                                {count === 0 ? "+" : count}
                            </button>
                            <p className={"text-sm text-gray-500 mt-4"}>
                                Price: ${food.price[selectedSizeIndex]}
                            </p>
                        </>
                    ) : (
                        <p className={"text-sm text-gray-500 mt-4"}>
                            Price: Not available
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
};

export default Card;
