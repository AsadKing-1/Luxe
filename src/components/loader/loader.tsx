import "./loader.css";
import { useEffect, useState } from "react";

export default function Loader() {
    const [isVisible, setVisible] = useState<boolean>(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 1500)
        return () => { clearTimeout(timer) }
    }, [])
    if (!isVisible) return null;
    return (
        <div className="loader" id="loader">
            <div className="spinner"></div>
            <div className="loading-text">LOADING LUXE</div>
        </div>
    )
}
