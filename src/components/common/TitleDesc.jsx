export default function TitleDesc({ title, desc, variant }) {

    const variants = {
        primary_title: {
            title: "font-extrabold text-6xl",
            desc: "text-xl font-light text-neutral-500"
        },
        secondary_title: {
            title: "font-extrabold text-3xl",
            desc: "text-xl font-light text-neutral-500"
        }
    }
    /*
        variants.primary_title -> {...}
        variants.primary_title.title -> ""


        ----

        variants[primary_title] -> {...}
        variants[primary_title].title -> ""

        ----

        variants[variant] -> {...}
        variants[variant].title -> ""

    */

    return (
        <>
            <h1 className={variants[variant].title}>{title}</h1>
            {
                desc ?? <p className={variants[variant].desc}>{desc}</p>
            }

        </>
    )
}