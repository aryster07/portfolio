import { NextResponse } from 'next/server';
import { getGallerySections } from '@/lib/cloudinary';

export async function GET() {
    try {
        const sections = await getGallerySections();
        return NextResponse.json(sections);
    } catch (error) {
        console.error('Error fetching images:', error);
        return NextResponse.json({ error: 'Failed to fetch images' }, { status: 500 });
    }
}
