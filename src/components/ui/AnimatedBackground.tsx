"use client";

import { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
    mode: 'designer' | 'creator';
}

export default function AnimatedBackground({ mode }: AnimatedBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const orbs: Array<{
            x: number;
            y: number;
            vx: number;
            vy: number;
            radius: number;
            color1: string;
            color2: string;
        }> = [];

        // Subtle gradient orbs based on mode
        const orbColors = mode === 'designer'
            ? [
                { c1: 'rgba(59, 130, 246, 0.08)', c2: 'rgba(147, 197, 253, 0.04)' },
                { c1: 'rgba(251, 191, 36, 0.06)', c2: 'rgba(253, 224, 71, 0.03)' }
            ]
            : [
                { c1: 'rgba(251, 191, 36, 0.1)', c2: 'rgba(253, 224, 71, 0.05)' },
                { c1: 'rgba(168, 85, 247, 0.08)', c2: 'rgba(192, 132, 252, 0.04)' }
            ];

        // Create fewer, larger orbs for subtle effect
        for (let i = 0; i < 5; i++) {
            const colorSet = orbColors[Math.floor(Math.random() * orbColors.length)];
            orbs.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                radius: Math.random() * 150 + 100,
                color1: colorSet.c1,
                color2: colorSet.c2
            });
        }

        let animationId: number;

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            orbs.forEach((orb) => {
                orb.x += orb.vx;
                orb.y += orb.vy;

                if (orb.x < -orb.radius || orb.x > canvas.width + orb.radius) orb.vx *= -1;
                if (orb.y < -orb.radius || orb.y > canvas.height + orb.radius) orb.vy *= -1;

                // Create radial gradient
                const gradient = ctx.createRadialGradient(
                    orb.x, orb.y, 0,
                    orb.x, orb.y, orb.radius
                );
                gradient.addColorStop(0, orb.color1);
                gradient.addColorStop(1, orb.color2);

                ctx.beginPath();
                ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            });

            animationId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationId);
            window.removeEventListener('resize', handleResize);
        };
    }, [mode]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 pointer-events-none"
            style={{ opacity: 1 }}
        />
    );
}
