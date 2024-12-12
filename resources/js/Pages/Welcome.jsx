import {Head, Link} from '@inertiajs/react';

export default function Welcome({auth}) {
    const handleImageError = () => {
        document
            .getElementById('screenshot-container')
            ?.classList.add('!hidden');
        document.getElementById('docs-card')?.classList.add('!row-span-1');
        document
            .getElementById('docs-card-content')
            ?.classList.add('!flex-row');
        document.getElementById('background')?.classList.add('!hidden');
    };

    const getNavLinkClasses = (routeName) =>
        `rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-[#FF5733] focus:text-[#FF5733]
     focus:outline-none focus-visible:ring-[#FF2D20]
     ${route().current(routeName) ? 'text-[#FF5733] font-bold' : 'text-white'}`;

    return (
        <>
            <Head title="Welcome"/>
            <nav className="flex flex-1 justify-end bg-black space-x-4 p-1">
                <Link href={route('home')}
                      className={getNavLinkClasses('home')}>
                    Home
                </Link>
                <Link href={route('menu')}
                      className={getNavLinkClasses('menu')}>
                    Menu
                </Link>
                <Link href={route('contact')}
                      className={getNavLinkClasses('contact')}
                >
                    Contact Us
                </Link>
                <Link href={route('about')}
                      className={"rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"}
                >
                    About Us
                </Link>
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
                            Log in
                        </Link>
                        <Link
                            href={route('register')}
                            className={getNavLinkClasses('register')}
                        >
                            Register
                        </Link>
                    </>
                )}
            </nav>
        </>
    );
}
