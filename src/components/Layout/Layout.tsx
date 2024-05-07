import Sidebar from "./components/Sidebar"
import PopSidebar from "./components/PopSidebar"
import { Outlet } from "react-router-dom"

export default function Layout() {
    return (
        <div className="relative grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <Sidebar />
            <div className="relative flex flex-col">
                <PopSidebar />
                <Outlet />
            </div>
        </div>
    )
}
