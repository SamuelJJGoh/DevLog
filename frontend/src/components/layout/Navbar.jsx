import { Code2, LayoutDashboard, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
    {icon: <LayoutDashboard />, name: "Dashboard", href: "/"},
    {icon: <Clock />, name: "Sessions", href: "/sessions"},
    {icon: <BookOpen />, name: "Resources", href: "/resources"}
]

export const NavBar = () => {
    
    return (
        <nav>
            <div>
                {navItems.map((navItem) => {
                    return (
                        navItem.icon
                    );
                })}
            </div>
        </nav>
    );
}