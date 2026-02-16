import { useParams, Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ArrowLeft, CheckCircle } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import styles from './ProductDetail.module.css';
import gsap from 'gsap';

const ProductDetail = () => {
    const { id } = useParams();
    const product = products.find(p => p.id === id);
    const containerRef = useRef();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top on load

        gsap.from('.product-anim', {
            y: 30,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
            immediateRender: false, // Prevents elements from being invisible before animation starts
            clearProps: "all" // Removes GSAP styles after completion
        });
    }, [id]);

    if (!product) {
        return (
            <div className="container section text-center">
                <h2>Product not found</h2>
                <Link to="/products" className="btn btn-primary mt-4">Back to Products</Link>
            </div>
        );
    }

    const related = products.filter(p => product.relatedProducts.includes(p.id));

    return (
        <div className={styles.productDetail} ref={containerRef}>
            <div className="container">
                <Link to="/products" className={styles.backButton}>
                    <ArrowLeft size={18} />
                    <span>Products</span>
                </Link>

                <div className={styles.contentLayout}>
                    {/* Left Side: Product Image */}
                    <div className={`${styles.imageSection} product-anim`}>
                        <div className={styles.imageContainer}>
                            <img src={product.image} alt={product.name} className={styles.mainImage} />
                            <div className={styles.imageOverlay}></div>
                        </div>
                    </div>

                    {/* Right Side: Product Info */}
                    <div className={styles.infoSection}>
                        <div className={styles.infoContent}>
                            <div className="product-anim">
                                <span className={styles.tag}>{product.category}</span>
                                <h1 className={styles.title}>{product.name}</h1>
                            </div>

                            <div className={`${styles.descriptionContainer} product-anim`}>
                                <p className={styles.description}>{product.longDescription}</p>
                            </div>

                            <div className={`${styles.featuresGrid} product-anim`}>
                                {product.features.map((feature, index) => (
                                    <div key={index} className={styles.featureItem}>
                                        <div className={styles.featureIcon}>
                                            <CheckCircle size={20} />
                                        </div>
                                        <p>{feature}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {related.length > 0 && (
                <div className={styles.relatedProductsSection}>
                    <div className="container">
                        <h3 className="product-anim">Pairs well with</h3>
                        <div className={`${styles.relatedGrid} product-anim`}>
                            {related.map(p => (
                                <Link
                                    to={`/products/${p.id}`}
                                    key={p.id}
                                    className={styles.relatedSmallCard}
                                    style={{ backgroundImage: `url(${p.image})` }}
                                >
                                    <div className={styles.relatedOverlay}></div>
                                    <div className={styles.relatedInfo}>
                                        <h4>{p.name}</h4>
                                        <span>View details</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetail;
