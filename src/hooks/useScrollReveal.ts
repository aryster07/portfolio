import { useEffect } from 'react';

export const useScrollReveal = (dependencies: React.DependencyList = []) => {
    useEffect(() => {
        // Reset all reveal elements first (remove reveal-visible class)
        document.querySelectorAll('.reveal-visible').forEach((el) => {
            if (el.classList.contains('reveal-hidden')) {
                el.classList.remove('reveal-visible');
            }
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('reveal-visible');
            });
        }, { threshold: 0.1 });
        
        // Small delay to ensure DOM has updated after mode switch
        const timeoutId = setTimeout(() => {
            document.querySelectorAll('.reveal-hidden').forEach((el) => observer.observe(el));
        }, 100);
        
        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, dependencies);
};
