import { Eye, Home, LineChart, Package, PencilRuler, Pickaxe, ShieldCheck, ShoppingCart, User, UserRound } from "lucide-react"

type Link = {
    title: string,
    path: string,
    icon: React.ReactNode
}
export const DashboardLinks: Link[] = [
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

export const SettingLinks: Link[] = [
    {
        title: "Profile",
        path: "/settings/profile",
        icon: <UserRound className="h-4 w-4" />
    },
    {
        title: "Account",
        path: "/settings/account",
        icon: <ShieldCheck className="h-4 w-4" />
    },
    {
        title: "Appearance",
        path: "/settings/appearance",
        icon: <PencilRuler className="h-4 w-4" />
    },
    {
        title: "Display",
        path: "/settings/display",
        icon: <Eye className="h-4 w-4" />
    },
    {
        title: "Advanced",
        path: "/settings/advance",
        icon: <Pickaxe className="h-4 w-4" />
    },

]