import { ArrowRight, Shield, Lightbulb, Smartphone, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import styles from './Home.module.css';

import hospitalImg from '../assets/images/hospital.jpg';
import companyImg from '../assets/images/corporate.jpg';
import buildingImg from '../assets/images/building.jpg';
import aboutImg from '../assets/images/about.jpg';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const containerRef = useRef();

    useGSAP(() => {
        // Hero Animation
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
        tl.from(`.${styles.heroTitle}`, { y: 50, opacity: 0, duration: 1, delay: 0.5 })
            .from(`.${styles.heroSubtitle}`, { y: 30, opacity: 0, duration: 1 }, "-=0.8")
            .from(`.${styles.heroButtons}`, { y: 20, opacity: 0, duration: 1 }, "-=0.8");

        // Intro Section Animation
        gsap.from(`.${styles.introText} > *`, {
            scrollTrigger: {
                trigger: `.${styles.introSection}`,
                start: 'top 80%',
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power2.out'
        });

        gsap.from(`.${styles.introImageContainer}`, {
            scrollTrigger: {
                trigger: `.${styles.introSection}`,
                start: 'top 80%',
            },
            x: 100,
            opacity: 0,
            duration: 1.2,
            ease: 'power2.out'
        });

        // Solutions Preview Animation
        gsap.from(`.${styles.solutionPreviewItem}`, {
            scrollTrigger: {
                trigger: `.${styles.solutionsPreviewGrid}`, // Trigger when the grid enters
                start: 'top 85%', // Trigger slightly earlier
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 40,
            duration: 0.6, // Snappier duration
            stagger: 0.1, // Faster sequence
            ease: 'power2.out',
            clearProps: "opacity,transform"
        });

        // Features Section Animation
        gsap.from(`.${styles.featureCard}`, {
            scrollTrigger: {
                trigger: `.${styles.featuresGrid}`,
                start: 'top 85%',
            },
            opacity: 0,
            y: 40,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            clearProps: "all"
        });

        // Featured Products Animation
        gsap.from(`.${styles.productCardWrapper}`, {
            scrollTrigger: {
                trigger: `.${styles.productsGrid}`, // Trigger on the grid itself
                start: 'top 85%',
            },
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            clearProps: "all"
        });

        // CTA Animation
        gsap.from(`.${styles.ctaSection} h2, .${styles.ctaSection} p, .${styles.ctaButton}`, {
            scrollTrigger: {
                trigger: `.${styles.ctaSection}`,
                start: 'top 90%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.2,
            ease: 'power2.out',
            immediateRender: false,
            clearProps: "all"
        });

    }, { scope: containerRef });

    return (
        <div className={styles.home} ref={containerRef}>
            {/* 1. Hero Section */}
            <section className={styles.hero}>
                <div className={styles.heroOverlay}></div>
                <div className={`container ${styles.heroContent}`}>
                    <h1 className={styles.heroTitle}>Smart Automation for Modern Living</h1>
                    <p className={styles.heroSubtitle}>
                        Transform your space with intelligent control. Enhance comfort, security, and efficiency with our premium home automation solutions.
                    </p>
                    <div className={styles.heroButtons}>
                        <Link to="/products" className="btn btn-primary">
                            Explore Products <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                        <Link to="/contact" className="btn btn-outline">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. Brief Company Intro Section */}
            <section className={styles.introSection}>
                <div className="container">
                    <div className={styles.introContent}>
                        <div className={styles.introText}>
                            <span className={styles.introTag}>Precision & Innovation</span>
                            <h2 className={styles.introTitle}>Dedicated to Elevating Your Living Experience</h2>
                            <p className={styles.introDescription}>
                                At GS Technologies, we don't just install gadgets; we design lifestyles. With over 5 years of mastery in smart integration, we bridge the gap between complex technology and effortless daily use. Our systems are built to be invisible yet indispensable.
                            </p>
                            <Link to="/about" className={styles.introLink}>
                                Discover Our Story <ArrowRight size={16} />
                            </Link>
                        </div>
                        <div className={styles.introImageContainer}>
                            <img src={aboutImg} alt="Modern Smart Living" className={styles.introImage} />
                            <div className={styles.imageDecor}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Solutions Preview Section */}
            <section className={styles.solutionsSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our Core Automation Solutions</h2>
                        <p className={styles.sectionSubtitle}>Tailored systems for every environment.</p>
                    </div>

                    <div className={styles.solutionsPreviewGrid}>
                        <div className={styles.solutionPreviewItem}
                            style={{ backgroundImage: `url(${hospitalImg})` }}>
                            <div className={styles.solutionContent}>
                                <h3>Hospital Automation</h3>
                                <p>Enhanced patient care and operational efficiency.</p>
                                <Link to="/solutions" className={styles.learnMoreLink}>
                                    Learn More <ArrowRight size={16} style={{ marginLeft: '4px' }} />
                                </Link>
                            </div>
                        </div>

                        <div className={styles.solutionPreviewItem}
                            style={{ backgroundImage: `url(${companyImg})` }}>
                            <div className={styles.solutionContent}>
                                <h3>Company Automation</h3>
                                <p>Smart workspaces for higher productivity.</p>
                                <Link to="/solutions" className={styles.learnMoreLink}>
                                    Learn More <ArrowRight size={16} style={{ marginLeft: '4px' }} />
                                </Link>
                            </div>
                        </div>

                        <div className={styles.solutionPreviewItem}
                            style={{ backgroundImage: `url(${buildingImg})` }}>
                            <div className={styles.solutionContent}>
                                <h3>Building Automation</h3>
                                <p>Integrated systems for residential & commercial hubs.</p>
                                <Link to="/solutions" className={styles.learnMoreLink}>
                                    Learn More <ArrowRight size={16} style={{ marginLeft: '4px' }} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Features Section */}
            <section className="section container">
                <div className={styles.sectionHeader}>
                    <h2 className={styles.sectionTitle}>Why Choose GS Technologies?</h2>
                    <p className={styles.sectionSubtitle}>We deliver cutting-edge technology wrapped in elegant design.</p>
                </div>

                <div className={styles.featuresGrid}>
                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}><Shield size={32} /></div>
                        <h3>Advanced Security</h3>
                        <p>Keep your home safe with smart locks, cameras, and motion sensors.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}><Lightbulb size={32} /></div>
                        <h3>Smart Lighting</h3>
                        <p>Set the perfect mood with automated lighting scenes and controls.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}><Smartphone size={32} /></div>
                        <h3>Mobile Control</h3>
                        <p>Control your entire home from anywhere in the world using your smartphone.</p>
                    </div>
                    <div className={styles.featureCard}>
                        <div className={styles.iconWrapper}><Cpu size={32} /></div>
                        <h3>Seamless Integration</h3>
                        <p>All your devices working together in perfect harmony.</p>
                    </div>
                </div>
            </section>

            {/* 5. Featured Products Section */}
            <section className={styles.productsSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle} style={{ color: '#fff' }}>Featured Products</h2>
                        <p className={styles.sectionSubtitle} style={{ color: 'rgba(255,255,255,0.7)' }}>Discover our most popular smart home components.</p>
                    </div>
                    <div className={styles.productsGrid}>
                        {products.slice(0, 3).map((prod) => (
                            <div key={prod.id} className={styles.productCardWrapper}>
                                <ProductCard
                                    id={prod.id}
                                    title={prod.name}
                                    image={prod.image}
                                    description={prod.description}
                                    className={styles.showcaseCard}
                                />
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '60px' }}>
                        <Link to="/products" className={styles.viewCollectionBtn}>
                            View Full Collection <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* 6. CTA Section */}
            <section className={styles.ctaSection}>
                <div className="container" style={{ position: 'relative', zIndex: 5 }}>
                    <h2>Ready to Upgrade Your Home?</h2>
                    <p>Get in touch with our experts to design your custom smart home solution.</p>
                    <Link to="/contact" className={styles.ctaButton}>
                        Get Started <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
