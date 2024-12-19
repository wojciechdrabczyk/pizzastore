import React from "react";

const Tag = ({name, onClick, isActive}) => {
    const handleClick = () => {
        onClick(name)
    }
    return (
        <button>
            <div
                className={`flex items-center justify-center h-10 px-5 text-gray-800 transition-colors duration-150 border rounded-full focus:shadow-outline
          ${isActive ? "bg-orange-400 text-white" : "border-orange-400 hover:bg-orange-400 hover:text-orange-100"}`}
                onClick={handleClick}
            >
                <h1>{name}</h1>
            </div>
        </button>
    );
};


export default Tag;
