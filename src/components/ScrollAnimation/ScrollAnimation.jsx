import  { useEffect, useRef } from 'react';
import './ScrollAnimation.css';

const ScrollAnimation = ({ children, delay = 0 }) => {
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, delay * 1000);
                }
            });
        },
            {
                threshold: 0.1,
                rootMargin: '50px',
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return() => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, []);

    return (
        <div ref={elementRef} className="Scroll-Animation" style={{ transitionDelay: `${delay}s` }}>
            {children}
        </div>
    );
}

export default ScrollAnimation;