import { useParams } from "react-router-dom"

export default function Products() {
    const { id } = useParams()

    return (
        <>
            <h1 className="text-rose-500">Productos = {id}</h1>
        </>
    )
}