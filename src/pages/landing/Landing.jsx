import Hero from "@/components/landing/Hero"
import TitleDesc from "@/components/common/TitleDesc"
export default function Landing() {
    /* Navegación*/
    /* Hero*/
    /* Filtros*/
    /*Seccion de productos
        -Card de productos
    */

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
                <TitleDesc title={"Café"} variant={"secondary_title"} />
            </section>


        </>
    )
}