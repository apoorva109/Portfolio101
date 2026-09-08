import { GraduationCap, Award, BookOpen, CheckCircle2, Calendar, MapPin } from 'lucide-react';
import { educationData } from '../../data/portfolioData';

export const EducationScreen = () => {
  return (
    <div id="education-screen" className="flex flex-col relative w-full space-y-5">
      {/* Header Banner */}
      <div className="rounded-lg bg-[#180d14] border border-[#3a1a2b] p-5 shadow-lg shadow-black/40">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono text-[#c7adb8] flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5 text-[#f47293]" />
            <span>Academic Qualifications</span>
          </span>
          <span className="font-mono text-[11px] text-emerald-400">8.85 / 10 CGPA</span>
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight mt-1.5">
          Academic Journey
        </h1>
        <p className="text-xs text-[#c7adb8] mt-1 leading-relaxed">
          Undergraduate studies in Computer Science and Engineering at REVA University, maintaining top-tier standing and rigorous coursework across mathematical and algorithmic fundamentals.
        </p>
      </div>

      {/* Main Degree Card */}
      <div className="rounded-lg bg-[#180d14] border border-[#3a1a2b] p-5 space-y-4 shadow-lg shadow-black/30">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-white">{educationData.degree}</h2>
            <div className="text-xs text-[#c7adb8] mt-1 flex items-center gap-1.5 font-mono">
              <span>{educationData.institution}</span>
              <span>•</span>
              <span>{educationData.semester}</span>
            </div>
            <div className="text-[11px] text-[#c7adb8] mt-1 flex items-center gap-1">
              <MapPin className="w-3 h-3 text-[#f47293]" />
              <span>Yelahanka, Bengaluru, Karnataka</span>
            </div>
          </div>

          <div className="text-right flex-shrink-0 bg-[#24111d] p-3 rounded-lg border border-[#3a1a2b] shadow-[0_0_12px_rgba(163,29,69,0.2)]">
            <div className="text-xl font-bold font-mono text-white leading-tight">
              {educationData.cgpa}
            </div>
            <div className="text-[10px] font-mono text-[#f47293]">CGPA / {educationData.scale}</div>
          </div>
        </div>

        {/* Accreditations */}
        <div className="grid grid-cols-2 gap-2 pt-1">
          <div className="p-3 rounded bg-[#24111d] border border-[#3a1a2b] flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <div>
              <div className="text-[11px] font-mono text-[#c7adb8]">Standing</div>
              <div className="text-xs font-semibold text-white">{educationData.standing}</div>
            </div>
          </div>

          <div className="p-3 rounded bg-[#24111d] border border-[#3a1a2b] flex items-center gap-2">
            <Award className="w-4 h-4 text-[#f47293] shrink-0" />
            <div>
              <div className="text-[11px] font-mono text-[#c7adb8]">Category</div>
              <div className="text-xs font-semibold text-white">{educationData.track}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Semester Breakdown */}
      <div className="space-y-3">
        <h3 className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
          Curriculum &amp; Coursework Roadmap
        </h3>

        <div className="space-y-3">
          {educationData.semesters.map((semester) => (
            <div
              key={semester.sem}
              className="rounded-lg bg-[#180d14] border border-[#3a1a2b] p-4 space-y-3 shadow-md shadow-black/20"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#f47293]" />
                  <h4 className="text-sm font-semibold text-white">{semester.sem}</h4>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-white px-2 py-0.5 rounded bg-[#24111d] border border-[#3a1a2b]">
                    GPA: {semester.gpa}
                  </span>
                  {semester.status === 'current' && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#3c0f20] border border-[#a31d45] text-[#f47293]">
                      Active
                    </span>
                  )}
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="text-[11px] font-mono text-[#c7adb8] flex items-center gap-1">
                  <BookOpen className="w-3 h-3 text-[#f47293]" />
                  <span>Key Coursework Subjects:</span>
                </div>
                <div className="grid grid-cols-1 gap-1.5">
                  {semester.courses.map((course, i) => (
                    <div
                      key={i}
                      className="p-2 rounded bg-[#24111d] border border-[#3a1a2b] text-xs text-[#f3e8ee] flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f47293] shrink-0 shadow-[0_0_6px_#f47293]" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
