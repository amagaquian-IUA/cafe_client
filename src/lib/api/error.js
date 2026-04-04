export const errorType = {
    error_desconocido: {
        title: "Error desconocido",
        desc: "Se produjo un error desconocido en la app :(",
        variant: "primary_title"
    },
    error_404: {
        title: "Error 404",
        desc: "La ruta no existe :(",
        variant: "primary_title",
        redirect: {
            linkTo: "/",
            text: "Volver al inicio"
        }
    }
}