import {Head, Link, useForm, usePage} from "@inertiajs/react";
import NavBar from "@/Components/Shared/NavBar.jsx";

export default function Contact() {
    const {data, setData, post, processing, errors, recentlySuccessful} = useForm({
        name: '',
        email: '',
        subject: '',
        message: ''
    });


    const onSubmit = (e) => {
        e.preventDefault();
        post(route('contact.submit'));
    };

    return (
        <div className="bg-gray-100 min-h-screen">
            <Head title="Contact"/>

            <NavBar/>

            <section className="flex flex-col items-center justify-center  py-20 px-6">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-6 text-[#FF5733]">About Us</h1>
                    <p className="max-w-2xl text-gray-500 leading-relaxed">
                        At <span className="text-[#FF5733] font-semibold">PizzaMia</span>, we believe every
                        slice tells a story. Located in the heart of New York, our pizzeria isn’t just a spot to grab
                        a meal; it’s a community hub for friends, family, and anyone who loves authentic, handcrafted
                        pizza.
                    </p>
                </div>

                {
                    [
                        {
                            title: 'Our Journey',
                            text: 'Our story began with a simple idea: to bring the flavors of traditional Italian pizza to PizzaMia. With recipes perfected over years, we craft each pizza with love, using the finest ingredients for a truly authentic experience.'
                        },
                        {
                            title: 'What Sets Us Apart',
                            jsxContent: (
                                <ul className="list-disc list-inside">
                                    <li>Fresh Ingredients: Sourced from trusted suppliers for premium quality.</li>
                                    <li>Authentic Recipes: Rooted in Italian traditions with a local twist.</li>
                                    <li>Community-Centered: A welcoming space for all.</li>
                                </ul>
                            )
                        },
                        {
                            title: 'Beyond Pizza',
                            text: 'While our passion is pizza, we also offer fresh salads, hearty pastas, and indulgent desserts. Each dish is crafted with the same care and attention to detail as our pizzas.'
                        }
                    ].map((section, index) => (
                        <div key={index} className="mt-10 max-w-3xl text-center">
                            <h2 className="text-xl font-semibold mb-4 text-[#FF5733]">{section.title}</h2>
                            {section.text && <p className="leading-relaxed text-gray-500">{section.text}</p>}
                            {section.jsxContent &&
                                <div className="leading-relaxed text-gray-500">{section.jsxContent}</div>}
                        </div>
                    ))
                }
            </section>
        </div>
    );
}
