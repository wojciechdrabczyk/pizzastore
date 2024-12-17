import React from "react";
import MenuTagButton from "@/Components/MenuTagButton.jsx";
import FoodList from "@/Components/FoodList.jsx";

const FoodMenu = () => {

    const [selectedTag, setSelectedTag] = React.useState('All');

    const foodItems = [
        {id: 1, name: 'Margherita', category: 'Pizza'},
        {id: 2, name: 'Pepperoni', category: 'Pizza'},
        {id: 3, name: 'Italian', category: 'Pizza'},
        {id: 4, name: 'Greek', category: 'Pizza'},
        {id: 5, name: 'Chicken', category: 'Pizza'},
        {id: 6, name: 'Hawaiian', category: 'Pizza'},
        {id: 7, name: 'Kebab', category: 'Pizza'},
        {id: 8, name: 'Texas', category: 'Pizza'},
        {id: 9, name: 'Capricciosa', category: 'Pizza'},
        {id: 10, name: 'Fiji Water', category: 'Beverage'},
        {id: 11, name: 'Coca-Cola', category: 'Beverage'},
        {id: 12, name: 'Coca-Cola Zero', category: 'Beverage'},
        {id: 13, name: 'Red Bull', category: 'Beverage'},
        {id: 14, name: 'Sprite', category: 'Beverage'},
        {id: 15, name: 'Fanta', category: 'Beverage'},
        {id: 16, name: 'Iced Tea', category: 'Beverage'},
        {id: 18, name: 'Garlic Bread', category: 'Side'},
        {id: 19, name: 'Mozzarella Sticks', category: 'Side'},
        {id: 20, name: 'Chicken Wings', category: 'Side'},
        {id: 21, name: 'French Fries', category: 'Side'},
    ]
    const tags = ["All", "Pizza", "Beverage", "Side"]
    const filteredFood = selectedTag === "All" ? foodItems : foodItems.filter((food) => food.category === selectedTag);

    return (
        <div className={"p-5"}>
            <div className={"flex space-x-4 mb-5"}>
                {tags.map(tag => (
                    <MenuTagButton
                        key={tag}
                        name={tag}
                        onClick={setSelectedTag}
                        isActive={selectedTag === tag}
                    />
                ))}
            </div>
            <FoodList items={filteredFood}/>
        </div>
    )
}
export default FoodMenu;
