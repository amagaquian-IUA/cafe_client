import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,
    InputGroupText,
} from "@/components/ui/input-group"

import { useState, useEffect } from "react"
import { inputAddon_map } from "@/lib/maps/inputs_addon"

export default function InputAddon({ inputType, onChange }) {

    const [selectedType, setSelectedType] = useState()

    const handleOnChange = (value) => {
        onChange(value)
    }
    useEffect(() => {

        if (inputType && inputAddon_map) {
            setSelectedType(inputAddon_map[inputType])
        }
    }, [])

    //const IconComponent = inputAddon_map[inputType].Icon
    return (
        <InputGroup>
            {
                selectedType && <>
                    <InputGroupInput
                        placeholder={selectedType.placeHolder}
                        type={selectedType.type}
                        onChange={(e) => handleOnChange(e.target.value)} />
                    <InputGroupAddon>
                        <selectedType.Icon />
                    </InputGroupAddon>
                </>
            }
        </InputGroup >
    )
}