"use client";

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState, useRef } from 'react';
import { ArrowLeft, Download, X } from 'lucide-react';
import Image from 'next/image';

interface GalleryImage {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    originalUrl: string;
    publicId: string;
    downloadUrl: string;
    width: number;
    height: number;
}

export default function GalleryPage() {
    const params = useParams();
    const router = useRouter();
    const category = params.category as string;
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const lightboxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await fetch('/api/images');
                const sections = await response.json();
                const section = sections.find((s: any) => s.title === category);
                if (section) {
                    setImages(section.images);
                }
            } catch (error) {
                console.error('Error loading images:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, [category]);

    const openLightbox = (image: GalleryImage, index: number) => {
        setSelectedImage(image);
        setLightboxIndex(index);
    };

    const closeLightbox = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        const newIndex = (lightboxIndex + 1) % images.length;
        setLightboxIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    const prevImage = () => {
        const newIndex = (lightboxIndex - 1 + images.length) % images.length;
        setLightboxIndex(newIndex);
        setSelectedImage(images[newIndex]);
    };

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!selectedImage) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') nextImage();
            if (e.key === 'ArrowLeft') prevImage();
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage, lightboxIndex]);

    // Swipe gesture for lightbox
    useEffect(() => {
        const element = lightboxRef.current;
        if (!element || !selectedImage) return;

        let touchStartX = 0;
        let touchEndX = 0;
        let touchStartY = 0;
        let touchEndY = 0;

        const handleTouchStart = (e: TouchEvent) => {
            touchStartX = e.changedTouches[0].screenX;
            touchStartY = e.changedTouches[0].screenY;
        };

        const handleTouchEnd = (e: TouchEvent) => {
            touchEndX = e.changedTouches[0].screenX;
            touchEndY = e.changedTouches[0].screenY;
            handleSwipe();
        };

        const handleSwipe = () => {
            const swipeThreshold = 50;
            const horizontalSwipe = Math.abs(touchEndX - touchStartX);
            const verticalSwipe = Math.abs(touchEndY - touchStartY);

            // Horizontal swipe (next/prev image)
            if (horizontalSwipe > verticalSwipe && horizontalSwipe > swipeThreshold) {
                if (touchEndX < touchStartX) nextImage();
                if (touchEndX > touchStartX) prevImage();
            }
            // Vertical swipe down (close lightbox)
            else if (verticalSwipe > swipeThreshold && touchEndY > touchStartY) {
                closeLightbox();
            }
        };

        element.addEventListener('touchstart', handleTouchStart);
        element.addEventListener('touchend', handleTouchEnd);

        return () => {
            element.removeEventListener('touchstart', handleTouchStart);
            element.removeEventListener('touchend', handleTouchEnd);
        };
    }, [selectedImage, lightboxIndex]);

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center justify-between">
                    <a
                        href="/#creator"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span className="font-medium">Back to Portfolio</span>
                    </a>
                    <div className="text-sm text-gray-500">
                        {images.length} {images.length === 1 ? 'photo' : 'photos'}
                    </div>
                </div>
            </header>

            {/* Gallery Title */}
            <div className="max-w-[1400px] mx-auto px-6 py-12">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-yellow-600">
                    {category}
                </h1>
                <p className="text-gray-400 text-lg">A curated collection of {category.toLowerCase()} photography</p>
            </div>

            {/* Image Grid */}
            <div className="max-w-[1400px] mx-auto px-6 pb-20">
                {loading ? (
                    <div className="text-center py-20 text-gray-500">
                        <p>Loading gallery...</p>
                    </div>
                ) : images.length === 0 ? (
                    <div className="text-center py-20 text-gray-500">
                        <p>No images found in this gallery.</p>
                    </div>
                ) : (
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-3">
                        {images.map((image, index) => {
                            const isLandscape = image.width > image.height;

                            return (
                                <div
                                    key={image.id}
                                    className="group relative overflow-hidden rounded-md cursor-pointer bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 mb-2 md:mb-3 break-inside-avoid"
                                    onClick={() => openLightbox(image, index)}
                                >
                                    <Image
                                        src={image.imageUrl}
                                        alt={image.title}
                                        width={image.width}
                                        height={image.height}
                                        className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading={index < 6 ? "eager" : "lazy"}
                                        quality={75}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Download Icon */}
                                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-amber-500/90 backdrop-blur-sm rounded-full p-2">
                                            <Download size={16} className="text-white" />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>

            {/* Lightbox */}
            {selectedImage && (
                <div ref={lightboxRef} className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center">
                    {/* Close Button */}
                    <button
                        onClick={closeLightbox}
                        className="absolute top-6 right-6 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                        <X size={24} />
                    </button>

                    {/* Download Button */}
                    <a
                        href={selectedImage.downloadUrl}
                        download
                        className="absolute top-6 right-20 z-50 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Download size={24} />
                    </a>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevImage}
                        className="absolute left-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                        <ArrowLeft size={24} />
                    </button>
                    <button
                        onClick={nextImage}
                        className="absolute right-6 z-50 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    >
                        <ArrowLeft size={24} className="rotate-180" />
                    </button>

                    {/* Image */}
                    <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center">
                        <img
                            src={selectedImage.originalUrl}
                            alt={selectedImage.title}
                            className="max-w-full max-h-[90vh] object-contain"
                        />
                    </div>

                    {/* Image Info */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
                        <p className="text-white font-medium mb-1">{selectedImage.title}</p>
                        <p className="text-gray-400 text-sm">
                            {lightboxIndex + 1} / {images.length}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}
