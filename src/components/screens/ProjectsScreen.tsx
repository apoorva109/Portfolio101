import { useState } from 'react';
import { motion } from 'motion/react';
import { Terminal, PenTool, Cpu, Layers, ExternalLink, RefreshCw, Wifi } from 'lucide-react';
import { projectsData, personalInfo } from '../../data/portfolioData';

interface ProjectsScreenProps {
  onOpenWriteHub: () => void;
  onOpenGraphicsEditor: () => void;
}

export const ProjectsScreen = ({ onOpenWriteHub, onOpenGraphicsEditor }: ProjectsScreenProps) => {
  const [filter, setFilter] = useState<'all' | 'systems' | 'planned' | 'hardware'>('all');

  // IoT Sensor Telemetry simulator state
  const [telemetry, setTelemetry] = useState({
    temp: 26.8,
    humidity: 56,
    distance: 44,
    status: 'ONLINE',
    lastPing: 'Just now'
  });
  const [isRefreshing, setIsRefreshing] = useState(false);

  const refreshSensorData = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setTelemetry({
        temp: Number((25.5 + Math.random() * 3).toFixed(1)),
        humidity: Math.floor(52 + Math.random() * 10),
        distance: Math.floor(38 + Math.random() * 15),
        status: 'ONLINE',
        lastPing: 'Just now'
      });
      setIsRefreshing(false);
    }, 400);
  };

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'systems') return p.category.includes('SYSTEMS');
    if (filter === 'planned') return p.category.includes('PLANNED');
    if (filter === 'hardware') return p.category.includes('HARDWARE');
    return true;
  });

  return (
    <div id="projects-screen" className="flex flex-col relative w-full space-y-5">
      {/* Header Banner */}
      <div className="rounded-lg bg-[#180d14] border border-[#3a1a2b] p-5 shadow-lg shadow-black/40">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono text-[#c7adb8] flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#f47293]" />
            <span>Engineering Portfolio</span>
          </span>
          <span className="font-mono text-[11px] text-[#f47293] font-medium">03 Projects</span>
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight mt-1.5">
          Projects &amp; Architectures
        </h1>
        <p className="text-xs text-[#c7adb8] mt-1 leading-relaxed">
          From low-level framebuffer rendering in C to distributed peer architectures and embedded IoT microcontrollers.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-1.5 pt-4">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'systems', label: 'Systems & C' },
            { id: 'planned', label: 'Planned Work' },
            { id: 'hardware', label: 'Hardware & IoT' }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setFilter(item.id as any)}
              className={`px-2.5 py-1 rounded text-xs font-mono transition-all cursor-pointer ${
                filter === item.id
                  ? 'bg-[#800020] text-white font-semibold border border-[#c02652] shadow-[0_0_12px_rgba(192,38,82,0.35)]'
                  : 'bg-[#1e101a] text-[#c7adb8] hover:text-white border border-[#3a1a2b] hover:border-[#8b1e3f]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects List */}
      <div className="space-y-4">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            id={`project-card-${project.id}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.45,
              delay: index * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="group relative rounded-xl bg-[#180d14] border border-[#3a1a2b] p-5 space-y-3.5 hover:border-[#c02652] hover:shadow-[0_0_24px_rgba(192,38,82,0.22)] hover:-translate-y-0.5 transition-all duration-300 overflow-hidden"
          >
            {/* Subtle ambient burgundy glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#c02652]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />

            <div className="flex items-start justify-between gap-2 relative z-10">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#c7adb8] font-medium">
                  {project.category}
                </span>
                <h2 className="text-lg font-semibold text-white mt-0.5 group-hover:text-[#f47293] transition-colors">
                  {project.title}
                </h2>
              </div>
              <span className="px-2 py-0.5 rounded bg-[#24111d] border border-[#3a1a2b] text-[11px] font-mono text-[#f47293] group-hover:border-[#8b1e3f] transition-colors">
                {project.typeBadge || (project.id === 'graphics-editor' ? 'C99' : 'ESP8266')}
              </span>
            </div>

            <p className="text-xs font-medium text-[#c7adb8] relative z-10">
              {project.subtitle}
            </p>

            <p className="text-xs text-[#f3e8ee] leading-relaxed relative z-10">
              {project.description}
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-1.5 relative z-10">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 rounded bg-[#21101a] text-[11px] font-mono text-[#c7adb8] border border-[#3a1a2b] group-hover:border-[#4d2239] transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Specialized interactive element for IoT Node */}
            {project.id === 'iot-smart-monitor' && (
              <div className="p-3.5 rounded-lg bg-[#12090e] border border-[#3a1a2b] space-y-2.5 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span className="text-xs font-mono font-medium text-white flex items-center gap-1.5">
                      <Wifi className="w-3.5 h-3.5 text-[#f47293]" />
                      <span>NodeMCU ESP8266 Telemetry</span>
                    </span>
                  </div>

                  <button
                    onClick={refreshSensorData}
                    disabled={isRefreshing}
                    className="p-1 rounded bg-[#24111d] hover:bg-[#341728] border border-[#3a1a2b] text-[#c7adb8] hover:text-white transition-colors cursor-pointer"
                    title="Simulate hardware sensor poll"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-[#f47293]' : ''}`} />
                  </button>
                </div>

                <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-center">
                  <div className="p-2 rounded bg-[#1e101a] border border-[#3a1a2b]">
                    <div className="text-[10px] text-[#c7adb8]">DHT11 Temp</div>
                    <div className="text-xs font-semibold text-white mt-0.5">{telemetry.temp}°C</div>
                  </div>
                  <div className="p-2 rounded bg-[#1e101a] border border-[#3a1a2b]">
                    <div className="text-[10px] text-[#c7adb8]">Humidity</div>
                    <div className="text-xs font-semibold text-white mt-0.5">{telemetry.humidity}%</div>
                  </div>
                  <div className="p-2 rounded bg-[#1e101a] border border-[#3a1a2b]">
                    <div className="text-[10px] text-[#c7adb8]">Sonar Dist</div>
                    <div className="text-xs font-semibold text-white mt-0.5">{telemetry.distance} cm</div>
                  </div>
                </div>
              </div>
            )}

            {/* Action buttons */}
            <div className="pt-1 flex flex-wrap gap-2 relative z-10">
              {project.id === 'writehub' && (
                <button
                  onClick={onOpenWriteHub}
                  className="flex-1 h-9 rounded bg-[#24111d] hover:bg-[#341728] border border-[#3a1a2b] hover:border-[#c02652] text-white text-xs font-medium flex items-center justify-center gap-2 transition-all hover:text-[#f47293] hover:shadow-[0_0_12px_rgba(192,38,82,0.2)] cursor-pointer"
                >
                  <Cpu className="w-4 h-4 text-[#f47293]" />
                  <span>Open System Architecture Blueprint →</span>
                </button>
              )}

              {project.id === 'graphics-editor' && (
                <>
                  <button
                    onClick={onOpenGraphicsEditor}
                    className="flex-1 h-9 rounded bg-[#24111d] hover:bg-[#341728] border border-[#3a1a2b] hover:border-[#c02652] text-white text-xs font-medium flex items-center justify-center gap-2 transition-all hover:text-[#f47293] hover:shadow-[0_0_12px_rgba(192,38,82,0.2)] cursor-pointer"
                  >
                    <PenTool className="w-4 h-4 text-[#f47293]" />
                    <span>Launch 2D Canvas Sandbox</span>
                  </button>
                  <a
                    href={personalInfo.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 px-4 rounded bg-[#24111d] hover:bg-[#341728] border border-[#3a1a2b] hover:border-[#c02652] text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-all hover:text-[#f47293] hover:shadow-[0_0_12px_rgba(192,38,82,0.2)] cursor-pointer"
                  >
                    <Terminal className="w-4 h-4 text-[#c7adb8]" />
                    <span>GitHub</span>
                    <ExternalLink className="w-3 h-3 text-[#c7adb8]" />
                  </a>
                </>
              )}

              {project.id === 'iot-smart-monitor' && (
                <a
                  href={personalInfo.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 h-9 rounded bg-[#24111d] hover:bg-[#341728] border border-[#3a1a2b] hover:border-[#c02652] text-white text-xs font-medium flex items-center justify-center gap-1.5 transition-all hover:text-[#f47293] hover:shadow-[0_0_12px_rgba(192,38,82,0.2)] cursor-pointer"
                >
                  <Terminal className="w-4 h-4 text-[#c7adb8]" />
                  <span>View IoT Firmware on GitHub</span>
                  <ExternalLink className="w-3 h-3 text-[#c7adb8]" />
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
