import {Link, usePage} from "@inertiajs/react";
import ShoppingCart from "@/Components/Icons/ShoppingCart.jsx";

export default function NavBar() {
    const {auth} = usePage().props;

    const getNavLinkClasses = (routeName) => `rounded-md px-3 py-2 ring-1 ring-transparent transition
        hover:text-[#FF5733] focus:text-[#FF5733] focus:outline-none focus-visible:ring-[#FF2D20]
        ${route().current(routeName) ? 'text-[#FF5733] font-bold' : 'text-white'}`;

    return (
        <nav className="flex items-center justify-between bg-gray-400 p-4 w-full">
            <div className="text-xl font-bold text-white">
                PizzaMia
            </div>

            <div className="flex-grow flex justify-center space-x-6">
                {[{name: 'Home', routeName: 'home'},
                    {name: 'Menu', routeName: 'menu'},
                    {name: 'Contact Us', routeName: 'contact'},
                    {name: 'About Us', routeName: 'about'},
                ].map((item) => (
                    <Link
                        key={item.routeName}
                        href={route(item.routeName)}
                        className={getNavLinkClasses(item.routeName)}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>

            <div className="flex items-center space-x-4 mr-10">
                {auth.user ? (
                    <Link href={route('dashboard')} className={getNavLinkClasses('dashboard')}>
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link href={route('login')} className={getNavLinkClasses('login')}>
                            Sign In
                        </Link>
                        <button className="relative flex items-center text-white hover:text-[#FF5733]">
                            <ShoppingCart className="h-6 w-6"/>
                            <span
                                className="absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-xs text-white">
                                3
                            </span>
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}
