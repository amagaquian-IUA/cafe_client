import {
    Card,
    CardAction,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "../ui/label"
import { Badge } from "../ui/badge"

import { currencyFormatter } from "@/lib/utils"
import { category_map } from '@/lib/maps/category'


export default function CardProducts({ title, desc, price, cat, img }) {

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
                <CardTitle>{title}</CardTitle>
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