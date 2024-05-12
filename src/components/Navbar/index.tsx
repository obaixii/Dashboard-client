import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"
import ThemeToggle from "../Theme/ThemeToggle"
import Dropdown from "../Dropdown"
import { Webhook } from "lucide-react"

export default function Navbar() {
    return (
        <header className="sticky top-0 flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
            <NavigationMenu className="w-full flex items-center justify-between  ">
                <NavigationMenuList>
                    <NavigationMenuLink>
                        <></>
                    </NavigationMenuLink>
                </NavigationMenuList>
                <NavigationMenuList>
                    <Link to="/">
                    <Webhook size={36} strokeWidth={1.5}/>
                    </Link>
                </NavigationMenuList>
                <NavigationMenuList>
                    <NavigationMenuLink className="flex gap-4">
                        <ThemeToggle />
                        <Dropdown action="avatar" label="My Account" items={["Support", "Settings"]} />
                    </NavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}
