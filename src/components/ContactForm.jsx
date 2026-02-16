import { Send } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './ContactForm.module.css';
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

const ContactForm = ({ showHeader = true }) => {
    const formRef = useRef();

    const [showOtpModal, setShowOtpModal] = useState(false);
    const [generatedOtp, setGeneratedOtp] = useState('');
    const [enteredOtp, setEnteredOtp] = useState('');
    const [loading, setLoading] = useState(false);

    const generateOtp = () =>
        Math.floor(1000 + Math.random() * 9000).toString();

    // Step 1: Send OTP
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            "PUBLIC KEY:",
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );


        const otp = generateOtp();
        const userEmail = e.target['global-email'].value;

        setGeneratedOtp(otp);
        setLoading(true);

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_OTP_TEMPLATE_ID,
                {
                    email: userEmail,
                    passcode: otp,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setLoading(false);
                setShowOtpModal(true); // open modal
            })
            .catch((error) => {
                console.error("EmailJS Error FULL:", error);
                console.error("EmailJS Error text:", error.text);
                alert("Failed to send OTP");
            });
    };

    // Step 2: Verify OTP & send final mail
    const verifyOtpAndSubmit = () => {
        if (enteredOtp !== generatedOtp) {
            alert('Invalid OTP');
            return;
        }

        emailjs
            .sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID,
                formRef.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                alert('Message sent successfully');
                setShowOtpModal(false);
                setEnteredOtp('');
                formRef.current.reset();
            })
            .catch(() => {
                alert('Failed to submit form');
            });
    };

    return (
        <section className={`container ${styles.contactSection}`}>
            {showHeader && <h2 className={styles.sectionTitle}>Get in Touch</h2>}

            <div className={styles.formContainer}>
                <form ref={formRef} onSubmit={handleSubmit}>
                    <div className={styles.formGroup}>
                        <label>Full Name</label>
                        <input type="text" name="name" required />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Email Address</label>
                        <input type="email" name="email" id="global-email" required />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Subject</label>
                        <input type="text" name="subject" required />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Message</label>
                        <textarea name="message" rows="5" required></textarea>
                    </div>

                    <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={loading}
                    >
                        Send Message <Send size={18} />
                    </button>
                </form>
            </div>

            {/* OTP MODAL */}
            {showOtpModal && (
                <div className={styles.otpOverlay}>
                    <div className={styles.otpModal}>
                        <h3>Enter OTP</h3>
                        <p>Enter the OTP sent to your email</p>

                        <input
                            type="text"
                            value={enteredOtp}
                            onChange={(e) => setEnteredOtp(e.target.value)}
                        />

                        <button
                            className={styles.submitBtn}
                            onClick={verifyOtpAndSubmit}
                        >
                            Verify OTP
                        </button>
                    </div>
                </div>
            )}
        </section>
    );
};

export default ContactForm;
