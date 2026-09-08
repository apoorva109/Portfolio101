import { useState } from 'react';
import { X, Cpu, Users, MessageSquare, Star, CheckCircle, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { projectsData } from '../../data/portfolioData';

interface WriteHubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WriteHubModal = ({ isOpen, onClose }: WriteHubModalProps) => {
  const writeHub = projectsData.find((p) => p.id === 'writehub');
  const details = writeHub?.blueprintDetails;

  // Interactive match demo state
  const [selectedSubject, setSelectedSubject] = useState('Data Structures in C');
  const [matchingStatus, setMatchingStatus] = useState<string | null>(null);

  if (!isOpen || !details) return null;

  const handleTestMatch = () => {
    setMatchingStatus('calculating');
    setTimeout(() => {
      setMatchingStatus('matched');
    }, 600);
  };

  return (
    <div
      id="writehub-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="writehub-modal-content"
        className="relative w-full max-w-2xl bg-[#181920] border border-[#2a2b34] rounded-xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#180d14] border-b border-[#3a1a2b]">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-[#24111d] border border-[#3a1a2b] text-[11px] font-mono text-[#f47293]">
              Architecture Blueprint
            </span>
            <span className="text-xs font-mono font-medium text-white">WriteHub Project</span>
          </div>

          <button
            onClick={onClose}
            className="w-7 h-7 rounded bg-[#24111d] border border-[#3a1a2b] hover:border-[#c02652] text-[#c7adb8] hover:text-[#f47293] flex items-center justify-center transition-all cursor-pointer"
            aria-label="Close WriteHub Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6 text-[#f3e8ee] bg-[#12090e]">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#c7adb8] font-medium">
              Planned Platform
            </span>
            <h2 className="text-xl font-bold text-white mt-1">WriteHub — Peer-to-Peer Academic Network</h2>
            <p className="text-xs font-medium text-[#c7adb8] mt-1">
              Academic Peer-to-Peer Help Platform (In Planning Phase)
            </p>
            <p className="text-xs text-[#f3e8ee] leading-relaxed mt-2.5">
              {details.overview}
            </p>
          </div>

          {/* Core Architecture Pillars */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              System Architecture &amp; Tiers
            </h3>
            <div className="space-y-2">
              {details.architecture.map((item, idx) => (
                <div key={idx} className="p-3 rounded-lg bg-[#180d14] border border-[#3a1a2b] flex items-start gap-2.5">
                  <div className="w-5 h-5 rounded bg-[#24111d] border border-[#3a1a2b] flex items-center justify-center text-[10px] font-mono text-[#f47293] shrink-0 mt-0.5 shadow-[0_0_8px_rgba(163,29,69,0.2)]">
                    0{idx + 1}
                  </div>
                  <p className="text-xs text-[#c7adb8] leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Modules Breakdown */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
              Engineered Subsystems
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {details.modules.map((mod, i) => (
                <div key={i} className="p-3 rounded-lg bg-[#180d14] border border-[#3a1a2b] space-y-1.5">
                  <div className="flex items-center gap-2">
                    {i === 0 && <Cpu className="w-4 h-4 text-[#f47293]" />}
                    {i === 1 && <ShieldCheck className="w-4 h-4 text-emerald-400" />}
                    {i === 2 && <MessageSquare className="w-4 h-4 text-amber-400" />}
                    {i === 3 && <Star className="w-4 h-4 text-[#f47293]" />}
                    <h4 className="text-xs font-semibold text-white">{mod.name}</h4>
                  </div>
                  <p className="text-[11px] text-[#c7adb8] leading-relaxed">{mod.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Match Simulator */}
          <div className="p-4 rounded-lg bg-[#180d14] border border-[#3a1a2b] space-y-3 shadow-md">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#f47293]" />
                <span className="text-xs font-mono font-semibold text-white">Algorithm Preview: Peer Tutor Match</span>
              </div>
              <span className="text-[10px] font-mono text-[#c7adb8]">Interactive Simulation</span>
            </div>

            <p className="text-[11px] text-[#c7adb8]">
              Simulate the subject-weighted cosine matching engine connecting university students.
            </p>

            <div className="flex flex-col sm:flex-row gap-2">
              <select
                value={selectedSubject}
                onChange={(e) => {
                  setSelectedSubject(e.target.value);
                  setMatchingStatus(null);
                }}
                className="bg-[#24111d] border border-[#3a1a2b] text-xs text-white rounded px-3 py-2 font-mono focus:outline-none focus:border-[#a31d45]"
              >
                <option value="Data Structures in C">Data Structures in C</option>
                <option value="Object Oriented Programming (Java)">Object Oriented Programming (Java)</option>
                <option value="Digital Logic & Systems">Digital Logic & Systems</option>
                <option value="IoT & Sensor Interfaces">IoT & Sensor Interfaces</option>
              </select>

              <button
                onClick={handleTestMatch}
                className="px-4 py-2 rounded text-xs font-medium bg-[#24111d] hover:bg-[#341728] border border-[#3a1a2b] hover:border-[#c02652] text-white flex items-center justify-center gap-1.5 transition-all hover:text-[#f47293] hover:shadow-[0_0_12px_rgba(192,38,82,0.2)] cursor-pointer"
              >
                <span>Run Matching Engine</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {matchingStatus === 'matched' && (
              <div className="p-3 rounded bg-[#24111d] border border-[#a31d45] flex items-start gap-3 mt-2 shadow-[0_0_16px_rgba(163,29,69,0.2)]">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div className="space-y-1 text-xs">
                  <div className="font-semibold text-white">
                    Verified Match Found: Peer Tutor #482 (Syllabus Match 98.4%)
                  </div>
                  <div className="text-[#c7adb8] text-[11px] font-mono">
                    Subject: {selectedSubject} • Course Grade: A+ • REVA University CSE
                  </div>
                  <div className="text-[#f47293] text-[10px] font-mono">
                    Instant Secure WebSocket Session Ready
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Planned Tech Stack */}
          <div className="space-y-2">
            <h3 className="text-xs font-mono uppercase tracking-wider text-[#c7adb8]">
              Target Technical Stack
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {details.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded bg-[#180d14] border border-[#3a1a2b] text-xs font-mono text-[#f47293]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
