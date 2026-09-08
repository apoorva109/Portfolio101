import { useState } from 'react';
import { X, Printer, Copy, Check, ExternalLink, GraduationCap, Award, Briefcase, Code2, Mail, MapPin } from 'lucide-react';
import { personalInfo, educationData, skillsData, projectsData } from '../../data/portfolioData';

interface CvModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CvModal = ({ isOpen, onClose }: CvModalProps) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    const text = `
${personalInfo.name}
${personalInfo.headline}
Email: ${personalInfo.email} | Location: ${personalInfo.location}
GitHub: ${personalInfo.githubUrl} | LinkedIn: ${personalInfo.linkedinUrl}

EDUCATION:
${educationData.degree}
${educationData.institution} — ${educationData.semester}
CGPA: ${educationData.cgpa}/${educationData.scale} (${educationData.standing}, ${educationData.track})

TECHNICAL SKILLS:
- Languages & Core CS: C, Java, HTML/CSS/JavaScript, Data Structures & Algorithms
- Databases & Tools: SQL, DBMS, Git, GitHub
- Hardware & Embedded: Arduino, NodeMCU (ESP8266), IoT & Blynk

FEATURED PROJECTS:
1. WriteHub (Planned): Academic Peer-to-Peer Help Platform
2. 2D Graphics Editor in C: Low-level rendering pipeline, rasterization algorithms
3. IoT Environmental Telemetry Node: Embedded microcontroller sensing with Blynk cloud
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      id="cv-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="cv-modal-content"
        className="relative w-full max-w-2xl bg-[#181920] border border-[#2a2b34] rounded-xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Action Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-[#180d14] border-b border-[#3a1a2b]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-mono font-medium text-white">Curriculum Vitae</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="h-7 px-2.5 rounded text-xs font-mono bg-[#24111d] border border-[#3a1a2b] hover:border-[#c02652] text-[#f3e8ee] flex items-center gap-1.5 transition-all hover:text-[#f47293] cursor-pointer"
              title="Copy plain text CV"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied!' : 'Copy Text'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="h-7 px-2.5 rounded text-xs font-mono bg-[#24111d] border border-[#3a1a2b] hover:border-[#c02652] text-[#f3e8ee] flex items-center gap-1.5 transition-all hover:text-[#f47293] cursor-pointer"
              title="Print CV"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="w-7 h-7 rounded bg-[#24111d] border border-[#3a1a2b] hover:border-[#c02652] text-[#c7adb8] hover:text-[#f47293] flex items-center justify-center transition-all cursor-pointer"
              aria-label="Close CV Modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable CV Document */}
        <div className="p-6 max-h-[80vh] overflow-y-auto space-y-6 text-[#f3e8ee] bg-[#12090e]">
          {/* Resume Header */}
          <div className="border-b border-[#3a1a2b] pb-5">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h1 className="text-2xl font-bold text-white tracking-tight">{personalInfo.name}</h1>
                <p className="text-sm font-medium text-[#c7adb8] mt-0.5">
                  B.Tech in Computer Science & Engineering — 3rd Semester
                </p>
              </div>
              <div className="text-left sm:text-right font-mono text-xs text-[#c7adb8] space-y-0.5">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3 h-3 text-[#f47293]" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3 h-3 text-[#f47293]" />
                  <span>{personalInfo.email}</span>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#c7adb8] mt-3 leading-relaxed">
              {personalInfo.summary}
            </p>
          </div>

          {/* Education */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white font-semibold">
              <GraduationCap className="w-4 h-4 text-[#f47293]" />
              <span>Academic Education</span>
            </div>

            <div className="p-3.5 rounded-lg bg-[#180d14] border border-[#3a1a2b] space-y-2">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-white">{educationData.degree}</h3>
                  <p className="text-xs text-[#c7adb8] font-mono mt-0.5">
                    {educationData.institution} • {educationData.semester}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-sm font-bold font-mono text-white">{educationData.cgpa}</span>
                  <span className="text-[10px] font-mono text-[#f47293]"> / {educationData.scale} CGPA</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#24111d] border border-[#3a1a2b] text-[11px] font-mono text-emerald-400">
                  <Award className="w-3 h-3" />
                  <span>{educationData.standing}</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-[#24111d] border border-[#3a1a2b] text-[11px] font-mono text-[#f47293]">
                  {educationData.track}
                </span>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white font-semibold">
              <Code2 className="w-4 h-4 text-[#f47293]" />
              <span>Technical Skills</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              {skillsData.map((cat) => (
                <div key={cat.id} className="p-3 rounded-lg bg-[#180d14] border border-[#3a1a2b] space-y-2">
                  <h4 className="text-xs font-semibold text-white">{cat.title}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span
                        key={s.name}
                        className="px-2 py-0.5 rounded bg-[#24111d] border border-[#3a1a2b] text-[11px] font-mono text-[#f3e8ee]"
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-white font-semibold">
              <Briefcase className="w-4 h-4 text-[#f47293]" />
              <span>Projects & Engineering Work</span>
            </div>

            <div className="space-y-2.5">
              {projectsData.map((project) => (
                <div key={project.id} className="p-3.5 rounded-lg bg-[#180d14] border border-[#3a1a2b] space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-white">{project.title}</h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#24111d] border border-[#3a1a2b] text-[#f47293]">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-xs text-[#c7adb8] leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-[#f47293] bg-[#24111d] px-1.5 py-0.5 rounded border border-[#3a1a2b]">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Online Links */}
          <div className="pt-2 border-t border-[#3a1a2b] flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
            <a
              href={personalInfo.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f47293] hover:underline flex items-center gap-1"
            >
              <span>GitHub: {personalInfo.githubUser}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={personalInfo.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f47293] hover:underline flex items-center gap-1"
            >
              <span>LinkedIn: /in/apoorva</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <a
              href={personalInfo.leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#f47293] hover:underline flex items-center gap-1"
            >
              <span>LeetCode Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
