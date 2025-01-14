import {Link, usePage} from "@inertiajs/react";
import ShoppingCart from "@/Components/Icons/ShoppingCart.jsx";

export default function NavBar() {
    const {auth} = usePage().props;

    const getNavLinkClasses = (routeName) =>
        `rounded-md px-3 py-2 ring-1 ring-transparent transition
        hover:text-[#FF5733] focus:text-[#FF5733] focus:outline-none focus-visible:ring-[#FF2D20]
        ${route().current(routeName) ? 'text-[#FF5733] font-bold' : 'text-white'}`;

    return (
        <nav className="bg-gray-400 py-4">
            <div className="flex items-center justify-between px-44">
                <Link href={route('home')} method={"GET"}>
                    <div className="flex-shrink-0">
                        <div className="text-xl font-bold text-white">PizzaMia</div>
                    </div>
                </Link>

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

                <div className="flex-shrink-0 flex items-center space-x-4">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className={getNavLinkClasses('dashboard')}
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className={getNavLinkClasses('login')}
                            >
                                Sign In
                            </Link>
                            <ShoppingCart/>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
}
