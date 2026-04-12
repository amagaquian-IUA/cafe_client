import { Button } from "../ui/button"
import { Link } from "react-router-dom"

export default function NavLinkItem({ navLink }) {
    return (
        <Button
            asChild
            variant={"ghost"}
            className={" hover:bg-neutral-300/50"}>
            <Link to={navLink.url} className="flex justify-center items-start gap-2">
                {<navLink.Icon />}{navLink.title}
            </Link>
        </Button>
    )
}