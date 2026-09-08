import { FileText, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeaderProps {
  onOpenCv: () => void;
  onOpenCode: () => void;
  activeTab: string;
  onNavigateHome: () => void;
}

export const Header = ({ onOpenCv, onOpenCode, onNavigateHome }: HeaderProps) => {
  return (
    <header
      id="main-header"
      className="fixed top-0 left-0 right-0 w-full z-40 bg-[#12090e]/90 backdrop-blur-md border-b border-[#3a1a2b]"
    >
      <div className="max-w-2xl mx-auto h-16 px-4 flex items-center justify-between">
        {/* Left: Avatar & Identity */}
        <button
          id="header-profile-btn"
          onClick={onNavigateHome}
          className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
        >
          <div className="w-8 h-8 rounded bg-gradient-to-br from-[#800020] to-[#420a16] border border-[#a31d45] flex items-center justify-center text-white font-mono text-xs font-semibold shadow-[0_0_12px_rgba(163,29,69,0.35)] group-hover:border-[#f47293] group-hover:shadow-[0_0_16px_rgba(244,114,147,0.45)] transition-all">
            {personalInfo.initials}
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white group-hover:text-[#f47293] transition-colors">
              {personalInfo.name}
            </span>
            <span className="text-[11px] text-[#c7adb8] font-mono">
              {personalInfo.title}
            </span>
          </div>
        </button>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button
            id="header-cv-btn"
            onClick={onOpenCv}
            className="h-8 px-3 rounded text-xs font-medium bg-[#180d14] border border-[#3a1a2b] hover:border-[#a31d45] hover:bg-[#25121e] hover:shadow-[0_0_12px_rgba(163,29,69,0.25)] text-[#f3e8ee] flex items-center gap-1.5 transition-all cursor-pointer"
            title="View Curriculum Vitae / Resume"
          >
            <FileText className="w-[14px] h-[14px] text-[#f47293]" />
            <span>CV</span>
          </button>

          <button
            id="header-code-btn"
            onClick={onOpenCode}
            className="w-8 h-8 rounded bg-[#180d14] border border-[#3a1a2b] hover:border-[#a31d45] hover:bg-[#25121e] hover:shadow-[0_0_12px_rgba(163,29,69,0.25)] flex items-center justify-center text-[#f3e8ee] transition-all cursor-pointer"
            title="Source & Repositories"
          >
            <Code2 className="w-[16px] h-[16px] text-[#f47293]" />
          </button>
        </div>
      </div>
    </header>
  );
};
