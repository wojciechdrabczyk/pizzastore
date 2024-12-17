import { useState } from "react";
import { Head } from "@inertiajs/react";
import NavBar from "@/Components/NavBar.jsx";
import MenuTagButton from "@/Components/MenuTagButton.jsx";
import FoodList from "@/Components/FoodList.jsx";

export default function Menu({ foodItems = [], category = 'All' }) {
    const [selectedTag, setSelectedTag] = useState(category);

    // Handle category selection
    const handleTagClick = (tag) => {
        setSelectedTag(tag);
    };

    // Filter food items based on selected category
    const filteredFoodItems =
        selectedTag === "All"
            ? foodItems
            : foodItems.filter((food) => food.category === selectedTag);

    return (
        <>
            <div className={"bg-gray-100 min-h-screen"}>
                <Head title="Menu" />
                <NavBar />
                <section className={"flex items-center justify-center text-orange-600 py-20 px-6"}>
                    <div className="text-center">
                        <h1 className="text-xl font-thin mb-6 text-[#FF5733]">Our Menu</h1>
                        <p className="max-w-2xl text-gray-300 leading-relaxed">
                            <span className="text-gray-700 font-bold text-xl">Discover Our Menu</span>
                        </p>
                    </div>
                </section>

                {/* Menu Tag Buttons */}
                <div className={"flex items-center justify-center gap-2 mb-6"}>
                    <MenuTagButton
                        name="All"
                        onClick={handleTagClick}
                        isActive={selectedTag === "All"}
                    />
                    <MenuTagButton
                        name="Pizzas"
                        onClick={handleTagClick}
                        isActive={selectedTag === "Pizza"}
                    />
                    <MenuTagButton
                        name="Beverages"
                        onClick={handleTagClick}
                        isActive={selectedTag === "Beverage"}
                    />
                    <MenuTagButton
                        name="Sides"
                        onClick={handleTagClick}
                        isActive={selectedTag === "Side"}
                    />
                </div>

                {/* Display filtered food items */}
                <FoodList items={filteredFoodItems} />
            </div>
        </>
    );
}
