import { useEffect, useRef, RefObject } from 'react';

export function useMagneticButton(strength: number = 0.3) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            element.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        };

        const handleMouseLeave = () => {
            element.style.transform = 'translate(0, 0)';
        };

        element.addEventListener('mousemove', handleMouseMove);
        element.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            element.removeEventListener('mousemove', handleMouseMove);
            element.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [strength]);

    return ref;
}

export function useSwipeGesture(onSwipeLeft?: () => void, onSwipeRight?: () => void) {
    const ref = useRef<HTMLElement>(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        let touchStartX = 0;
        let touchEndX = 0;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartX = e.changedTouches[0].screenX;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        };

        const handleSwipe = () => {
            const swipeThreshold = 50;
            if (touchEndX < touchStartX - swipeThreshold && onSwipeLeft) {
                onSwipeLeft();
            }
            if (touchEndX > touchStartX + swipeThreshold && onSwipeRight) {
                onSwipeRight();
            }
        };

        element.addEventListener('touchstart', handleTouchStart);
        element.addEventListener('touchend', handleTouchEnd);

        return () => {
            element.removeEventListener('touchstart', handleTouchStart);
            element.removeEventListener('touchend', handleTouchEnd);
        };
    }, [onSwipeLeft, onSwipeRight]);

    return ref;
}
