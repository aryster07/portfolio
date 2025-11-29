import { LucideIcon } from 'lucide-react';

interface SkillBadgeProps {
    icon: LucideIcon;
    label: string;
    mode: string;
}

export const SkillBadge = ({ icon: Icon, label, mode }: SkillBadgeProps) => (
    <div className={`interactive group flex flex-col items-center justify-center gap-3 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1
    ${mode === 'designer'
            ? 'bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-200'
            : 'bg-neutral-900/50 border border-neutral-800 hover:bg-neutral-800 hover:border-purple-500/50'
        }`}>
        <Icon size={24} className={`transition-colors duration-300 ${mode === 'designer' ? 'text-slate-700 group-hover:text-blue-600' : 'text-gray-400 group-hover:text-purple-400'}`} />
        <span className={`text-sm font-medium tracking-wide ${mode === 'designer' ? 'text-slate-900' : 'text-gray-200'}`}>{label}</span>
    </div>
);
