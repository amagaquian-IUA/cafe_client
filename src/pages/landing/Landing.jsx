import { useState, useEffect } from "react"

/*Componentes */
import Hero from "@/components/landing/Hero"
import TitleDesc from "@/components/common/TitleDesc"
import CardProducts from "@/components/products/CardProducts"
import ButtonGroup from "@/components/common/ButtonGroup"
/*Funciones */
import { getProducts, getProdByCat } from "@/lib/api/product"
import { getCategories } from "@/lib/api/category"

import { useParams, useNavigate } from "react-router-dom"
import InputAddon from "@/components/common/inputs/InputAddon"
export default function Landing() {
    /* Navegación*/
    /* Hero*/
    /* Filtros*/
    /*Seccion de productos
        -Card de productos
    */

    const [prods, setProds] = useState([])
    const [cats, setCats] = useState([])

    const { cat } = useParams()
    const navigate = useNavigate()

    const fetchProds = async () => {
        const data = await getProducts()
        setProds(data)
    }

    const fetchProdsByCat = async (cat) => {
        const data = await getProdByCat(cat)
        setProds(data)
    }

    const fetchCats = async () => {
        const data = await getCategories()
        const allCat = {
            "id": 0,
            "name": "all",
            "label": "Todos los productos"
        }
        data.unshift(allCat)
        setCats(data)
    }

    useEffect(() => {
        fetchCats()
    }, [])

    useEffect(() => {
        console.log(cat)
        if (!cat || cat === 'all') {
            fetchProds()
        } else {
            fetchProdsByCat(cat)
        }


    }, [cat])

    const handleChangeCat = (selectedCat) => {
        navigate(`/${selectedCat}`)
    }

    const onChange = (value) => {
        console.log(value)
    }

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

            <section id="cat_filter">
                <div className="flex flex-col md:flex-row justify-center items-center gap-5 ">
                    <ButtonGroup data={cats} selectedItem={cat} onClick={handleChangeCat} />
                    <div className="w-full md:w-1/5 px-5 md:p-0">
                        <InputAddon inputType={"search"} onChange={onChange} />
                    </div>
                </div>
            </section>
            <section id="prod_section">
                <div className="p-5 flex flex-col gap-5">


                    {cats && <TitleDesc title={cats.find((e) => e.name === (cat || 'all'))?.label || "Todas las categorias"} variant={"secondary_title"} />}

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                        {
                            prods && prods.length > 0 ? prods.map((e) => (

                                <CardProducts prod={e} />
                            )) : <p>No se encontraron productos :/</p>
                        }

                    </div>
                </div>
            </section>


        </>
    )
}


//<CardProducts title={e.title} desc={e.desc} price={e.price} cat={e.category} img={e.image} />