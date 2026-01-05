import { v2 as cloudinary } from 'cloudinary';

interface CloudinaryResource {
    public_id: string;
    secure_url: string;
    width: number;
    height: number;
}

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
});

export { cloudinary };

export const CLOUDINARY_BASE_URL = `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`;

// Gallery folder categories (sorted alphabetically for consistent order)
export const GALLERY_FOLDERS = ['Astro', 'Bikes', 'Cars', 'Drones', 'Lambo', 'moon', 'Mountains', 'Nature', 'skies', 'Sunsets'];

// Image URL builders with optimized quality (reduced by 20% from 100 to 80)
const buildImageUrl = (publicId: string, transforms: string) => 
    `${CLOUDINARY_BASE_URL}/${transforms}/${publicId}`;

// Get folder contents
export async function getFolderImages(folderName: string) {
    try {
        const searchPatterns = [
            `folder:portfolio_uploads/${folderName}`,
            `folder:portfolio_uploads/${folderName.toLowerCase()}`,
            `folder:portfolio_uploads/${folderName.charAt(0).toUpperCase() + folderName.slice(1).toLowerCase()}`,
            `folder:portfolio/${folderName}`,
            `folder:${folderName}`,
        ];

        let result = null;

        for (const pattern of searchPatterns) {
            try {
                result = await cloudinary.search
                    .expression(pattern)
                    .max_results(500)
                    .execute();

                if (result.resources.length > 0) break;
            } catch {
                continue;
            }
        }

        if (!result || result.resources.length === 0) return [];

        // Sort by public_id to maintain consistent order
        const sortedResources = result.resources.sort((a: CloudinaryResource, b: CloudinaryResource) => 
            a.public_id.localeCompare(b.public_id)
        );

        return sortedResources.map((resource: CloudinaryResource, index: number) => {
            const aspectRatio = resource.width / resource.height;
            const publicId = resource.public_id;

            return {
                id: index + 1,
                title: `${folderName.charAt(0).toUpperCase() + folderName.slice(1)} Photo ${index + 1}`,
                description: `A photograph from the ${folderName} collection`,
                // Optimized: reduced quality to 80%, using webp format, added blur placeholder
                imageUrl: buildImageUrl(publicId, 'w_800,c_fill,g_auto,q_80,f_webp'),
                thumbnailUrl: buildImageUrl(publicId, 'w_50,c_fill,g_auto,q_30,f_webp,e_blur:100'),
                previewUrl: buildImageUrl(publicId, 'w_1600,c_limit,g_auto,q_80,f_webp'),
                coverUrl: buildImageUrl(publicId, 'w_600,h_750,c_fill,g_auto,q_80,f_webp'),
                // Low quality placeholder for blur-up effect
                placeholderUrl: buildImageUrl(publicId, 'w_20,c_fill,g_auto,q_10,f_webp,e_blur:1000'),
                originalUrl: resource.secure_url,
                downloadUrl: buildImageUrl(publicId, 'fl_attachment,q_100'),
                publicId,
                width: resource.width,
                height: resource.height,
                aspectRatio,
                isLandscape: aspectRatio >= 1,
            };
        });
    } catch (error) {
        // Silently fail and return empty array
        return [];
    }
}

// Get gallery sections (images grouped by folder)
export async function getGallerySections() {
    try {
        const sections = [];

        for (const folder of GALLERY_FOLDERS) {
            const images = await getFolderImages(folder);
            if (images.length > 0) {
                sections.push({ title: folder, images });
            }
        }

        return sections;
    } catch (error) {
        // Silently fail and return empty array
        return [];
    }
}
