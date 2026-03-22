import TitleDesc from "../common/TitleDesc"

export default function Hero({ children }) {

    return (
        <div className="bg-neutral-200/60 flex flex-col gap-5 justify-center items-center py-15 px-5">
            {children}
        </div>
    )
} 