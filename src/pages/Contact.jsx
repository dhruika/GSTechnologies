import { useState, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const [showOtpModal, setShowOtpModal] = useState(false);
    const [generatedOtp, setGeneratedOtp] = useState('');
    const [enteredOtp, setEnteredOtp] = useState('');
    const [loading, setLoading] = useState(false);
    const formRef = useRef();

    const generateOtp = () => {
        return Math.floor(100000 + Math.random() * 900000).toString();
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const otp = generateOtp();
        setGeneratedOtp(otp);

        const userEmail = formRef.current.email.value;
        const otpData = {
            email: userEmail,
            passcode: otp
        };

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_OTP_TEMPLATE_ID,
            otpData,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setShowOtpModal(true);
                setLoading(false);
            })
            .catch((error) => {
                console.error(error);
                alert('Failed to send OTP. Try again.');
                setLoading(false);
            });
    };

    const verifyOtpAndSubmit = () => {
        if (enteredOtp === generatedOtp) {
            emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )

                .then(() => {
                    alert('Message sent successfully!');
                    formRef.current.reset();
                    setShowOtpModal(false);
                    setEnteredOtp('');
                    setGeneratedOtp('');
                })
                .catch((error) => {
                    console.error(error);
                    alert('Failed to send message. Try again.');
                });
        } else {
            alert('Invalid OTP. Please try again.');
        }
    };

    return (
        <div className={styles.contactPage}>
            <div className={styles.heroImage}>
                <div className={styles.heroOverlay}></div>
                <div className={`container ${styles.heroContent}`}>
                    <h1>Get In Touch</h1>
                    <p>We'd love to hear from you. Fill out the form below or visit us.</p>
                </div>
            </div>

            <div className="container section">
                <div className={styles.grid}>
                    {/* Contact Info */}
                    <div className={styles.infoColumn}>
                        <div className={styles.infoCard}>
                            <h3>Contact Information</h3>
                            <div className={styles.infoItem}>
                                <div className={styles.iconBox}><Phone size={20} /></div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+91 74042 72041</p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.iconBox}><Mail size={20} /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p>paialarahul@gmail.com</p>
                                </div>
                            </div>
                            <div className={styles.infoItem}>
                                <div className={styles.iconBox}><MapPin size={20} /></div>
                                <div>
                                    <h4>Office</h4>
                                    <p>123 Smart Street, Tech City, IN 560001</p>
                                </div>
                            </div>
                        </div>

                        <div className={styles.mapContainer}>
                            {/* Embedded Map Placeholder */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.989299446332!2d77.589889!3d12.971599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnMjMuNiJF!5e0!3m2!1sen!2sin!4v1625567890123!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                title="Google Maps"
                            ></iframe>
                        </div>
                    </div>


                    {/* Contact Form */}
                    <div className={styles.formColumn}>
                        <form className={styles.form} ref={formRef} onSubmit={handleSubmit}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Inquiry about Smart Lighting"
                                    required
                                />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="Tell us about your project..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary"
                                style={{ width: '100%' }}
                                disabled={loading}
                            >
                                {loading ? 'Sending...' : 'Send Message'}{' '}
                                <Send size={18} style={{ marginLeft: '8px' }} />
                            </button>


                        </form>
                    </div>


                </div>
            </div>

            {showOtpModal && (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    zIndex: 1000
                }}>
                    <div style={{
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                        maxWidth: '400px',
                        width: '90%'
                    }}>
                        <h3>Enter OTP</h3>
                        <p>Please enter the 6-digit OTP sent to your email.</p>
                        <input
                            type="text"
                            value={enteredOtp}
                            onChange={(e) => setEnteredOtp(e.target.value)}
                            placeholder="Enter OTP"
                            style={{
                                width: '100%',
                                padding: '10px',
                                margin: '10px 0',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                fontSize: '16px'
                            }}
                            maxLength="6"
                        />
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button
                                onClick={verifyOtpAndSubmit}
                                style={{
                                    flex: 1,
                                    padding: '10px',
                                    backgroundColor: '#007bff',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                Verify & Send
                            </button>
                            <button
                                onClick={() => {
                                    setShowOtpModal(false);
                                    setEnteredOtp('');
                                    setGeneratedOtp('');
                                }}
                                style={{
                                    flex: 1,
                                    padding: '10px',
                                    backgroundColor: '#6c757d',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer'
                                }}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Contact;
