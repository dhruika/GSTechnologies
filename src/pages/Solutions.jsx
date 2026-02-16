import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './Solutions.module.css';

import hospitalImg from '../assets/images/hospital.jpg';
import companyImg from '../assets/images/corporate.jpg';
import buildingImg from '../assets/images/building.jpg';

gsap.registerPlugin(ScrollTrigger);

const Solutions = () => {
    const containerRef = useRef();

    useGSAP(() => {
        gsap.from(`.${styles.title}`, { y: 30, opacity: 0, duration: 1, delay: 0.2 });

        const sections = gsap.utils.toArray(`.${styles.section}`);
        sections.forEach((section, index) => {
            // Content animation (Left or Right based on index/order)
            gsap.from(section.querySelector(`.${styles.content}`), {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 75%',
                },
                x: index % 2 === 0 ? -100 : 100, // Alternate sides
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out'
            });

            // Image animation (Opposite to content)
            gsap.from(section.querySelector(`.${styles.imageWrapper}`), {
                scrollTrigger: {
                    trigger: section,
                    start: 'top 75%',
                },
                x: index % 2 === 0 ? 100 : -100, // Alternate sides
                opacity: 0,
                duration: 1.2,
                ease: 'power3.out'
            });
        });
    }, { scope: containerRef });

    return (
        <div className={styles.solutionsPage} ref={containerRef}>
            {/* Hero Section */}
            <div className={styles.heroImage}>
                <div className={styles.heroOverlay}></div>
                <div className={`container ${styles.heroContent}`}>
                    <h1 className={styles.title}>Our Solution</h1>
                    <p className={styles.subtitle}>Tailored automation for every environment.</p>
                </div>
            </div>

            {/* Hospital Solutions */}
            <section className={`container section ${styles.section}`}>
                <div className={styles.content}>
                    <h2 className={styles.sectionTitle}>Hospital Solutions</h2>
                    <p className={styles.description}>
                        Enhance patient care and operational efficiency with smart hospital automation.
                        Our systems provide seamless control over lighting, climate, and security, creating a healing environment while reducing energy costs.
                    </p>
                    <ul className={styles.featureList}>
                        <li>Automated Patient Room Controls</li>
                        <li>Intelligent Nurse Call Systems</li>
                        <li>Energy Efficient Lighting</li>
                    </ul>
                </div>
                <div className={styles.imageWrapper}>
                    <img
                        src={hospitalImg}
                        alt="Hospital Automation"
                        className={styles.image}
                    />
                </div>
            </section>

            {/* Company/Corporate Solutions */}
            <section className={`container section ${styles.section} ${styles.reverse}`}>
                <div className={styles.content}>
                    <h2 className={styles.sectionTitle}>Corporate Solutions</h2>
                    <p className={styles.description}>
                        Transform your workplace into a hub of productivity. Smart conference rooms,
                        automated access control, and intelligent environment management ensure your business runs smoothly.
                    </p>
                    <ul className={styles.featureList}>
                        <li>Smart Meeting Rooms</li>
                        <li>Biometric Access Control</li>
                        <li>Centralized Building Management</li>
                    </ul>
                </div>
                <div className={styles.imageWrapper}>
                    <img
                        src={companyImg}
                        alt="Corporate Office"
                        className={styles.image}
                    />
                </div>
            </section>

            {/* Building Solutions */}
            <section className={`container section ${styles.section}`}>
                <div className={styles.content}>
                    <h2 className={styles.sectionTitle}>Building Solutions</h2>
                    <p className={styles.description}>
                        Comprehensive automation for residential and commercial complexes.
                        From smart parking to integrated security, we make building management effortless.
                    </p>
                    <ul className={styles.featureList}>
                        <li>Integrated Security Surveillance</li>
                        <li>Smart Parking Systems</li>
                        <li>Common Area Automation</li>
                    </ul>
                </div>
                <div className={styles.imageWrapper}>
                    <img
                        src={buildingImg}
                        alt="Modern Building"
                        className={styles.image}
                    />
                </div>
            </section>
        </div>
    );
};

export default Solutions;
