import { useState, useEffect } from 'react';
import { ScreenTab } from './types';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { HomeScreen } from './components/screens/HomeScreen';
import { ProjectsScreen } from './components/screens/ProjectsScreen';
import { SkillsScreen } from './components/screens/SkillsScreen';
import { EducationScreen } from './components/screens/EducationScreen';
import { ConnectScreen } from './components/screens/ConnectScreen';
import { CvModal } from './components/modals/CvModal';
import { WriteHubModal } from './components/modals/WriteHubModal';
import { GraphicsEditorModal } from './components/modals/GraphicsEditorModal';
import { CodeModal } from './components/modals/CodeModal';
import { Smartphone, Monitor } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ScreenTab>('home');
  const [isCvOpen, setIsCvOpen] = useState(false);
  const [isCodeOpen, setIsCodeOpen] = useState(false);
  const [isWriteHubOpen, setIsWriteHubOpen] = useState(false);
  const [isGraphicsEditorOpen, setIsGraphicsEditorOpen] = useState(false);
  const [isPhoneFrame, setIsPhoneFrame] = useState(false);

  // Scroll to top whenever tab changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#12090e] text-[#f3e8ee] font-sans antialiased flex flex-col items-center selection:bg-[#6b152d] selection:text-white">
      {/* Desktop view toggle helper */}
      <div className="hidden lg:flex fixed top-4 right-6 z-50 items-center gap-1 bg-[#180d14]/90 border border-[#3a1a2b] rounded-lg p-1 text-xs font-mono backdrop-blur-md shadow-lg shadow-black/40">
        <button
          onClick={() => setIsPhoneFrame(true)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors cursor-pointer ${
            isPhoneFrame ? 'bg-[#800020] text-white shadow-[0_0_10px_rgba(163,29,69,0.3)]' : 'text-[#c7adb8] hover:text-white'
          }`}
          title="Mobile Frame View (matches screenshot)"
        >
          <Smartphone className="w-3.5 h-3.5" />
          <span>Mobile View</span>
        </button>
        <button
          onClick={() => setIsPhoneFrame(false)}
          className={`flex items-center gap-1 px-2.5 py-1 rounded transition-colors cursor-pointer ${
            !isPhoneFrame ? 'bg-[#800020] text-white shadow-[0_0_10px_rgba(163,29,69,0.3)]' : 'text-[#c7adb8] hover:text-white'
          }`}
          title="Responsive Fluid View"
        >
          <Monitor className="w-3.5 h-3.5" />
          <span>Responsive</span>
        </button>
      </div>

      {/* Main Container */}
      <div
        className={`w-full transition-all duration-300 relative flex flex-col min-h-screen ${
          isPhoneFrame
            ? 'max-w-[420px] my-6 border border-[#3a1a2b] rounded-3xl shadow-2xl shadow-black/90 overflow-hidden bg-[#12090e]'
            : 'max-w-2xl'
        }`}
      >
        {/* Minimalist Fixed Header */}
        <Header
          onOpenCv={() => setIsCvOpen(true)}
          onOpenCode={() => setIsCodeOpen(true)}
          activeTab={activeTab}
          onNavigateHome={() => setActiveTab('home')}
        />

        {/* Content Body */}
        <main className="flex-1 w-full pt-20 pb-28 px-4">
          {activeTab === 'home' && (
            <HomeScreen
              onOpenWriteHub={() => setIsWriteHubOpen(true)}
              onOpenGraphicsEditor={() => setIsGraphicsEditorOpen(true)}
              onNavigateTab={(tab) => setActiveTab(tab)}
            />
          )}

          {activeTab === 'projects' && (
            <ProjectsScreen
              onOpenWriteHub={() => setIsWriteHubOpen(true)}
              onOpenGraphicsEditor={() => setIsGraphicsEditorOpen(true)}
            />
          )}

          {activeTab === 'skills' && <SkillsScreen />}

          {activeTab === 'education' && <EducationScreen />}

          {activeTab === 'connect' && (
            <ConnectScreen onOpenCv={() => setIsCvOpen(true)} />
          )}
        </main>

        {/* Bottom Floating Navigation */}
        <Navigation
          activeTab={activeTab}
          onTabChange={(tab) => setActiveTab(tab)}
        />
      </div>

      {/* Interactive Modals */}
      <CvModal
        isOpen={isCvOpen}
        onClose={() => setIsCvOpen(false)}
      />

      <WriteHubModal
        isOpen={isWriteHubOpen}
        onClose={() => setIsWriteHubOpen(false)}
      />

      <GraphicsEditorModal
        isOpen={isGraphicsEditorOpen}
        onClose={() => setIsGraphicsEditorOpen(false)}
      />

      <CodeModal
        isOpen={isCodeOpen}
        onClose={() => setIsCodeOpen(false)}
        onOpenGraphicsEditor={() => setIsGraphicsEditorOpen(true)}
        onOpenWriteHub={() => setIsWriteHubOpen(true)}
      />
    </div>
  );
}
