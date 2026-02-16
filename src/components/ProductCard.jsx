import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ id, title, image, description, className = "" }) => {
    return (
        <div
            className={`${styles.card} ${className}`}
            style={{ backgroundImage: `url(${image})` }}
        >
            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.description}>{description}</p>
                <Link to={`/products/${id}`}>
                    <button className={styles.button}>View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
