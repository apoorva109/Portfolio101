import { X, ExternalLink, Github, Terminal, Cpu } from 'lucide-react';
import { personalInfo } from '../../data/portfolioData';

interface CodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenGraphicsEditor: () => void;
  onOpenWriteHub: () => void;
}

export const CodeModal = ({ isOpen, onClose, onOpenGraphicsEditor, onOpenWriteHub }: CodeModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      id="code-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="code-modal-content"
        className="relative w-full max-w-lg bg-[#180d14] border border-[#3a1a2b] rounded-xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#12090e] border-b border-[#3a1a2b]">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-[#f47293]" />
            <span className="text-xs font-mono font-medium text-white">Code &amp; Repositories</span>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 rounded bg-[#24111d] border border-[#3a1a2b] hover:border-[#c02652] text-[#c7adb8] hover:text-[#f47293] flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close Code Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Repositories list */}
        <div className="p-5 space-y-3 bg-[#12090e]">
          <p className="text-xs text-[#c7adb8] leading-relaxed">
            Explore public repositories, systems programming implementations, and interactive demos.
          </p>

          <div className="space-y-2.5">
            {/* GitHub Profile */}
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-lg bg-[#180d14] hover:bg-[#24111d] border border-[#3a1a2b] hover:border-[#c02652] flex items-center justify-between transition-all group hover:shadow-[0_0_12px_rgba(192,38,82,0.2)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#24111d] border border-[#3a1a2b] flex items-center justify-center text-[#f47293]">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white group-hover:text-[#f47293] transition-colors">
                    GitHub / {personalInfo.githubUser}
                  </div>
                  <div className="text-[11px] font-mono text-[#c7adb8]">Main open-source workspace</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#c7adb8] group-hover:text-white transition-colors" />
            </a>

            {/* 2D Graphics Editor in C */}
            <div className="p-3.5 rounded-lg bg-[#180d14] border border-[#3a1a2b] space-y-2 hover:border-[#c02652] transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-[#f47293]" />
                  <span className="text-xs font-semibold text-white">2D Graphics Editor in C</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#24111d] border border-[#3a1a2b] text-[#f47293]">
                  C99
                </span>
              </div>
              <p className="text-[11px] text-[#c7adb8]">
                Framebuffer manipulation, integer Bresenham lines, and Midpoint circle algorithms.
              </p>
              <div className="flex items-center gap-2 pt-1">
                <button
                  onClick={() => {
                    onClose();
                    onOpenGraphicsEditor();
                  }}
                  className="px-3 py-1.5 rounded bg-[#24111d] hover:bg-[#341728] border border-[#3a1a2b] hover:border-[#c02652] text-xs font-mono text-white transition-all cursor-pointer hover:text-[#f47293]"
                >
                  Interactive Canvas Demo
                </button>
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded bg-[#24111d] hover:bg-[#341728] border border-[#3a1a2b] text-xs font-mono text-[#f47293] flex items-center gap-1 transition-colors"
                >
                  <span>Repository</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* WriteHub Planned */}
            <div className="p-3.5 rounded-lg bg-[#180d14] border border-[#3a1a2b] space-y-2 hover:border-[#c02652] transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-semibold text-white">WriteHub (Peer Help Platform)</span>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#24111d] border border-[#3a1a2b] text-emerald-400">
                  Blueprint
                </span>
              </div>
              <p className="text-[11px] text-[#c7adb8]">
                Intelligent matching engine, real-time WebSockets, and verification ledger architecture.
              </p>
              <button
                onClick={() => {
                  onClose();
                  onOpenWriteHub();
                }}
                className="px-3 py-1.5 rounded bg-[#24111d] hover:bg-[#341728] border border-[#3a1a2b] hover:border-[#c02652] text-xs font-mono text-white transition-all cursor-pointer hover:text-[#f47293]"
              >
                View System Blueprint
              </button>
            </div>

            {/* LeetCode Profile */}
            <a
              href={personalInfo.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 rounded-lg bg-[#180d14] hover:bg-[#24111d] border border-[#3a1a2b] hover:border-[#c02652] flex items-center justify-between transition-all group hover:shadow-[0_0_12px_rgba(192,38,82,0.2)]"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-[#24111d] border border-[#3a1a2b] flex items-center justify-center text-white font-mono font-bold text-xs">
                  LC
                </div>
                <div>
                  <div className="text-xs font-semibold text-white group-hover:text-[#f47293] transition-colors">
                    LeetCode Profile
                  </div>
                  <div className="text-[11px] font-mono text-[#c7adb8]">Active problem solver in C &amp; Java</div>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#c7adb8] group-hover:text-white transition-colors" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
