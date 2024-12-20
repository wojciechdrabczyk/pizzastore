import { useState } from "react";
import { Head } from "@inertiajs/react";
import NavBar from "@/Components/Shared/NavBar.jsx";
import Tag from "@/Components/Buttons/Tag.jsx";
import List from "@/Pages/Food/List.jsx";  // Assuming List.jsx displays the food items

export default function SiteMenu({ foodItems = [], category = "All" }) {
    const categories = ["All", "Pizza", "Beverage", "Side"];
    const [selectedTag, setSelectedTag] = useState(category);

    // Handle tag button clicks (filter by category)
    const handleTagClick = (tag) => {
        setSelectedTag(tag);
    };

    // Filter food items based on the selected tag
    const filteredFoodItems =
        selectedTag === "All"
            ? foodItems
            : foodItems.filter((food) => food.category === selectedTag);

    console.log("Selected Tag: ", selectedTag, "Filtered Items: ", filteredFoodItems);

    return (
        <>
            <div className={"bg-gray-100 min-h-screen"}>
                <Head title="Menu" />
                <NavBar />

                {/* Header Section */}
                <section className="container mx-auto flex items-center justify-center text-orange-600 py-20 px-4">
                    <div className="text-center">
                        <h1 className="text-xl font-thin mb-6 text-[#FF5733]">Our Menu</h1>
                        <p className="max-w-2xl text-gray-300 leading-relaxed">
                            <span className="text-gray-700 font-bold text-xl">Discover Our Menu</span>
                        </p>
                    </div>
                </section>

                {/* Tag Buttons for Categories */}
                <div className={"flex items-center justify-center gap-2 mb-6"}>
                    {categories.map((category) => (
                        <Tag
                            key={category}
                            name={category}
                            onClick={handleTagClick}
                            isActive={selectedTag === category}
                        />
                    ))}
                </div>

                {/* Display filtered food items */}
                <List items={filteredFoodItems} />
            </div>
        </>
    );
}

