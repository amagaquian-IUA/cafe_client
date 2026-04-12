import { useState } from "react"
import { Button } from "../ui/button"
import { Menu } from "lucide-react"
import { Label } from "../ui/label"
import { Link } from "react-router-dom"
import NavLinkItem from "./NavLinkItem"
import NavMenu from "./NavMenu"
export default function Navbar({ navLinks }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">


                <div className="flex items-center">
                    <Label className="text-xl font-bold uppercase tracking-wider text-neutral-800">
                        Aroma Café
                    </Label>
                </div>

                <nav className="hidden md:flex items-center gap-2">
                    {
                        navLinks && navLinks.map((e, i) => (

                            e.subLinks.length <= 0 ? <NavLinkItem navLink={e} />
                                : <div className="hidden sm:block w-32">
                                    <NavMenu navLink={e} />
                                </div>
                        ))
                    }
                </nav>

                <div className="flex items-center gap-3">
                    <Button
                        variant="outline"
                        size="icon"
                        className="md:hidden"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <Menu className="h-5 w-5" />
                        <Label className="sr-only">Toggle Menu</Label>
                    </Button>
                </div>

            </div>


            {isMobileMenuOpen && (
                <div className="md:hidden border-t bg-neutral-50">
                    <nav className="flex flex-col p-4 gap-2">

                        {
                            navLinks && navLinks.map((e, i) => (

                                e.subLinks.length <= 0 ? <NavLinkItem navLink={e} />
                                    : <div className="mt-2 pt-4 border-t flex flex-col gap-3 sm:hidden">
                                        <NavMenu navLink={e} />
                                    </div>
                            ))
                        }



                    </nav>
                </div>
            )}
        </header>
    )
}