import { Code2, LayoutDashboard, Clock, BookOpen } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
    {icon: LayoutDashboard, name: "Dashboard", href: "/"},
    {icon: Clock, name: "Sessions", href: "/sessions"},
    {icon: BookOpen, name: "Resources", href: "/resources"}
]

export const NavBar = () => {
    const location = useLocation();
    
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/80">
            <div className="mx-auto max-w-7xl px-6">
                <div className="flex items-center justify-between h-16">

                    <Link to="/" className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center bg-primary/10 rounded-xl border border-primary/20">
                            <Code2 className="text-primary h-5 w-5"/>
                        </div>
                        <div>
                            <span className="font-mono text-xl font-bold">
                                Dev<span className="text-primary">Log</span>
                            </span>
                        </div>
                    </Link>

                    <div className="flex items-center gap-2">
                        {navItems.map((navItem) => {
                            const isActive = location.pathname === navItem.href;
                            return (
                                <Link
                                    key={navItem.href}
                                    to={navItem.href}
                                    className={`nav-link flex items-center gap-2 ${
                                        isActive ? "nav-link-active" : ""
                                    }`}
                                >
                                    <navItem.icon className="h-4 w-4"/>
                                    <span className="hidden sm:inline">{navItem.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                </div>
            </div>
        </nav>
    );
}