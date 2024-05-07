import * as React from "react";
import { ChevronsUpDown, Home, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible";
import { Link } from "react-router-dom"

export function CollapsibleDemo() {
    const [isOpen, setIsOpen] = React.useState(false);

    return (
        <Collapsible
            open={isOpen}
            onOpenChange={setIsOpen}
            className="w-full space-y-2"
        >
            <div className="flex items-center justify-between space-x-4 px-4">
                <CollapsibleTrigger className="bg-muted flex items-center gap-3 text-primary rounded-lg px-3 py-2 transition-all hover:text-primary">
                    <Link
                        to="/dashboard"
                        className="bg-muted flex items-center gap-3 text-primary rounded-lg px-3 py-2 transition-all hover:text-primary">
                        <Home className="h-4 w-4" />
                        Dashboard
                    </Link>
                    <Button variant="ghost" size="sm" className="w-9 p-0">
                        <ChevronsUpDown className="h-4 w-4" />
                        <span className="sr-only">toggle</span>
                    </Button>
                </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="">
                <Link
                    to="/manage"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
                >
                    <ShoppingCart className="h-4 w-4" />
                    Manage
                </Link>
            </CollapsibleContent>
        </Collapsible>
    )
}
