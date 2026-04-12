import { SearchIcon, MailIcon, CreditCardIcon, LockIcon } from "lucide-react"

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
    },
    password: {
        type: "password",
        Icon: LockIcon,
        placeHolder: "Ingresa tu contraseña"
    }
}