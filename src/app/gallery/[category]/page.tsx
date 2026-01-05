"use client";

import { useParams } from 'next/navigation';
import { useEffect, useState, useRef, useCallback } from 'react';
import { ArrowLeft, Download } from 'lucide-react';

interface GalleryImage {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    thumbnailUrl?: string;
    previewUrl?: string;
    placeholderUrl?: string;
    originalUrl: string;
    publicId: string;
    downloadUrl: string;
    width: number;
    height: number;
}

interface GallerySection {
    title: string;
    images: GalleryImage[];
}

// Cache gallery data in memory - 1 hour
const galleryCache = new Map<string, { data: GallerySection[]; timestamp: number }>();
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

// Sequential Image Component - loads images one by one from top to bottom
function SequentialImage({ 
    src, 
    placeholder, 
    alt, 
    className, 
    index,
    loadedCount,
    onLoad
}: { 
    src: string; 
    placeholder?: string; 
    alt: string; 
    className?: string; 
    index: number;
    loadedCount: number;
    onLoad: () => void;
}) {
    const [loaded, setLoaded] = useState(false);
    const [shouldLoad, setShouldLoad] = useState(false);

    // Sequential loading: only start loading when previous images are done
    // Load first 2 images immediately, then load sequentially
    useEffect(() => {
        if (index < 2) {
            setShouldLoad(true);
        } else if (loadedCount >= index - 1) {
            // Start loading this image when the previous one is loaded
            setShouldLoad(true);
        }
    }, [index, loadedCount]);

    useEffect(() => {
        if (shouldLoad && !loaded) {
            const img = new Image();
            img.onload = () => {
                setLoaded(true);
                onLoad();
            };
            img.src = src;
        }
    }, [shouldLoad, src, loaded, onLoad]);

    return (
        <>
            {/* Placeholder - absolutely positioned so it doesn't affect layout */}
            {placeholder && !loaded && (
                <img
                    src={placeholder}
                    alt=""
                    className={`${className} absolute inset-0 blur-lg scale-105`}
                    aria-hidden="true"
                />
            )}
            {/* Loading skeleton if no placeholder */}
            {!placeholder && !loaded && (
                <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
            )}
            {/* Main image - absolutely positioned to prevent layout shift */}
            {shouldLoad && (
                <img
                    src={src}
                    alt={alt}
                    className={`${className} absolute inset-0 transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                    decoding="async"
                />
            )}
        </>
    );
}

export default function GalleryPage() {
    const params = useParams();
    const category = params.category as string;
    const [images, setImages] = useState<GalleryImage[]>([]);
    const [loading, setLoading] = useState(true);
    const [loadedCount, setLoadedCount] = useState(0);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                // Check cache first
                const cached = galleryCache.get('gallery-data');
                const now = Date.now();
                
                if (cached && (now - cached.timestamp) < CACHE_DURATION) {
                    const section = cached.data.find((s: GallerySection) => s.title === category);
                    if (section) {
                        setImages(section.images);
                    }
                    setLoading(false);
                    return;
                }
                
                // Fetch fresh data
                const response = await fetch('/api/images', {
                    next: { revalidate: 300 } // Revalidate every 5 minutes
                });
                const sections = await response.json();
                
                // Update cache
                galleryCache.set('gallery-data', { data: sections, timestamp: now });
                
                const section = sections.find((s: GallerySection) => s.title === category);
                if (section) {
                    setImages(section.images);
                }
            } catch (error) {
                // Silently handle error
            } finally {
                setLoading(false);
            }
        };
        fetchImages();
    }, [category]);

    // Reset loaded count when images change
    useEffect(() => {
        setLoadedCount(0);
    }, [images]);

    const handleImageLoad = useCallback(() => {
        setLoadedCount(prev => prev + 1);
    }, []);

    return (
        <div className="min-h-screen bg-[#050505] text-white">
            {/* Header */}
            <header className="sticky top-0 z-40 bg-[#050505]/80 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-[1400px] mx-auto px-6 py-6 flex items-center justify-between">
                    <a
                        href="/?mode=creator#work"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                    >
                        <ArrowLeft size={20} />
                        <span className="font-medium">Back to Gallery</span>
                    </a>
                    <div className="text-sm text-gray-500">
                        {images.length} {images.length === 1 ? 'photo' : 'photos'}
                    </div>
                </div>
            </header>

            {/* Gallery Title */}
            <div className="max-w-[1400px] mx-auto px-6 py-12">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 text-transparent bg-clip-text bg-linear-to-r from-amber-500 to-yellow-600">
                    {category}
                </h1>
                <p className="text-gray-400 text-lg">A curated collection of {category.toLowerCase()} photography</p>
            </div>

            {/* Masonry Grid Gallery */}
            <div className="max-w-[1400px] mx-auto px-6 pb-20">
                {loading ? (
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-3">
                        {[...Array(12)].map((_, i) => (
                            <div key={i} className="bg-neutral-800 rounded-md animate-pulse aspect-4/5 mb-2 md:mb-3 break-inside-avoid" />
                        ))}
                    </div>
                ) : images.length === 0 ? (
                    <div className="text-center py-20 text-gray-500">
                        <p>No images found in this gallery.</p>
                    </div>
                ) : (
                    <div className="columns-2 md:columns-3 lg:columns-4 gap-2 md:gap-3">
                        {images.map((image, index) => {
                            // Determine Instagram aspect ratio based on image dimensions
                            const aspectRatio = image.width / image.height;
                            // Landscape: 1.91:1, Portrait: 4:5, Square: 1:1
                            const getAspectClass = () => {
                                if (aspectRatio > 1.2) return 'aspect-[1.91/1]'; // Landscape
                                if (aspectRatio < 0.9) return 'aspect-[4/5]';    // Portrait
                                return 'aspect-square';                           // Square
                            };
                            
                            return (
                                <div
                                    key={image.id}
                                    className={`group relative overflow-hidden rounded-md bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 transition-all duration-300 mb-2 md:mb-3 break-inside-avoid ${getAspectClass()}`}
                                >
                                    <SequentialImage
                                        src={image.imageUrl}
                                        placeholder={image.placeholderUrl || image.thumbnailUrl}
                                        alt={image.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        index={index}
                                        loadedCount={loadedCount}
                                        onLoad={handleImageLoad}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                    {/* Download Icon */}
                                    <a
                                        href={image.downloadUrl}
                                        download
                                        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <div className="bg-amber-500/90 backdrop-blur-sm rounded-full p-2 hover:bg-amber-400 transition-colors">
                                            <Download size={16} className="text-white" />
                                        </div>
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
