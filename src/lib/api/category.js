export const getCategories = async () => {
    const res = await fetch('/data/categories.json')
    const data = await res.json()

    return data
}