import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom"
import ThemeToggle from "../Theme/ThemeToggle"
import Dropdown from "../Dropdown"

export default function Navbar() {
    return (
        <header className="flex bg-muted h-20 w-full items-center px-4 md:px-6">
            <NavigationMenu className="w-full flex items-center justify-between  ">
                <NavigationMenuList>
                    <NavigationMenuLink>

                    </NavigationMenuLink>
                </NavigationMenuList>
                <NavigationMenuList>
                    <Link to="#">
                        Home
                    </Link>
                </NavigationMenuList>
                <NavigationMenuList>
                    <NavigationMenuLink className="flex gap-4">
                        <ThemeToggle />
                        <Dropdown
                            label="My Account"
                            items={["Profile", "Theme", "Settings"]} />
                    </NavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}
