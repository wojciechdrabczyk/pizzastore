const MenuButton = ({ name }) => {
    return (
        <div className="flex items-center justify-center h-10 px-5 text-gray-800 transition-colors duration-150 border border-orange-400 rounded-full focus:shadow-outline hover:bg-orange-400 hover:text-orange-100">
            <h1>{name}</h1>
        </div>
    );
};

export default MenuButton;
