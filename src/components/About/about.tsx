import "./about.css";
import Footer from "../footer/footer";

export default function About() {
    return (
        <>
            <div className="about-page">
                <div className="container">
                    <div className="about-hero">
                        <h1 className="page-title">About us</h1>
                        <p className="page-subtitle">The story of a brand that creates exceptional things for exceptional people</p>
                    </div>

                    <div className="about-content">
                        <div className="about-text">
                            <h3>Our philosophy</h3>
                            <p>LUXE is not just a clothing brand, it is a philosophy of life. We believe that every detail matters, every stitch should be perfect, and every piece should be a work of art.</p>
                            <p>Наша миссия — создавать одежду, которая подчеркивает индивидуальность и помогает выражать
                                внутреннюю красоту через внешний стиль.</p>
                        </div>

                        <div className="about-text">
                            <h3>Quality above all</h3>
                            <p>We work only with the best materials and trusted suppliers. Natural fabrics, handmade work, attention to detail - this is the basis of our approach to creating clothes.</p>
                            <p>Each product undergoes strict quality control to ensure you receive only the best.</p>
                        </div>
                    </div>

                    <div className="stats-grid">
                        <div className="stat-card">
                            <div className="stat-number">2018</div>
                            <div className="stat-label">Year founded</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">50K+</div>
                            <div className="stat-label">Satisfied clients</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">500+</div>
                            <div className="stat-label">Unique products</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">25</div>
                            <div className="stat-label">Delivery countries</div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}