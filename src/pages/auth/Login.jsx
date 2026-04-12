import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import InputAddon from "@/components/common/inputs/InputAddon"
import { Button } from "@/components/ui/button"
export default function Login() {
    return (
        <Card className="w-full md:w-1/2 lg:w-1/3 mx-auto my-10">
            <CardHeader>

                <CardTitle>
                    Inicio de sesión
                </CardTitle>
                <CardDescription>
                    Ingresa tus datos para iniciar sesión
                </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
                <InputAddon inputType="email" />
                <InputAddon inputType="password" />
            </CardContent>
            <CardFooter>
                <Button className="w-full">Iniciar sesión</Button>
            </CardFooter>
        </Card>
    )
}