"use client";
import { PenTool, Users, Palette, Target, Code } from 'lucide-react';
import { SkillBadge } from '@/components/ui/SkillBadge';

interface SkillsProps {
    mode: 'designer' | 'creator';
}

export function Skills({ mode }: SkillsProps) {
    return (
        <section className={`py-24 px-6 border-t ${mode === 'designer' ? 'bg-white border-slate-200' : 'bg-neutral-950 border-neutral-800'}`}>
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {mode === 'designer' ? (
                        <>
                            <SkillBadge mode={mode} icon={PenTool} label="UI Design" />
                            <SkillBadge mode={mode} icon={Users} label="UX Research" />
                            <SkillBadge mode={mode} icon={Palette} label="Figma" />
                            <SkillBadge mode={mode} icon={Target} label="User Testing" />
                            <SkillBadge mode={mode} icon={Code} label="Design Systems" />
                        </>
                    ) : (
                        <></>
                    )}
                </div>
            </div>
        </section>
    );
}
