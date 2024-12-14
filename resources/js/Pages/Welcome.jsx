import {Head, Link} from '@inertiajs/react';
import NavBar from "@/Components/NavBar.jsx";

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
            <NavBar/>
        </>
    );
}
