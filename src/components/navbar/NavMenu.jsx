import { Combobox, ComboboxInput, ComboboxContent, ComboboxList, ComboboxEmpty, ComboboxItem } from "@/components/ui/combobox"
import { Link } from "react-router-dom"
export default function NavMenu({ navLink }) {
    return (
        <Combobox>
            <ComboboxInput placeholder={navLink.title} />
            <ComboboxContent>
                <ComboboxList>
                    {
                        navLink.subLinks.map((e, i) => (
                            <Link to={e.url}>
                                <ComboboxItem value={e.value}>
                                    {e.title}
                                </ComboboxItem>
                            </Link>
                        ))
                    }
                </ComboboxList>
            </ComboboxContent>
        </Combobox>
    )
}