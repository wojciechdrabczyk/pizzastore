import React from "react";
import Tag from "@/Components/Buttons/Tag.jsx";
import List from "@/Pages/Food/List.jsx";
import { usePage } from "@inertiajs/react";

const Menu = () => {
    const { foodItems, category, tags } = usePage().props;
    const [selectedTag, setSelectedTag] = React.useState(category);

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
        Inertia.get(route('food.index'), { category: tag });
    };

    return (
        <div className={"p-5"}>
            <div className={"flex space-x-4 mb-5"}>
                {tags.map((tag) => (
                    <Tag
                        key={tag}
                        name={tag}
                        onClick={handleTagClick}
                        isActive={selectedTag === tag}
                    />
                ))}
            </div>
            <List items={foodItems} />
        </div>
    );
};

export default Menu;
