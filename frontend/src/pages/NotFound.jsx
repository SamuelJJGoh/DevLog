import { useLocation } from "react-router-dom";
import { useEffect } from "react";
export default function NotFound() {
    const location = useLocation();

    useEffect(() => {
        console.error("404 Error: User attempted to access non-existent route:", location.pathname)
    }, [location.pathname])

    return (
        <div>
            <h1>404</h1>
            <p>Page Not Found!</p>
        </div>
    );
}