import { 
  PenTool, 
  Terminal, 
  CheckCircle2, 
  Code2, 
  ArrowRight, 
  Send, 
  Share2, 
  ExternalLink 
} from 'lucide-react';
import { personalInfo, projectsData, educationData, skillsData, competitiveProgramming, contactLinks } from '../../data/portfolioData';

interface HomeScreenProps {
  onOpenWriteHub: () => void;
  onOpenGraphicsEditor: () => void;
  onNavigateTab: (tab: 'home' | 'projects' | 'skills' | 'education' | 'connect') => void;
}

export const HomeScreen = ({ onOpenWriteHub, onOpenGraphicsEditor, onNavigateTab }: HomeScreenProps) => {
  return (
    <div id="home-screen" className="flex flex-col relative w-full space-y-6">
      {/* ==================== HERO SECTION ==================== */}
      <section
        id="hero-section"
        className="relative w-full rounded-lg bg-[#180d14] border border-[#3a1a2b] p-5 transition-all shadow-lg shadow-black/40"
      >
        <div className="flex flex-col space-y-4">
          {/* Status indicator */}
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-[#24111d] border border-[#3a1a2b] text-[11px] font-mono text-[#c7adb8]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>{personalInfo.currentSemester}</span>
            </div>
            <span className="font-mono text-[11px] text-[#f47293]">{personalInfo.edition}</span>
          </div>

          {/* Name & Headline */}
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-white">
              {personalInfo.name}
            </h1>
            <p className="text-sm font-medium text-[#c7adb8] mt-1.5 leading-snug">
              {personalInfo.headline}
            </p>
          </div>

          {/* Bio Callout Box */}
          <div className="p-3.5 rounded bg-[#24111d] border border-[#3a1a2b]">
            <p className="text-xs text-[#f3e8ee] leading-relaxed">
              CS student interested in systems programming, embedded devices, and product building, currently planning a project called{' '}
              <button
                onClick={onOpenWriteHub}
                className="text-[#f47293] font-medium underline underline-offset-4 decoration-[#3a1a2b] hover:decoration-[#f47293] transition-colors cursor-pointer"
              >
                WriteHub
              </button>
              .
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-2 gap-2.5 pt-1">
            <div
              onClick={() => onNavigateTab('skills')}
              className="p-3 rounded bg-[#24111d] border border-[#3a1a2b] hover:border-[#a31d45] hover:shadow-[0_0_16px_rgba(163,29,69,0.2)] transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div className="text-[11px] font-mono text-[#c7adb8]">Focus Area</div>
              <div className="text-sm font-semibold text-white group-hover:text-[#f47293] transition-colors mt-1">
                {personalInfo.focusArea}
              </div>
            </div>

            <div
              onClick={() => onNavigateTab('education')}
              className="p-3 rounded bg-[#24111d] border border-[#3a1a2b] hover:border-[#a31d45] hover:shadow-[0_0_16px_rgba(163,29,69,0.2)] transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div className="text-[11px] font-mono text-[#c7adb8]">Academics</div>
              <div className="text-sm font-semibold text-white group-hover:text-emerald-400 transition-colors mt-1">
                {personalInfo.cgpa}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== PROJECTS SECTION ==================== */}
      <section id="projects-section" className="flex flex-col w-full space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#c7adb8] font-mono">
            Featured &amp; Planned Work
          </h2>
          <button
            onClick={() => onNavigateTab('projects')}
            className="text-[11px] font-mono text-[#f47293] hover:text-white transition-colors cursor-pointer"
          >
            02 Projects →
          </button>
        </div>

        {/* Project Card 1: WriteHub */}
        <div
          id="project-card-writehub"
          className="group relative rounded-xl bg-[#180d14] border border-[#3a1a2b] p-4 space-y-3 hover:border-[#c02652] hover:shadow-[0_0_24px_rgba(192,38,82,0.22)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
        >
          {/* Ambient subtle glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#c02652]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />

          <div className="flex items-start justify-between gap-2 relative z-10">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#c7adb8] font-medium">
                {projectsData[0].category}
              </span>
              <h3 className="text-base font-semibold text-white mt-0.5 group-hover:text-[#f47293] transition-colors">
                {projectsData[0].title}
              </h3>
            </div>
            <button
              onClick={onOpenWriteHub}
              className="px-2 py-0.5 rounded bg-[#24111d] border border-[#3a1a2b] text-[11px] font-mono text-[#f47293] hover:text-white hover:border-[#a31d45] transition-colors cursor-pointer"
            >
              {projectsData[0].typeBadge}
            </button>
          </div>

          <p className="text-xs font-medium text-[#c7adb8] relative z-10">
            {projectsData[0].subtitle}
          </p>

          <p className="text-xs text-[#f3e8ee] leading-relaxed relative z-10">
            {projectsData[0].description}
          </p>

          {/* Feature Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1 relative z-10">
            {projectsData[0].tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded bg-[#21101a] text-[11px] font-mono text-[#c7adb8] border border-[#3a1a2b] group-hover:border-[#4d2239] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action to view blueprint */}
          <div className="pt-1 relative z-10">
            <button
              onClick={onOpenWriteHub}
              className="w-full h-9 rounded bg-[#24111d] hover:bg-[#341728] border border-[#3a1a2b] hover:border-[#c02652] text-white text-xs font-medium flex items-center justify-center gap-2 transition-all hover:text-[#f47293] hover:shadow-[0_0_12px_rgba(192,38,82,0.2)] cursor-pointer"
            >
              <span>Explore Architecture Blueprint →</span>
            </button>
          </div>
        </div>

        {/* Project Card 2: 2D Graphics Editor */}
        <div
          id="project-card-graphics-editor"
          className="group relative rounded-xl bg-[#180d14] border border-[#3a1a2b] p-4 space-y-3 hover:border-[#c02652] hover:shadow-[0_0_24px_rgba(192,38,82,0.22)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
        >
          {/* Ambient subtle glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#c02652]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />

          <div className="flex items-start justify-between gap-2 relative z-10">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#c7adb8] font-medium">
                {projectsData[1].category}
              </span>
              <h3 className="text-base font-semibold text-white mt-0.5 group-hover:text-[#f47293] transition-colors">
                {projectsData[1].title}
              </h3>
            </div>
            <button
              onClick={onOpenGraphicsEditor}
              className="p-1 rounded bg-[#24111d] text-[#f47293] hover:text-white border border-[#3a1a2b] hover:border-[#c02652] flex items-center justify-center transition-all cursor-pointer hover:shadow-[0_0_10px_rgba(192,38,82,0.2)]"
              title="Launch Interactive Canvas"
            >
              <PenTool className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs font-medium text-[#c7adb8] relative z-10">
            {projectsData[1].subtitle}
          </p>

          <p className="text-xs text-[#f3e8ee] leading-relaxed relative z-10">
            {projectsData[1].description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1 relative z-10">
            {projectsData[1].tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 rounded bg-[#21101a] text-[11px] font-mono text-[#c7adb8] border border-[#3a1a2b] group-hover:border-[#4d2239] transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="pt-1 grid grid-cols-2 gap-2 relative z-10">
            <button
              onClick={onOpenGraphicsEditor}
              className="h-9 rounded bg-[#24111d] hover:bg-[#341728] border border-[#3a1a2b] hover:border-[#c02652] text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-all hover:text-[#f47293] hover:shadow-[0_0_12px_rgba(192,38,82,0.2)] cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5 text-[#f47293]" />
              <span>Try Live Sandbox</span>
            </button>

            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9 rounded bg-[#24111d] hover:bg-[#341728] border border-[#3a1a2b] hover:border-[#c02652] text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-all hover:text-[#f47293] hover:shadow-[0_0_12px_rgba(192,38,82,0.2)] cursor-pointer"
            >
              <Terminal className="w-3.5 h-3.5 text-[#c7adb8]" />
              <span>View on GitHub →</span>
            </a>
          </div>
        </div>
      </section>

      {/* ==================== EDUCATION SECTION ==================== */}
      <section id="academic-journey-section" className="flex flex-col w-full space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#c7adb8] font-mono">
            Academic Journey
          </h2>
          <button
            onClick={() => onNavigateTab('education')}
            className="text-[11px] font-mono text-[#f47293] hover:text-white transition-colors cursor-pointer"
          >
            Full Record →
          </button>
        </div>

        <div
          onClick={() => onNavigateTab('education')}
          className="rounded-lg bg-[#180d14] border border-[#3a1a2b] p-4 space-y-3 hover:border-[#a31d45] hover:shadow-[0_0_18px_rgba(163,29,69,0.18)] transition-all cursor-pointer group"
        >
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="text-sm font-semibold text-white group-hover:text-[#f47293] transition-colors">
                {educationData.degree}
              </h3>
              <div className="text-xs text-[#c7adb8] mt-0.5 flex items-center gap-1.5">
                <span>{educationData.institution}</span>
                <span>•</span>
                <span className="font-mono">{educationData.semester}</span>
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <div className="text-base font-semibold font-mono text-white leading-tight">
                {educationData.cgpa}
              </div>
              <div className="text-[10px] font-mono text-[#c7adb8]">
                CGPA / {educationData.scale}
              </div>
            </div>
          </div>

          <div className="p-2.5 rounded bg-[#24111d] border border-[#3a1a2b] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span className="text-xs text-[#f3e8ee]">{educationData.standing}</span>
            </div>
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#f47293]">
              {educationData.track}
            </span>
          </div>
        </div>
      </section>

      {/* ==================== SKILLS SECTION ==================== */}
      <section id="technical-repertoire-section" className="flex flex-col w-full space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-[#c7adb8] font-mono">
            Technical Repertoire
          </h2>
          <button
            onClick={() => onNavigateTab('skills')}
            className="text-[11px] font-mono text-[#f47293] hover:text-white transition-colors cursor-pointer"
          >
            Explore Skills →
          </button>
        </div>

        <div className="space-y-2.5">
          {skillsData.map((category) => (
            <div
              key={category.id}
              onClick={() => onNavigateTab('skills')}
              className="rounded-lg bg-[#180d14] border border-[#3a1a2b] p-3.5 space-y-2 hover:border-[#a31d45] hover:shadow-[0_0_16px_rgba(163,29,69,0.18)] transition-all cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-white">
                  {category.title}
                </h3>
                <span className="font-mono text-[10px] text-[#f47293]">
                  {category.itemCount}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-2 py-1 rounded bg-[#24111d] border border-[#3a1a2b] text-xs font-mono text-[#f3e8ee] hover:border-[#c02652] hover:text-[#f47293] transition-colors"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==================== CODING PROFILES SECTION ==================== */}
      <section id="problem-solving-section" className="flex flex-col w-full space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#c7adb8] font-mono">
          Competitive Programming &amp; Problem Solving
        </h2>

        <div className="rounded-lg bg-[#180d14] border border-[#3a1a2b] p-4 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded bg-[#24111d] border border-[#3a1a2b] flex items-center justify-center text-white font-mono font-bold text-xs shadow-[0_0_10px_rgba(163,29,69,0.2)]">
                {competitiveProgramming.badge}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">
                  {competitiveProgramming.platform}
                </h3>
                <span className="text-[11px] font-mono text-[#c7adb8]">
                  {competitiveProgramming.subtitle}
                </span>
              </div>
            </div>

            <Code2 className="w-4 h-4 text-[#f47293]" />
          </div>

          <p className="text-xs text-[#c7adb8] leading-relaxed">
            {competitiveProgramming.description}
          </p>

          <a
            href={competitiveProgramming.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full h-9 rounded bg-[#24111d] hover:bg-[#341728] border border-[#3a1a2b] hover:border-[#c02652] text-white text-xs font-medium flex items-center justify-center gap-2 transition-all hover:text-[#f47293] hover:shadow-[0_0_12px_rgba(192,38,82,0.2)] cursor-pointer"
          >
            <Terminal className="w-4 h-4 text-[#c7adb8]" />
            <span>LeetCode Profile →</span>
          </a>
        </div>
      </section>

      {/* ==================== CONTACT & CONNECT SECTION ==================== */}
      <section id="connect-section" className="flex flex-col w-full space-y-3">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-[#c7adb8] font-mono">
          Let's Connect
        </h2>

        <div className="rounded-lg bg-[#180d14] border border-[#3a1a2b] p-2 space-y-1.5">
          {/* GitHub */}
          <a
            href={contactLinks[0].href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded bg-[#24111d]/60 hover:bg-[#24111d] border border-transparent hover:border-[#3a1a2b] transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#341728] border border-[#3a1a2b] flex items-center justify-center text-white">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#c7adb8]">
                  {contactLinks[0].label}
                </div>
                <div className="text-xs font-semibold text-white group-hover:text-[#f47293] transition-colors">
                  {contactLinks[0].sublabel}
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#c7adb8] group-hover:text-white transition-colors" />
          </a>

          {/* LinkedIn */}
          <a
            href={contactLinks[1].href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 rounded bg-[#24111d]/60 hover:bg-[#24111d] border border-transparent hover:border-[#3a1a2b] transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#341728] border border-[#3a1a2b] flex items-center justify-center text-white">
                <Share2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#c7adb8]">
                  {contactLinks[1].label}
                </div>
                <div className="text-xs font-semibold text-white group-hover:text-[#f47293] transition-colors">
                  {contactLinks[1].sublabel}
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[#c7adb8] group-hover:text-white transition-colors" />
          </a>

          {/* Email */}
          <a
            href={contactLinks[2].href}
            className="flex items-center justify-between p-3 rounded bg-[#24111d]/60 hover:bg-[#24111d] border border-transparent hover:border-[#3a1a2b] transition-all group cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-[#341728] border border-[#3a1a2b] flex items-center justify-center text-white">
                <Send className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-mono text-[#c7adb8]">
                  {contactLinks[2].label}
                </div>
                <div className="text-xs font-semibold text-white group-hover:text-[#f47293] transition-colors">
                  {contactLinks[2].sublabel}
                </div>
              </div>
            </div>
            <Send className="w-4 h-4 text-[#c7adb8] group-hover:text-white transition-colors" />
          </a>
        </div>

        {/* Minimalist Footer Note */}
        <div className="w-full flex flex-col items-center justify-center pt-4 pb-2 text-center">
          <p className="font-mono text-[11px] text-[#c7adb8]">
            Engineered with precision • REVA Bengaluru
          </p>
        </div>
      </section>
    </div>
  );
};
