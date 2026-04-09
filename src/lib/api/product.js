export const getProducts = async () => {
    const res = await fetch('/data/products.json')
    const data = await res.json()

    return data
}


export const getProdByCat = async (cat) => {
    const allProds = await getProducts()
    const res = allProds.filter((e) => e.category === cat)
    // [] -> en el caso que no encuentre nada
    // [algo] -> puede ser strings, numeros, objetos u otros arrays


    return res
}