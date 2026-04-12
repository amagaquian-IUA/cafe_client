import { SearchIcon, MailIcon, CreditCardIcon } from "lucide-react"

export const inputAddon_map = {
    search: {
        type: "text",
        Icon: SearchIcon,
        placeHolder: "Buscar...",
    },
    email: {
        type: "email",
        Icon: MailIcon,
        placeHolder: "Ingresa tu email",
    },
    credit_card: {
        type: "number",
        Icon: CreditCardIcon,
        placeHolder: "Ingresa el número de tu tarjeta"
    }
}