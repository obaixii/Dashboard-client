import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { AlertDialogBox } from "../index"

type DropdownMenuProps = {
    label: string,
    items: string[],
}
export default function Dropdown({ label, items }: DropdownMenuProps) {
    return (
        <DropdownMenu >
            <DropdownMenuTrigger className="flex items-center ">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>

            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLabel>{label}</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {
                    items.map((item, i) =>
                        <DropdownMenuItem key={i}>
                            {item}
                        </DropdownMenuItem>)
                }
                <Separator />
                <AlertDialogBox action="logout" />
            </DropdownMenuContent>
        </DropdownMenu>
    )
}