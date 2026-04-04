import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Link } from "react-router-dom"
import { Badge } from "../ui/badge"
import { Label } from "../ui/label"
import { currencyFormatter } from "@/lib/utils"
import { category_map } from '@/lib/maps/category'


export default function CardProducts({ prod }) {
    const { title, desc, price, category: cat, image: img, id } = prod
    const IconComponent = category_map[cat].Icon
    return (


        <Card className={`relative mx-auto w-full max-w-sm pt-0 `}>
            <div className="absolute inset-0 z-30 aspect-video " />
            <img
                src={img}
                alt="Event cover"
                className="relative z-20 aspect-video w-full object-cover  "
            />
            <CardHeader>
                <CardAction>
                    {/* <Badge className={category_map[cat].color}>{category_map[cat].label}</Badge> */}
                    <div className={`${category_map[cat].color} p-2 text-neutral-50 rounded-full`}><IconComponent size={15} /></div>

                </CardAction>

                <Link to={`/product/${id}`}>
                    <CardTitle className={"text-neutral-500 hover:text-neutral-950 "}>{title}</CardTitle>
                </Link>

                <CardDescription>
                    {desc}
                </CardDescription>
            </CardHeader>
            <CardFooter>


                <Label>{currencyFormatter(price)}</Label>

            </CardFooter>
        </Card>
    )

}