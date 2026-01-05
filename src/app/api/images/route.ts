import { NextResponse } from 'next/server';
import { getFolderImages, GALLERY_FOLDERS, CLOUDINARY_BASE_URL } from '@/lib/cloudinary';

interface GallerySection {
    title: string;
    images: Array<{
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
    }>;
}

// Cache the gallery data for 1 hour
let cachedData: GallerySection[] | null = null;
let cacheTime: number = 0;
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

export async function GET() {
    try {
        const now = Date.now();
        
        // Return cached data if still valid
        if (cachedData && (now - cacheTime) < CACHE_DURATION) {
            return NextResponse.json(cachedData, {
                headers: {
                    'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
                    'CDN-Cache-Control': 'public, max-age=3600',
                },
            });
        }
        
        // Fetch ALL folders in PARALLEL for maximum speed
        const folderPromises = GALLERY_FOLDERS.map(folder => getFolderImages(folder));
        const folderResults = await Promise.all(folderPromises);
        
        // Build sections from parallel results
        const sections = GALLERY_FOLDERS
            .map((folder, index) => ({
                title: folder,
                images: folderResults[index]
            }))
            .filter(section => section.images.length > 0);
        
        cachedData = sections;
        cacheTime = now;
        
        return NextResponse.json(sections, {
            headers: {
                'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400',
                'CDN-Cache-Control': 'public, max-age=3600',
            },
        });
    } catch (error) {
        // Return empty array on error instead of exposing error details
        // Return cached data even if expired on error
        if (cachedData) {
            return NextResponse.json(cachedData, {
                headers: {
                    'Cache-Control': 'public, max-age=300',
                },
            });
        }
        return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
    }
}
