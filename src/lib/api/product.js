export const getProducts = async () => {
    const res = await fetch('/data/products.json')
    const data = await res.json()

    return data
}