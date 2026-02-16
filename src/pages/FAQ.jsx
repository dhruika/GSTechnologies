import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Accordion from '../components/Accordion';
import faqImg from '../assets/images/faq.jpg';

const faqData = [
    {
        title: 'Does GS Technologies provide installation services?',
        content: 'Yes, we provide end-to-end installation services for all our products. Our certified technicians ensure that your smart home system is set up correctly and integrated seamlessly.'
    },
    {
        title: 'Are your products compatible with existing electrical wiring?',
        content: 'Most of our smart switches and automation controllers are designed to be retrofittable. In many cases, no major rewiring is required. We can assess your current setup to recommend the best solution.'
    },
    {
        title: 'What kind of support do you offer after installation?',
        content: 'We offer comprehensive post-installation support, including a standard warranty on products and a service guarantee on our workmanship. We also have annual maintenance packages available.'
    },
    {
        title: 'Can I control the system if my internet goes down?',
        content: 'Yes, many of our local control systems works independently of the cloud for basic functionality like lighting control within the home, though remote access would be temporarily unavailable.'
    },
    {
        title: 'Do you offer solutions for commercial buildings?',
        content: 'Absolutely. We specialize in both residential and commercial automation, offering tailored solutions for offices, hotels, and retail spaces including energy management and access control.'
    }
];

const FAQ = () => {
    const containerRef = useRef();

    useGSAP(() => {
        gsap.from('.hero-text', { y: 30, opacity: 0, duration: 1, delay: 0.2 });
        gsap.from('.accordion-container', {
            y: 50, opacity: 0, duration: 1, delay: 0.5, ease: 'power2.out'
        });
    }, { scope: containerRef });

    return (
        <div ref={containerRef}>
            <div className="heroImage" style={{
                position: 'relative',
                height: '300px',
                backgroundImage: `url(${faqImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: '#fff',
                marginBottom: '3rem'
            }}>
                <div style={{
                    position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                    background: 'rgba(0,0,0,0.6)'
                }}></div>
                <div className="container hero-text" style={{ position: 'relative', zIndex: 1 }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Frequently Asked Questions</h1>
                    <p style={{ fontSize: '1.25rem', color: '#e0e0e0' }}>Find answers to common questions about our products and services.</p>
                </div>
            </div>

            <div className="container section accordion-container">
                <Accordion items={faqData} />
            </div>
        </div>
    );
};

export default FAQ;
