import { useLocation } from 'react-router-dom';
import ContactForm from './ContactForm';

const GlobalContactSection = () => {
    const location = useLocation();

    // Do not show on Contact page
    if (location.pathname === '/contact') {
        return null;
    }

    return (
        <div style={{ backgroundColor: 'var(--color-bg)', paddingBottom: '2rem' }}>
            <ContactForm />
        </div>
    );
};

export default GlobalContactSection;
