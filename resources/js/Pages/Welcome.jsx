import {Head, Link} from '@inertiajs/react';
import NavBar from "@/Components/Shared/NavBar.jsx";

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


    return (
        <>
            <div className={"bg-gray-100 min-h-screen"}>
                <Head title="Welcome"/>
                <div>
                    <NavBar/>
                </div>
                <div className={"text-gray-600 p-6"}>
                    Welcome to PizzaMia! Explore our menu and offers.
                </div>
            </div>
        </>
    );
}
