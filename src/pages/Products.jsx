import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProductCard from '../components/ProductCard';
import styles from './Products.module.css';
import { products } from '../data/products';

gsap.registerPlugin(ScrollTrigger);

const Products = () => {
    const containerRef = useRef();

    useGSAP(() => {
        gsap.from(`.${styles.title}`, { y: 30, opacity: 0, duration: 1, delay: 0.2 });

        gsap.from('.product-card-anim', {
            scrollTrigger: {
                trigger: `.${styles.grid}`,
                start: 'top 85%',
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            immediateRender: false,
            clearProps: "all"
        });
    }, { scope: containerRef });

    return (
        <div className={styles.productsPage} ref={containerRef}>
            <div className={styles.heroImage}>
                <div className={styles.heroOverlay}></div>
                <div className={`container ${styles.heroContent}`}>
                    <h1 className={styles.title}>Our Products</h1>
                    <p className={styles.subtitle}>Explore our comprehensive range of smart home automation products.</p>
                </div>
            </div>

            <section className="container section">
                <div className={styles.grid}>
                    {products.map((prod, index) => (
                        <div key={prod.id} className="product-card-anim">
                            <ProductCard
                                id={prod.id}
                                title={prod.name}
                                image={prod.image}
                                description={prod.description}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Products;
