"use client";
import { Layers, Clock } from 'lucide-react';
import { ProjectCard } from '@/components/ui/ProjectCard';
import { Project } from '@/data/portfolio';

interface DesignerProjectsProps {
    projects: Project[];
}

export function DesignerProjects({ projects }: DesignerProjectsProps) {
    // Separate regular projects from coming soon projects
    const regularProjects = projects.filter(p => p.description !== 'Coming Soon');
    const comingSoonProjects = projects.filter(p => p.description === 'Coming Soon');

    return (
        <section id="work" className="py-32 px-6 md:px-20">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <div>
                        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4 bg-blue-50 text-blue-600">
                            Selected Work
                        </span>
                        <h2 className="text-4xl md:text-6xl font-bold text-slate-900">
                            Featured Projects
                        </h2>
                    </div>
                    <div className="flex gap-4">
                        <button className="p-4 rounded-full border transition-colors interactive border-slate-200 hover:bg-slate-100">
                            <Layers size={24} />
                        </button>
                        <p className="max-w-xs text-sm leading-relaxed text-slate-500">
                            A collection of work that defines my approach to digital experiences.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {regularProjects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            index={index}
                            mode="designer"
                            title={project.title}
                            category={project.category}
                            img={project.images ? project.images.cover : project.img}
                            skills={'tools' in project ? project.tools : undefined}
                            behanceUrl={'behanceUrl' in project ? project.behanceUrl : undefined}
                        />
                    ))}
                </div>

                {/* Coming Soon Section */}
                {comingSoonProjects.length > 0 && (
                    <div className="mt-24">
                        <div className="flex items-center gap-3 mb-10">
                            <Clock size={24} className="text-slate-400" />
                            <h3 className="text-2xl font-bold text-slate-400">Coming Soon</h3>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {comingSoonProjects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className="relative overflow-hidden rounded-xl bg-slate-100 aspect-video opacity-60 cursor-not-allowed"
                                >
                                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-200/80">
                                        <Clock size={32} className="text-slate-400 mb-2" />
                                        <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Coming Soon</span>
                                    </div>
                                    <div className="absolute bottom-0 left-0 p-4 w-full">
                                        <div className="flex flex-wrap gap-1 mb-2">
                                            {project.tools?.slice(0, 2).map((tool, i) => (
                                                <span key={i} className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-slate-300 text-slate-600">
                                                    {tool}
                                                </span>
                                            ))}
                                        </div>
                                        <h4 className="text-lg font-bold text-slate-700">{project.title}</h4>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
