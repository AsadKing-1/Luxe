import { Link } from "react-router-dom";
import Footer from "../footer/footer";
import "./main.css";

export default function Main() {
    return (
        <>
            <section className="hero">
                <div className="floating-element element-1"></div>
                <div className="floating-element element-2"></div>
                <div className="floating-element element-3"></div>

                <div className="hero-content">
                    <h1 className="hero-title">LUXE FASHION</h1>
                    <p className="hero-subtitle">Exclusive collections and impeccable style for modern people</p>
                    <Link className="cta-button" to="/catalog">View Catalog</Link>
                </div>
            </section>
            <Footer/>
        </>
    )
}