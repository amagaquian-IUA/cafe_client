import { useState, useEffect } from "react"
import Hero from "@/components/landing/Hero"
import TitleDesc from "@/components/common/TitleDesc"
import CardProducts from "@/components/products/CardProducts"

import { getProducts } from "@/lib/api/product"
export default function Landing() {
    /* Navegación*/
    /* Hero*/
    /* Filtros*/
    /*Seccion de productos
        -Card de productos
    */

    const [prods, setProds] = useState([])

    const fetchData = async () => {
        const data = await getProducts()
        setProds(data)
    }
    useEffect(() => {

        fetchData()
    }, [])

    return (
        <>

            <section id="hero_section">
                <Hero>

                    <TitleDesc
                        title={"Bienvenido a Aroma Café"}
                        desc={"Descubre nuestra selección de cafés de especialidad, tés aromáticos y deliciosos bocados preparados con los mejores ingredientes."}
                        variant={"primary_title"}
                    />
                </Hero>

            </section>


            <section id="prod_section">
                <div className="p-5 flex flex-col gap-5">

                    <TitleDesc title={"Café"} variant={"secondary_title"} />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        {
                            prods.map((e) => (

                                <CardProducts title={e.title} desc={e.desc} price={e.price} cat={e.category} img={e.image} />
                            ))
                        }

                    </div>
                </div>
            </section>


        </>
    )
}