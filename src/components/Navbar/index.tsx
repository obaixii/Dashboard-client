import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"
import ThemeToggle from "../Theme/ThemeToggle"
import AlertDialogBox from "../Alert"

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
                        <DropdownMenu >
                            <DropdownMenuTrigger className="flex items-center ">
                                <Avatar>
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>

                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Theme</DropdownMenuItem>
                                <DropdownMenuItem>Setting</DropdownMenuItem>
                                <Separator />
                                <AlertDialogBox
                                    title="Do you want to Logout?"
                                    description=" This action cannot be undone. Any unsaved data will be lost."
                                    action="Logout" />
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </NavigationMenuLink>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    )
}
