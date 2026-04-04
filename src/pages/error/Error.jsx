import TitleDesc from "@/components/common/TitleDesc"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { errorType } from "@/lib/api/error"
export default function Error({ type }) {
    return (
        <div className="flex flex-col justify-center items-center mt-10 gap-5">
            <TitleDesc title={errorType[type].title} desc={errorType[type].desc} variant={errorType[type].variant} />
            {
                errorType[type].redirect && (
                    <Link to={errorType[type].redirect.linkTo}>
                        <Button>{errorType[type].redirect.text}</Button>
                    </Link>
                )
            }
        </div>
    )
}