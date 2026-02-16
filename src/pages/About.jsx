import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Briefcase, Users } from 'lucide-react';
import styles from './About.module.css';
import aboutImg from '../assets/images/about.jpg';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef();

    useGSAP(() => {
        // Simple entry animations
        gsap.from(`.${styles.heroContent}`, { y: 30, opacity: 0, duration: 1, delay: 0.2 });

        gsap.from(`.${styles.textColumn} > *`, {
            scrollTrigger: {
                trigger: `.${styles.content}`,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            clearProps: "all"
        });

        gsap.from(`.${styles.imageColumn}`, {
            scrollTrigger: { trigger: `.${styles.content}`, start: 'top 80%' },
            x: 50, opacity: 0, duration: 1, ease: 'power2.out', delay: 0.2,
            clearProps: "all"
        });

        // The Stats Animation - adding immediateRender: false to fix visibility issues
        gsap.from(`.${styles.statCard}`, {
            scrollTrigger: {
                trigger: `.${styles.statsGrid}`,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            immediateRender: false,
            clearProps: "all"
        });
    }, { scope: containerRef });

    return (
        <div className={styles.aboutPage} ref={containerRef}>
            <div className={styles.heroImage}>
                <div className={styles.heroOverlay}></div>
                <div className={`container ${styles.heroContent}`}>
                    <h1 className={styles.title} style={{ color: 'white' }}>About Us</h1>
                    <p className={styles.subtitle}>Building the future of smart living.</p>
                </div>
            </div>

            <div className={`container section ${styles.content}`}>
                <div className={styles.textColumn}>
                    <h1 className={styles.title}>About GS Technologies</h1>
                    <h2 className={styles.subtitle} style={{ color: 'var(--color-primary)' }}>Innovating Smart Living Spaces</h2>
                    <p className={styles.description}>
                        Founded on the principles of reliability and innovation, GS Technologies is a premier provider of home automation solutions. We believe that technology should serve people, making their lives easier, safer, and more enjoyable.
                    </p>
                    <p className={styles.description}>
                        Our mission is to democratize smart home technology, bringing premium automation experiences to residential and commercial spaces alike. With a focus on seamless integration and user-centric design, we transform ordinary buildings into intelligent environments.
                    </p>
                </div>
                <div className={styles.imageColumn}>
                    <img
                        src={aboutImg}
                        alt="Modern Office"
                        className={styles.image}
                    />
                </div>
            </div>

            <div className={styles.statsSection}>
                <div className="container">
                    <div className={styles.statsGrid}>
                        <div className={styles.statCard}>
                            <div className={styles.statIcon}><Award size={40} /></div>
                            <div className={styles.statInfo}>
                                <h3>5+</h3>
                                <p>Years of Excellence</p>
                            </div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statIcon}><Briefcase size={40} /></div>
                            <div className={styles.statInfo}>
                                <h3>500+</h3>
                                <p>Projects Completed</p>
                            </div>
                        </div>
                        <div className={styles.statCard}>
                            <div className={styles.statIcon}><Users size={40} /></div>
                            <div className={styles.statInfo}>
                                <h3>100%</h3>
                                <p>Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
