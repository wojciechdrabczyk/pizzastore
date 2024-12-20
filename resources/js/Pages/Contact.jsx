import {Head, Link, useForm, usePage} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel.jsx";
import TextInput from "@/Components/TextInput.jsx";
import InputError from "@/Components/InputError.jsx";
import PrimaryButton from "@/Components/PrimaryButton.jsx";
import {Transition} from "@headlessui/react";
import NavBar from "@/Components/Shared/NavBar.jsx";

export default function Contact() {
    const {auth} = usePage().props;
    const {data, setData, post, processing, errors, recentlySuccessful} = useForm({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const getNavLinkClasses = (routeName) =>
        `rounded-md px-3 py-2 ring-1 ring-transparent transition hover:text-[#FF5733] focus:text-[#FF5733]
     focus:outline-none focus-visible:ring-[#FF2D20]
     ${route().current(routeName) ? 'text-[#FF5733] font-bold' : 'text-white'}`;



    const onSubmit = (e) => {
        e.preventDefault();
        post(route('contact.submit'));
    };
    return (
        <div className="bg-gray-100 min-h-screen">
            <Head title={"Contact"}/>
            <NavBar/>
            <div className="flex items-center justify-center flex-col mt-40 gap-10">
                <div className="flex justify-center items-center text-center text-[#FF5733]">
                    <h1 className="font-bold text-xl leading-tight">
                        Get in touch with us!
                    </h1>
                </div>

                <div className="flex flex-row items-start justify-center space-x-4">
                    <div className="text-gray-500 w-44 text-center">
                        <div>
                            <p>
                                <span>
                                    Address:<br/>
                                    198 West 21th Street, Suite 721 New York NY 10010
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="text-gray-500">
                        <div>
                            <p>
                                <span>
                                    Phone:<br/>
                                    <a href="tel:1234567890"> +1234567890</a>
                                </span>
                            </p>
                        </div>
                    </div>

                    <div className="text-gray-500">
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
                    <form onSubmit={onSubmit}>
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
                                required
                            />

                            <InputError message={errors.subject} className="mt-2"/>
                        </div>
                        <div className="mt-4">
                            <InputLabel htmlFor="message" value="Message"/>

                            <textarea
                                id="message"
                                name="message"
                                className="mt-1 block w-full resize rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                onChange={(e) => setData('message', e.target.value)}
                                placeholder={"Type your message here..."}
                                required
                            ></textarea>

                            <div className="mt-4 flex justify-start">
                                <PrimaryButton disabled={processing} className={"bg-[#FF5733] hover:bg-orange-500 focus:bg-orange-500"}>Send</PrimaryButton>

                                <Transition
                                    show={recentlySuccessful}
                                    enter="transition ease-in-out"
                                    enterFrom="opacity-0"
                                    leave="transition ease-in-out"
                                    leaveTo="opacity-0"
                                >
                                    <p className="text-sm text-orange-300">
                                        Saved
                                    </p>
                                </Transition>
                            </div>
                            <InputError message={errors.message} className="mt-2"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
