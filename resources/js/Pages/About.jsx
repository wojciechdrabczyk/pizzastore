import {Head, Link, useForm, usePage} from "@inertiajs/react";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Transition} from "@headlessui/react";

export default function Contact() {
    const {auth} = usePage().props;
    const {data, setData, post, processing, errors, recentlySuccessful} = useForm({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const getNavLinkClasses = (routeName) => `rounded-md px-3 py-2 ring-1 ring-transparent transition
        hover:text-[#FF5733] focus:text-[#FF5733] focus:outline-none focus-visible:ring-[#FF2D20]
        ${route().current(routeName) ? 'text-[#FF5733] font-bold' : 'text-white'}`;

    const onSubmit = (e) => {
        e.preventDefault();
        post(route('contact.submit'));
    };

    return (
        <div className="bg-black min-h-screen">
            <Head title="Contact"/>

            {/* Navigation Bar */}
            <nav className="flex justify-end bg-black space-x-4 p-4">
                {[
                    {name: 'Home', routeName: 'home'},
                    {name: 'Menu', routeName: 'menu'},
                    {name: 'Contact Us', routeName: 'contact'},
                    {name: 'About Us', routeName: 'about'},
                ].map((item) => (
                    <Link key={item.routeName} href={route(item.routeName)}
                          className={getNavLinkClasses(item.routeName)}>
                        {item.name}
                    </Link>
                ))}

                {auth.user ? (
                    <Link href={route('dashboard')} className={getNavLinkClasses('dashboard')}>
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link href={route('login')} className={getNavLinkClasses('login')}>
                            Log in
                        </Link>
                        <Link href={route('register')} className={getNavLinkClasses('register')}>
                            Register
                        </Link>
                    </>
                )}
            </nav>

            {/* About Section */}
            <section className="flex flex-col items-center justify-center text-white py-20 px-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-6 text-[#FF5733]">About Us</h1>
                    <p className="max-w-2xl text-gray-300 leading-relaxed">
                        At <span className="text-[#FF5733] font-semibold">[Your Pizzeria Name]</span>, we believe every
                        slice tells a story. Located in the heart of [Your City], our pizzeria isn’t just a spot to grab
                        a meal; it’s a community hub for friends, family, and anyone who loves authentic, handcrafted
                        pizza.
                    </p>
                </div>

                {/* Content Sections */}
                {[
                    {
                        title: 'Our Journey',
                        content:
                            'Our story began with a simple idea: to bring the flavors of traditional Italian pizza to [Your Community]. With recipes perfected over years, we craft each pizza with love, using the finest ingredients for a truly authentic experience.'
                    },
                    {
                        title: 'What Sets Us Apart',
                        content: (
                            <ul className="list-disc list-inside">
                                <li>Fresh Ingredients: Sourced from trusted suppliers for premium quality.</li>
                                <li>Authentic Recipes: Rooted in Italian traditions with a local twist.</li>
                                <li>Community-Centered: A welcoming space for all.</li>
                            </ul>
                        )
                    },
                    {
                        title: 'Beyond Pizza',
                        content:
                            'While our passion is pizza, we also offer fresh salads, hearty pastas, and indulgent desserts. Each dish is crafted with the same care and attention to detail as our pizzas.'
                    }
                ].map((section, index) => (
                    <div key={index} className="mt-10 max-w-3xl text-center">
                        <h2 className="text-xl font-semibold mb-4 text-[#FF5733]">{section.title}</h2>
                        <p className="leading-relaxed text-gray-300">{section.content}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}