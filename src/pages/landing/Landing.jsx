import { useState, useEffect } from "react"

/*Componentes */
import TitleDesc from "@/components/common/TitleDesc"
import CardProducts from "@/components/products/CardProducts"
import ButtonGroup from "@/components/common/ButtonGroup"
/*Funciones */
import { getProducts, getProdByCat } from "@/lib/api/product"
import { getCategories } from "@/lib/api/category"

import { useParams, useNavigate, useSearchParams } from "react-router-dom"
import InputAddon from "@/components/common/inputs/InputAddon"
export default function Landing() {
    /* Navegación*/
    /* Hero*/
    /* Filtros*/
    /*Seccion de productos
        -Card de productos
    */

    /*ESTADOS */
    const [prods, setProds] = useState([])
    const [cats, setCats] = useState([])
    const [renderProds, setRenderProds] = useState([])


    /*REACT ROUTER DOM */
    const { cat } = useParams()
    const navigate = useNavigate()
    const [searchParams, setSearchParams] = useSearchParams()



    const fetchProds = async () => {
        const data = await getProducts()
        setProds(data)
        setRenderProds(data)
    }

    const fetchProdsByCat = async (cat) => {
        const data = await getProdByCat(cat)
        setProds(data)
        setRenderProds(data)
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

    const filterByName = () => {
        const filter = searchParams.get('name')

        if (!filter) {
            setRenderProds(prods)
            return
        }
        const res = prods.filter((e) => e.title.toLowerCase().includes(filter.toLowerCase()))
        setRenderProds(res)
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

    useEffect(() => {
        filterByName()
    }, [prods, searchParams])

    const handleChangeCat = (selectedCat) => {
        const filter = searchParams.get('name')

        //let url = filter ? `/${selectedCat}?name=${filter}` : `/${selectedCat}`
        let url = `/${selectedCat}`
        navigate(url)
    }

    const onChange = (value) => {
        setSearchParams({ name: value })
    }

    return (
        <>

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
                            renderProds && renderProds.length > 0 ? renderProds.map((e) => (

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