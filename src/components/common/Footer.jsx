import { Label } from "../ui/label"
import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <div className="flex flex-col md:flex-row gap-5 justify-between items-center ">
            <Label className={"order-2 md:order-1"}>© 2026 Aroma Café -  Todos los derechos reservados.</Label>

            <div className="text-center flex flex-col items-center justify-center order-1 md:order-2">
                <Label className={"font-bold text-2xl"}>Contacto</Label>
                <Label>aromaCafe@gmail.com</Label>
            </div>
        </div>
    )
}