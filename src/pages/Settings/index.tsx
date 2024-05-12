import { Link, Outlet, useLocation } from "react-router-dom"
import { Navbar } from "@/components"
import { Separator } from "@/components/ui/separator"
import { SettingLinks } from "@/utils/constants"

export default function Settings() {
    const classes = "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
    const { pathname } = useLocation();
    console.log(pathname);

    return (
        <div className="flex min-h-screen w-full flex-col">
            <Navbar />
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-background p-4 md:gap-8 md:p-6">
                <div className="mx-auto grid w-full max-w-6xl gap-2">
                    <h1 className="text-3xl font-semibold">Settings</h1>
                    <p className="text-sm text-muted-foreground">Manage your account settings and set e-mail preferences.</p>
                </div>
                <Separator />
                <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
                    <nav
                        className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0"
                    >
                        {
                            SettingLinks.map((link, index) =>
                                <Link
                                    key={index}
                                    to={link.path}
                                    className={pathname === link.path ? `bg-muted text-primary ${classes}` : `${classes}`}
                                >
                                    {link.icon}
                                    {link.title}
                                </Link>)
                        }
                    </nav>
                    <Outlet />
                </div>
            </main>
        </div>
    )
}
