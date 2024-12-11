import {Head, Link, useForm, usePage} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";

export default function Contact() {
    const {auth} = usePage().props;
    const {data, setData, post, processing, errors} = useForm({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const navLinkClasses = "rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white";
    const OnSubmit = (e) => {
        e.preventDefault();
        post(route('contact.submit'));
    };
    return (
        <div className="bg-black">
            <Head title={"Contact"}/>
            <nav className="flex flex-1 justify-end bg-black space-x-4 p-3">
                <Link href={route('home')}
                      className={navLinkClasses}
                >
                    Home
                </Link>
                <Link href={route('menu')}
                      className={navLinkClasses}
                >
                    Menu
                </Link>
                <Link href={route('contact')}
                      className={navLinkClasses}>
                    >
                    Contact Us
                </Link>
                <Link href={route('about')}
                      className={navLinkClasses}>
                    >
                    About Us
                </Link>
                {auth.user ? (
                    <Link
                        href={route('dashboard')}
                        className={navLinkClasses}
                    >
                        Dashboard
                    </Link>
                ) : (
                    <>
                        <Link
                            href={route('login')}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Log in
                        </Link>
                        <Link
                            href={route('register')}
                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                        >
                            Register
                        </Link>
                    </>
                )}
            </nav>
            <div className="flex items-center justify-center flex-col h-screen gap-10">
                <div className="flex justify-center items-center text-center text-white">
                    <h1 className="font-bold text-xl leading-tight">
                        Get in touch with us!
                    </h1>
                </div>

                <div className="flex flex-row items-start justify-center space-x-4">
                    <div className="text-white w-44 text-center">
                        <div>
                            <p>
                                <span>
                                    Address:<br/>
                                    198 West 21th Street, Suite 721 New York NY 10010
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="text-white">
                        <div>
                            <p>
                                <span>
                                    Phone:<br/>
                                    <a href="tel:1234567890"> +1234567890</a>
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="text-white">
                        <div>
                            <p>
                                <span>
                                    Email:<br/>
                                    <a href="mailto:example@example.com"> example@example.com</a>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className={"w-64"}>
                    <form onSubmit={OnSubmit}>
                        <div>
                            <InputLabel htmlFor="name" value="Name"/>

                            <TextInput
                                id="name"
                                name="name"
                                className="mt-1 block w-full"
                                autoComplete="name"
                                onChange={(e) => setData('name', e.target.value)}
                                placeholder={"Type your name here..."}
                                required
                            />

                            <InputError message={errors.name} className="mt-2"/>
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="email" value="Email"/>

                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                className="mt-1 block w-full"
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder={"Type your email here..."}
                                required
                            />

                            <InputError message={errors.email} className="mt-2"/>
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="subject" value="Subject"/>

                            <TextInput
                                id="subject"
                                name="subject"
                                className="mt-1 block w-full"
                                onChange={(e) => setData('subject', e.target.value)}
                                placeholder={"Type your subject here..."}
                                require
                            />

                            <InputError message={errors.subject} className="mt-2"/>
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="message" value="Message"/>

                            <textarea
                                id="message"
                                name="message"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                onChange={(e) => setData('message', e.target.value)}
                                placeholder={"Type your message here..."}
                                required
                            ></textarea>

                            <InputError message={errors.message} className="mt-2"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
