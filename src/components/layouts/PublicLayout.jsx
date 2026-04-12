import { Outlet } from "react-router-dom"
import Hero from "../landing/Hero"
import TitleDesc from "@/components/common/TitleDesc"
import Footer from "../common/Footer"
import Navbar from "../navbar/Navbar"

import { publicLinks_map } from '@/lib/maps/navLink/publicLinks'
export default function PublicLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar navLinks={publicLinks_map} />
            <section id="hero_section">
                <Hero>
                    <TitleDesc
                        title={"Bienvenido a Aroma Café"}
                        desc={"Descubre nuestra selección de cafés de especialidad, tés aromáticos y deliciosos bocados preparados con los mejores ingredientes."}
                        variant={"primary_title"}
                    />
                </Hero>
            </section>


            <main className="grow">
                <Outlet />
            </main>

            <div className="p-15 bg-neutral-200">
                <Footer />
            </div>
        </div>
    )
}