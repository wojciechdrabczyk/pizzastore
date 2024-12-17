import React from "react";

const MenuTagButton = ({name, onClick, isActive}) => {
    return (
        <button onClick={() => onClick(name)}>
            <div
                className={`flex items-center justify-center h-10 px-5 text-gray-800 transition-colors duration-150 border rounded-full focus:shadow-outline
          ${isActive ? "bg-orange-400 text-white" : "border-orange-400 hover:bg-orange-400 hover:text-orange-100"}`}
            >
                <h1>{name}</h1>
            </div>
        </button>
    );
};



export default MenuTagButton;
