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
                    <div className="space-y-20">
                        {photographySections.map((section, sectionIndex) => {
                            if (!section) return null;
                            return (
                                <div key={sectionIndex}>
                                    <h3 className="text-3xl font-bold mb-8 text-white flex items-center gap-4">
                                        <span className="w-8 h-1 bg-purple-500 rounded-full"></span>
                                        {section.title}
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                        {section.images?.filter((img: any) => img && img.publicId && img.previewUrl).map((img: any, index: number) => (
                                            <ProjectCard
                                                key={`${section.title}-${index}`}
                                                id={img.publicId}
                                                index={index}
                                                mode={mode}
                                                title={img.title || `${section.title} ${index + 1}`}
                                                category={section.title}
                                                img={img.previewUrl}
                                                behanceUrl={img.downloadUrl} // Use downloadUrl as the link
                                            />
                                        ))}
                                    </div>
                                </div>
                            );
                        })}
                        {photographySections.length === 0 && (
                            <div className="text-center py-20 text-gray-500">
                                <p>Loading gallery...</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
