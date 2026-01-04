import { NavBar } from "./Navbar.jsx";

export const Layout = ({ children }) => {

    return (
        <div className="min-h-screen bg-background">
            <NavBar />
            <main className="pt-16">{children}</main>
        </div>
    );
}