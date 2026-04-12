import { House, LockIcon, Tag } from "lucide-react"

export const publicLinks_map = [
    {
        url: "/",
        title: "Inicio",
        Icon: House,
        subLinks: []
    },
    {
        url: "/login",
        title: "Inicio de sesión",
        Icon: LockIcon,
        subLinks: []
    },
    {
        url: "",
        title: "Categorias",
        Icon: Tag,
        subLinks: [
            {
                url: "/all",
                title: "Todos los productos",
                value: "Todos los productos"
            },
            {
                url: "/coffee",
                title: "Cafe",
                value: "Cafe"
            },
            {
                url: "/tea",
                title: "Té",
                value: "Té"
            },
            {
                url: "/pastries",
                title: "Pasteleria",
                value: "Pasteleria"
            },
        ]
    }
]