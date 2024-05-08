import Navbar from "@/components/Navbar";
import { Link } from "react-router-dom";
export default function Home() {
    return (
        <div>
            <Navbar />
            <Link to="/dashboard">Dashboard</Link>
        </div>
    )
}
