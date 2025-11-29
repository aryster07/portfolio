"use client";
import { useEffect, useRef } from 'react';

export const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const move = (e: MouseEvent) => {
            if (cursorRef.current) {
                cursorRef.current.style.left = `${e.clientX}px`;
                cursorRef.current.style.top = `${e.clientY}px`;
            }
        };
        const add = () => cursorRef.current?.classList.add('hovered');
        const remove = () => cursorRef.current?.classList.remove('hovered');
        window.addEventListener('mousemove', move);
        document.querySelectorAll('a, button, .interactive').forEach(el => {
            el.addEventListener('mouseenter', add);
            el.addEventListener('mouseleave', remove);
        });
        return () => {
            window.removeEventListener('mousemove', move);
            document.querySelectorAll('a, button, .interactive').forEach(el => {
                el.removeEventListener('mouseenter', add);
                el.removeEventListener('mouseleave', remove);
            });
        };
    }, []);
    return <div ref={cursorRef} className="custom-cursor hidden md:block" />;
};
