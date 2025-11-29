import Link from 'next/link';

interface ProjectCardProps {
    id: string;
    title: string;
    category: string;
    img: string;
    mode: string;
    index: number;
    skills?: string[];
    behanceUrl?: string;
}

export const ProjectCard = ({ id, title, category, img, mode, index, skills, behanceUrl }: ProjectCardProps) => {
    const href = mode === 'designer'
        ? (behanceUrl || `/case-studies/${id}`)
        : (behanceUrl || '#');

    const isExternal = !!behanceUrl;

    const CardContent = () => (
        <div
            className={`group relative overflow-hidden rounded-xl interactive w-full cursor-none
      ${mode === 'designer' ? 'bg-gray-100 aspect-video' : 'bg-neutral-900 border border-neutral-800 aspect-video'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="absolute inset-0 overflow-hidden">
                <div
                    className="w-full h-full bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-105"
                    style={{ backgroundImage: `url(${img || ''})` }}
                />
                <div className={`absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-300 ${mode === 'designer' ? 'bg-black' : 'bg-black'}`}></div>
            </div>

            <div className="absolute bottom-0 left-0 p-6 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex flex-wrap gap-2 mb-3">
                    {skills ? (
                        skills.slice(0, 3).map((skill, i) => (
                            <span key={i} className={`text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-md ${mode === 'designer' ? 'bg-white/20 text-white backdrop-blur-sm' : 'bg-purple-500/20 text-purple-200 backdrop-blur-sm'}`}>
                                {skill}
                            </span>
                        ))
                    ) : (
                        <span className={`text-[10px] font-bold uppercase tracking-widest mb-2 block ${mode === 'designer' ? 'text-blue-300' : 'text-purple-400'}`}>
                            {category}
                        </span>
                    )}
                </div>
                <h3 className={`text-2xl font-bold mb-2 leading-tight text-white`}>
                    {title}
                </h3>
            </div>
        </div>
    );

    if (isExternal) {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" className="block w-full" download={mode === 'creator' ? "download" : undefined}>
                <CardContent />
            </a>
        );
    }

    return (
        <Link href={href} className="block w-full">
            <CardContent />
        </Link>
    );
};
