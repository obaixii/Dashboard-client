import { Home, LineChart, Package, ShoppingCart, User } from "lucide-react"

type Link = {
    title: string,
    path: string,
    icon: React.ReactNode
}
export const Links: Link[] = [
    {
        title: "Dashboard",
        path: "dashboard",
        icon: <Home className="h-5 w-5" />
    },
    {
        title: "Manage",
        path: "manage",
        icon: <ShoppingCart className="h-4 w-4" />
    },
    {
        title: "Products",
        path: "#",
        icon: <Package className="h-4 w-4" />
    },
    {
        title: "Customers",
        path: "#",
        icon: <User className="h-4 w-4" />
    },
    {
        title: "Analytics",
        path: "#",
        icon: <LineChart className="h-4 w-4" />
    },

]