import "./contact.css";
import Footer from "../footer/footer";

export default function Contact() {
    return (
        <>
            <div className="page" id="contact">
                <div className="contact-page">
                    <div className="container">
                        <h1 className="page-title">Contacts</h1>
                        <p className="page-subtitle">Get in touch with us in the most convenient way for you</p>

                        <div className="contact-content">
                            <div className="contact-info">
                                <h3 className="contact-title">Contact Information</h3>

                                <div className="contact-block">
                                    <h4 className="contact-heading">📍 Address</h4>
                                    <p className="contact-text">
                                        Moscow, Tverskaya St., 15 (False Address)<br />
                                        "Central" Shopping Mall, 3rd floor
                                    </p>
                                </div>

                                <div className="contact-block">
                                    <h4 className="contact-heading">📞 Phone</h4>
                                    <p className="contact-text">
                                        +7 (495) 123-45-67<br />
                                        Mon-Sun: 10:00 AM - 10:00 PM
                                    </p>
                                </div>

                                <div className="contact-block">
                                    <h4 className="contact-heading">✉️ Email</h4>
                                    <p className="contact-text">
                                        info@luxe-fashion.ru<br />
                                        support@luxe-fashion.ru
                                    </p>
                                </div>

                                <div className="contact-block">
                                    <h4 className="contact-heading">🌐 Social Media</h4>
                                    <p className="contact-text">
                                        @luxe_fashion_official<br />
                                        Follow us for news and promotions
                                    </p>
                                </div>
                            </div>

                            <div className="contact-form">
                                <h3 className="contact-title">Send a Message</h3>
                                <form>
                                    <div className="form-group">
                                        <label>Name</label>
                                        <input type="text" id="name" name="name" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" id="email" name="email" required />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="subject">Subject</label>
                                        <input type="text" id="subject" name="subject" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea id="message" name="message" required></textarea>
                                    </div>
                                    <button type="submit" className="submit-btn">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
