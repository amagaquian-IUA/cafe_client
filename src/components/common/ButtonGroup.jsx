import { Button } from "../ui/button"

// data -> [{label: string, id: number}]
export default function ButtonGroup({ data, selectedItem = "all", onClick }) {

    const handleClick = (value) => {
        onClick(value)
    }
    return (
        <div className="flex flex-wrap my-5 justify-center items-center gap-2">

            {
                data && data.length > 0 ? data.map((e, i) => (
                    <Button
                        variant={selectedItem === e.name ? "default" : "outline"}
                        key={e.id}
                        onClick={() => { handleClick(e.name) }}
                    >
                        {e.label}
                    </Button>
                )) : <p>No hay datos</p>
            }


        </div>
    )
}