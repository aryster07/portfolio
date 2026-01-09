"use client";

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Calendar, User, PenTool, ExternalLink, ChevronRight } from 'lucide-react';
import { getCaseStudyById } from '@/data/portfolio';

export default function CaseStudyPage() {
    const params = useParams();
    const { id } = params;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const project = getCaseStudyById(id as string);

    if (!project) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-neutral-50 text-slate-900">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
                    <Link href="/" className="text-blue-600 hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    // Special layout for Figma Plugins overview page
    if (id === 'figma-plugins') {
        return (
            <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900">
                {/* Navigation */}
                <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                        <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors group">
                            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                            <span className="font-medium">Back to Portfolio</span>
                        </Link>
                        <div className="font-bold text-xl tracking-tight">7FRAMES.</div>
                    </div>
                </nav>

                <main className="pt-32 pb-20 px-6">
                    <article className="max-w-5xl mx-auto">
                        {/* Header */}
                        <header className="mb-16 text-center">
                            <span className="inline-block px-4 py-1.5 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-widest mb-6">
                                Figma Plugins
                            </span>
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
                                My Figma Plugins
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                                Two powerful productivity plugins published on Figma Community
                            </p>
                        </header>

                        {/* Plugins Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                            
                            {/* CompMagnet Plugin */}
                            <a 
                                href="https://www.figma.com/community/plugin/1587789564837977428/compmagnet"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:border-purple-300 transition-all duration-300"
                            >
                                <div className="relative aspect-video bg-linear-to-br from-purple-50 to-blue-50 overflow-hidden">
                                    <Image
                                        src="/case-studies/figma-plugins/compmagnet.png"
                                        alt="CompMagnet Plugin"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                                        CompMagnet
                                    </h3>
                                    <p className="text-slate-600 mb-4">
                                        Instantly organize components and variants in alphabetical 5-column grids. Auto-detects and arranges your design system.
                                    </p>
                                    <div className="flex items-center gap-2 text-purple-600 font-medium">
                                        View Plugin <ExternalLink size={16} />
                                    </div>
                                </div>
                            </a>

                            {/* Font Manager Plugin */}
                            <div className="group bg-white rounded-2xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:border-purple-300 transition-all duration-300">
                                <div className="relative aspect-video bg-linear-to-br from-blue-50 to-purple-50 overflow-hidden">
                                    <Image
                                        src="/case-studies/figma-plugins/font-manager.png"
                                        alt="Font Manager Plugin"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-600 transition-colors">
                                        Font Manager
                                    </h3>
                                    <p className="text-slate-600 mb-4">
                                        Find and fix missing fonts instantly. Scans your entire design file and helps restore or replace unavailable fonts.
                                    </p>
                                    <div className="flex items-center gap-2 text-slate-400 font-medium">
                                        Coming to Community Soon
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Overview Section */}
                        <section className="mb-16 bg-linear-to-br from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12 border border-purple-100">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <span className="w-8 h-1 bg-purple-600 rounded-full"></span>
                                About These Plugins
                            </h2>
                            <p className="text-lg text-slate-700 leading-relaxed mb-6">
                                {project.description}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="bg-white rounded-xl p-6 border border-purple-100">
                                    <div className="text-3xl font-bold text-purple-600 mb-2">2</div>
                                    <div className="font-bold mb-1">Published Plugins</div>
                                    <div className="text-sm text-slate-600">Live on Figma Community</div>
                                </div>
                                <div className="bg-white rounded-xl p-6 border border-purple-100">
                                    <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
                                    <div className="font-bold mb-1">Custom Built</div>
                                    <div className="text-sm text-slate-600">From scratch with TypeScript</div>
                                </div>
                                <div className="bg-white rounded-xl p-6 border border-purple-100">
                                    <div className="text-3xl font-bold text-purple-600 mb-2">⚡</div>
                                    <div className="font-bold mb-1">Instant Performance</div>
                                    <div className="text-sm text-slate-600">Optimized for large files</div>
                                </div>
                            </div>
                        </section>

                        {/* Technical Details */}
                        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                    <span className="w-6 h-1 bg-blue-600 rounded-full"></span>
                                    Tools & Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tools.map((tool, i) => (
                                        <span key={i} className="px-4 py-2 bg-slate-100 rounded-lg text-sm font-medium text-slate-700">
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-4 flex items-center gap-3">
                                    <span className="w-6 h-1 bg-green-600 rounded-full"></span>
                                    Key Features
                                </h3>
                                <ul className="space-y-2 text-slate-700">
                                    <li className="flex items-start gap-2">
                                        <ChevronRight size={20} className="text-green-600 mt-0.5 shrink-0" />
                                        <span>Auto-detection and organization</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight size={20} className="text-green-600 mt-0.5 shrink-0" />
                                        <span>Font scanning and fixing</span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <ChevronRight size={20} className="text-green-600 mt-0.5 shrink-0" />
                                        <span>Instant performance optimization</span>
                                    </li>
                                </ul>
                            </div>
                        </section>

                    </article>
                </main>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#FAFAFA] text-slate-900 font-sans selection:bg-blue-200 selection:text-blue-900">

            {/* Navigation */}
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors group">
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-medium">Back to Portfolio</span>
                    </Link>
                    <div className="font-bold text-xl tracking-tight">7FRAMES.</div>
                </div>
            </nav>

            <main className="pt-32 pb-20 px-6">
                <article className="max-w-5xl mx-auto">

                    {/* Header */}
                    <header className="mb-16 text-center">
                        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest mb-6">
                            {project.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-slate-900">
                            {project.title}
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed">
                            {project.subtitle}
                        </p>
                    </header>

                    {/* Hero Image */}
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-16 bg-slate-100">
                        <Image
                            src={project.images.hero}
                            alt={project.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Project Info Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 border-y border-slate-200 py-12">
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-slate-400 mb-1">
                                <User size={16} /> <span className="text-xs font-bold uppercase tracking-wider">Role</span>
                            </div>
                            <p className="font-medium text-lg">{project.role}</p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-slate-400 mb-1">
                                <Calendar size={16} /> <span className="text-xs font-bold uppercase tracking-wider">Timeline</span>
                            </div>
                            <p className="font-medium text-lg">{project.timeline}</p>
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2 text-slate-400 mb-1">
                                <PenTool size={16} /> <span className="text-xs font-bold uppercase tracking-wider">Tools</span>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.tools.map((tool, i) => (
                                    <span key={i} className="px-2 py-1 bg-slate-100 rounded text-sm text-slate-600">{tool}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                        {/* Main Content */}
                        <div className="lg:col-span-8 space-y-16">

                            {/* Overview */}
                            <section>
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                                    Overview
                                </h2>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {project.description}
                                </p>
                            </section>

                            {/* Challenges */}
                            <section>
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-red-500 rounded-full"></span>
                                    The Challenge
                                </h2>
                                <ul className="space-y-4">
                                    {project.challenges.map((challenge, i) => (
                                        <li key={i} className="flex items-start gap-4 bg-red-50/50 p-6 rounded-xl border border-red-100">
                                            <span className="shrink-0 w-6 h-6 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold text-sm mt-0.5">{i + 1}</span>
                                            <p className="text-slate-700">{challenge}</p>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Solutions */}
                            <section>
                                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-8 h-1 bg-green-500 rounded-full"></span>
                                    The Solution
                                </h2>
                                <ul className="space-y-4">
                                    {project.solutions.map((solution, i) => (
                                        <li key={i} className="flex items-start gap-4 bg-green-50/50 p-6 rounded-xl border border-green-100">
                                            <span className="shrink-0 w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center font-bold text-sm mt-0.5">{i + 1}</span>
                                            <p className="text-slate-700">{solution}</p>
                                        </li>
                                    ))}
                                </ul>
                            </section>

                            {/* Gallery Sections */}
                            {project.images.wireframes && project.images.wireframes.length > 0 && (
                                <section>
                                    <h2 className="text-2xl font-bold mb-8">Wireframes & Process</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {project.images.wireframes.map((img, i) => (
                                            <div key={i} className="relative aspect-4/3 bg-slate-100 rounded-xl overflow-hidden border border-slate-200">
                                                <Image src={img} alt={`Wireframe ${i + 1}`} fill className="object-cover hover:scale-105 transition-transform duration-500" />
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                            {project.images.finalScreens && project.images.finalScreens.length > 0 && (
                                <section>
                                    <h2 className="text-2xl font-bold mb-8">Final Design</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        {project.images.finalScreens.map((img, i) => (
                                            <div key={i} className="relative w-full bg-slate-100 rounded-xl overflow-hidden border border-slate-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                                {/* Use a simpler approach for height to avoid layout shifts or complex aspect ratio calcs if dimensions unknown */}
                                                <div className="relative w-full h-auto">
                                                    <Image
                                                        src={img}
                                                        alt={`Final Screen ${i + 1}`}
                                                        width={1200}
                                                        height={800}
                                                        className="w-full h-auto"
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>
                            )}

                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-4 space-y-8">

                            {/* Stats Card */}
                            <div className="bg-slate-900 text-white p-8 rounded-2xl sticky top-24">
                                <h3 className="text-xl font-bold mb-8 border-b border-slate-700 pb-4">Project Impact</h3>
                                <div className="space-y-8">
                                    {project.stats.map((stat, i) => (
                                        <div key={i}>
                                            <div className="text-3xl font-bold text-blue-400 mb-1">{stat.metric}</div>
                                            <div className="font-bold text-lg mb-1">{stat.label}</div>
                                            <div className="text-slate-400 text-sm leading-relaxed">{stat.description}</div>
                                        </div>
                                    ))}
                                </div>

                                {project.behanceUrl && (
                                    <a
                                        href={project.behanceUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-10 flex items-center justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold transition-colors"
                                    >
                                        View on Behance <ExternalLink size={18} />
                                    </a>
                                )}
                            </div>

                        </div>

                    </div>

                    {/* Next Project */}
                    <div className="mt-32 pt-16 border-t border-slate-200">
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold text-slate-400">Next Project</h2>
                            <Link href="/" className="flex items-center gap-2 font-bold text-blue-600 hover:gap-4 transition-all">
                                View All Work <ArrowRight size={20} />
                            </Link>
                        </div>
                    </div>

                </article>
            </main>
        </div>
    );
}
