import { NavBar } from "./Navbar.jsx";

export const Layout = ({ children }) => {

    return (
        <div className="min-h-screen">
            <NavBar />
            <main>{children}</main>
        </div>
    );
}