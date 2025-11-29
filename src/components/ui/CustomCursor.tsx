"use client";
import { useEffect, useState } from 'react';

export const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.classList.contains('interactive') ||
                target.closest('.interactive') ||
                target.tagName === 'A' ||
                target.tagName === 'BUTTON') {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updatePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updatePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <div className="hidden md:block">
            {/* Main cursor dot */}
            <div
                className="fixed pointer-events-none z-[9999]"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)',
                    transition: 'transform 0.1s ease-out',
                }}
            >
                <div
                    className={`rounded-full bg-amber-500 transition-all duration-200 ${isHovering ? 'w-2 h-2' : 'w-1.5 h-1.5'
                        }`}
                />
            </div>

            {/* Cursor ring */}
            <div
                className="fixed pointer-events-none z-[9998]"
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)',
                    transition: 'all 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                }}
            >
                <div
                    className={`rounded-full border border-amber-500/40 transition-all duration-300 ${isHovering ? 'w-10 h-10 border-amber-500/60' : 'w-8 h-8'
                        }`}
                />
            </div>

            <style jsx global>{`
                * {
                    cursor: none !important;
                }
            `}</style>
        </div>
    );
};
