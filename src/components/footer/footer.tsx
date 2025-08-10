import "./footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>Company</h3>
                    <a href="#" >About us</a>
                    <a href="#">Vacancies</a>
                    <a href="#">News</a>
                    <a href="#">Investors</a>
                </div>
                <div className="footer-section">
                    <h3>For buyers</h3>
                    <a href="#">Delivery and payment</a>
                    <a href="#">Returns and exchanges</a>
                    <a href="#">Size chart</a>
                    <a href="#">Quality assurance</a>
                </div>
                <div className="footer-section">
                    <h3>Contacts</h3>
                    <a href="#">Contacts</a>
                    <a href="#">FAQ</a>
                    <a href="#">Technical support</a>
                    <a href="#">Track your order</a>
                </div>
                <div className="footer-section">
                    <h3>Follow us</h3>
                    <a href="#">Instagram</a>
                    <a href="#">Facebook</a>
                    <a href="#">VKontakte</a>
                    <a href="#">Telegram</a>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2025 LUXE Fashion. All rights reserved. | Privacy Policy | Terms of Use</p>
            </div>
        </footer>
    )
}