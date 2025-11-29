"use client";
import { Layers } from 'lucide-react';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { Project } from '@/data/portfolio';

interface ProjectsProps {
    mode: 'designer' | 'creator';
    projects: Project[];
    photographySections: { title: string; images: any[] }[];
}

export function Projects({ mode, projects, photographySections }: ProjectsProps) {
    return (
        <section id="work" className="py-32 px-6 md:px-20">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 ${mode === 'designer' ? 'bg-blue-50 text-blue-600' : 'bg-purple-900/20 text-purple-400'}`}>
                            Selected Work
                        </span>
                        <h2 className={`text-4xl md:text-6xl font-bold ${mode === 'designer' ? 'text-slate-900' : 'text-gray-100'}`}>
                            Featured Projects
                        </h2>
                    </div>
                    <div className="flex gap-4">
                        <button className={`p-4 rounded-full border transition-colors interactive ${mode === 'designer' ? 'border-slate-200 hover:bg-slate-100' : 'border-neutral-800 hover:bg-neutral-800 text-white'}`}>
                            <Layers size={24} />
                        </button>
                        <p className={`max-w-xs text-sm leading-relaxed ${mode === 'designer' ? 'text-slate-500' : 'text-gray-400'}`}>
                            A collection of work that defines my approach to digital experiences.
                        </p>
                    </div>
                </div>

                {mode === 'designer' ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                id={project.id}
                                index={index}
                                mode={mode}
                                title={project.title}
                                category={project.category}
                                img={project.images ? project.images.cover : project.img}
                                skills={'tools' in project ? project.tools : undefined}
                                behanceUrl={'behanceUrl' in project ? project.behanceUrl : undefined}
                            />
                        ))}
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {photographySections.map((section, sectionIndex) => {
                            if (!section || !section.images || section.images.length === 0) return null;
                            const firstImage = section.images[0];
                            return (
                                <a
                                    key={sectionIndex}
                                    href={`/gallery/${section.title}`}
                                    className="group relative overflow-hidden rounded-xl interactive w-full cursor-pointer bg-neutral-900 border border-neutral-800 hover:border-amber-500/50 transition-all duration-300"
                                    style={{ aspectRatio: '4/3' }}
                                >
                                    {/* Background Image */}
                                    <div className="absolute inset-0 overflow-hidden">
                                        <div
                                            className="w-full h-full bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-105"
                                            style={{ backgroundImage: `url(${firstImage.imageUrl || ''})` }}
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/20 group-hover:from-black/90 transition-all duration-300"></div>
                                    </div>

                                    {/* Content */}
                                    <div className="absolute inset-0 flex flex-col justify-end p-6">
                                        <h3 className="text-3xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-400 group-hover:to-yellow-500 transition-all duration-300">
                                            {section.title}
                                        </h3>
                                        <p className="text-gray-400 text-sm font-medium">
                                            {section.images.length} {section.images.length === 1 ? 'photo' : 'photos'}
                                        </p>
                                    </div>

                                    {/* Hover Indicator */}
                                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="bg-white/10 backdrop-blur-sm rounded-full p-2">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                </a>
                            );
                        })}
                        {photographySections.length === 0 && (
                            <div className="col-span-full text-center py-20 text-gray-500">
                                <p>Loading gallery...</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
