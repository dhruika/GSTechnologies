import { Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.footerContainer}`}>
                <div className={styles.column}>
                    <h3 className={styles.heading}>GS Technologies</h3>
                    <p className={styles.description}>
                        Smart Automation for Modern Living. We provide premium home automation solutions for residential and commercial spaces.
                    </p>
                    <div className={styles.socials}>
                        <a href="#" className={styles.socialLink} aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="#" className={styles.socialLink} aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="#" className={styles.socialLink} aria-label="Twitter"><Twitter size={20} /></a>
                    </div>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.subHeading}>Quick Links</h4>
                    <div className={styles.links}>
                        <Link to="/" className={styles.link}>Home</Link>
                        <Link to="/products" className={styles.link}>Products</Link>
                        <Link to="/about" className={styles.link}>About Us</Link>
                        <Link to="/faq" className={styles.link}>FAQ</Link>
                        <Link to="/contact" className={styles.link}>Contact Us</Link>
                    </div>
                </div>

                <div className={styles.column}>
                    <h4 className={styles.subHeading}>Contact Info</h4>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <MapPin size={18} className={styles.icon} />
                            <span>123 Smart Street, Tech City, IN</span>
                        </div>
                        <div className={styles.contactItem}>
                            <Phone size={18} className={styles.icon} />
                            <span>+91 74042 72041</span>
                        </div>
                        <div className={styles.contactItem}>
                            <Mail size={18} className={styles.icon} />
                            <span>paialarahul@gmail.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.copyright}>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} GS Technologies. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
