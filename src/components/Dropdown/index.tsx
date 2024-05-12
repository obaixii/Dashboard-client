import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { AlertDialogBox } from "../index"
import { Button } from "../ui/button"
import { ListFilter } from "lucide-react"
import { Link } from "react-router-dom"

type DropdownMenuProps = {
    action: string
    label: string,
    items: string[],
    type?: "dropdown" | "checkbox"
}
export default function Dropdown({ action, label, items }: DropdownMenuProps) {

    return (
        <DropdownMenu >
            <DropdownMenuTrigger className="flex items-center ">
                {
                    action === "avatar" ?

                        <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        :
                        <Button variant="outline" size="sm" className="h-8 gap-1">
                            <ListFilter className="h-3.5 w-3.5" />
                            <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                                Filter
                            </span>
                        </Button>
                }
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{label}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {
                    items.map((item, i) =>
                        <DropdownMenuItem key={i}>
                            <Link to={`/${item.toLowerCase()}`}>{item}</Link>
                        </DropdownMenuItem>)
                }
                {
                    action === "avatar" ?
                        <Separator />
                        :
                        <></>
                }

                {
                    action === "avatar" ?
                        <AlertDialogBox action="logout" />
                        :
                        <></>
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
}
