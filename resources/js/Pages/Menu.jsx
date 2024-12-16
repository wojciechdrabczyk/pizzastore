import {Head} from "@inertiajs/react";
import NavBar from "@/Components/NavBar.jsx";
import MenuButton from "@/Components/MenuButton.jsx";

export default function Menu() {
    return (
        <>
            <div className={"bg-gray-100 min-h-screen"}>
                <Head title="Menu"/>
                <NavBar/>
                <section className={"flex items-center justify-center text-orange-600 py-20 px-6"}>
                    <div className="text-center">
                        <h1 className="text-xl font-thin mb-6 text-[#FF5733]">Our Menu</h1>
                        <p className="max-w-2xl text-gray-300 leading-relaxed">
                            <span className="text-gray-700 font-bold text-xl">Discover Our Menu</span>
                        </p>
                    </div>
                </section>
                <div className={"flex items-center justify-center gap-2 "}>
                    <MenuButton name={"Pizza"}></MenuButton>
                    <MenuButton name={"Pizza"}></MenuButton>
                    <MenuButton name={"Pizza"}></MenuButton>
                    <MenuButton name={"Pizza"}></MenuButton>
                    <MenuButton name={"Pizza"}></MenuButton>
                    <MenuButton name={"Pizza"}></MenuButton>
                </div>
            </div>
        </>
    )
}
