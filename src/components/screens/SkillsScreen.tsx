import { useState } from 'react';
import { Code2, Terminal, Database, Cpu, CheckCircle2, ChevronRight, BookOpen } from 'lucide-react';
import { skillsData } from '../../data/portfolioData';

export const SkillsScreen = () => {
  const [selectedSkill, setSelectedSkill] = useState(skillsData[0].skills[0]);

  return (
    <div id="skills-screen" className="flex flex-col relative w-full space-y-5">
      {/* Header */}
      <div className="rounded-lg bg-[#180d14] border border-[#3a1a2b] p-5 shadow-lg shadow-black/40">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono text-[#c7adb8] flex items-center gap-1.5">
            <Code2 className="w-3.5 h-3.5 text-[#f47293]" />
            <span>Technical Capabilities</span>
          </span>
          <span className="font-mono text-[11px] text-[#f47293]">10 Proficiencies</span>
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight mt-1.5">
          Technical Repertoire
        </h1>
        <p className="text-xs text-[#c7adb8] mt-1 leading-relaxed">
          Foundational competencies in systems programming, object-oriented software engineering, database modeling, and physical computing.
        </p>
      </div>

      {/* Selected Skill Detail Card */}
      {selectedSkill && (
        <div className="rounded-lg bg-[#180d14] border border-[#3a1a2b] p-5 space-y-3 shadow-lg shadow-black/30">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded bg-[#24111d] border border-[#3a1a2b] flex items-center justify-center font-mono font-bold text-white text-sm shadow-[0_0_10px_rgba(163,29,69,0.25)]">
                {selectedSkill.name.slice(0, 2).toUpperCase()}
              </div>
              <div>
                <h2 className="text-base font-bold text-white">{selectedSkill.name}</h2>
                <span className="text-[11px] font-mono text-[#f47293]">{selectedSkill.level} Competency</span>
              </div>
            </div>

            <span className="px-2 py-0.5 rounded bg-[#24111d] border border-[#3a1a2b] text-[11px] font-mono text-emerald-400 flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3" />
              <span>Active Usage</span>
            </span>
          </div>

          <div className="p-3.5 rounded bg-[#12090e] border border-[#3a1a2b] space-y-1.5">
            <div className="text-[11px] font-mono text-[#c7adb8] flex items-center gap-1">
              <BookOpen className="w-3 h-3 text-[#f47293]" />
              <span>Core Knowledge &amp; Application:</span>
            </div>
            <p className="text-xs text-[#f3e8ee] leading-relaxed">
              {selectedSkill.details}
            </p>
          </div>

          <div className="space-y-1.5">
            <span className="text-[11px] font-mono text-[#c7adb8]">Practical Projects Applied In:</span>
            <div className="flex flex-wrap gap-1.5">
              {selectedSkill.projects.map((proj) => (
                <span
                  key={proj}
                  className="px-2.5 py-1 rounded bg-[#24111d] border border-[#3a1a2b] text-xs font-mono text-[#f47293]"
                >
                  {proj}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Categories Grid */}
      <div className="space-y-4">
        {skillsData.map((category, idx) => (
          <div key={category.id} className="rounded-lg bg-[#180d14] border border-[#3a1a2b] p-4 space-y-3 shadow-lg shadow-black/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {idx === 0 && <Terminal className="w-4 h-4 text-[#f47293]" />}
                {idx === 1 && <Database className="w-4 h-4 text-emerald-400" />}
                {idx === 2 && <Cpu className="w-4 h-4 text-amber-400" />}
                <h3 className="text-xs font-semibold uppercase tracking-wider text-white">
                  {category.title}
                </h3>
              </div>
              <span className="font-mono text-[10px] text-[#c7adb8]">
                {category.itemCount}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {category.skills.map((skill) => {
                const isSelected = selectedSkill?.name === skill.name;
                return (
                  <button
                    key={skill.name}
                    onClick={() => setSelectedSkill(skill)}
                    className={`flex items-center justify-between p-3 rounded-lg border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#2b1220] border-[#c02652] text-white shadow-[0_0_12px_rgba(192,38,82,0.25)]'
                        : 'bg-[#24111d]/60 hover:bg-[#24111d] border-[#3a1a2b] hover:border-[#a31d45] text-[#f3e8ee]'
                    }`}
                  >
                    <div>
                      <div className="text-xs font-semibold font-mono">{skill.name}</div>
                      <div className="text-[11px] text-[#c7adb8] mt-0.5">{skill.level}</div>
                    </div>
                    <ChevronRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'rotate-90 text-[#f47293]' : 'text-[#c7adb8]'}`} />
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
