import { Home, FolderOpen, Code2, GraduationCap, AtSign } from 'lucide-react';
import { ScreenTab } from '../types';

interface NavigationProps {
  activeTab: ScreenTab;
  onTabChange: (tab: ScreenTab) => void;
}

interface NavItem {
  id: ScreenTab;
  label: string;
  icon: typeof Home;
}

const navItems: NavItem[] = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'projects', label: 'Projects', icon: FolderOpen },
  { id: 'skills', label: 'Skills', icon: Code2 },
  { id: 'education', label: 'Edu', icon: GraduationCap },
  { id: 'connect', label: 'Connect', icon: AtSign }
];

export const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  return (
    <nav
      id="bottom-floating-navigation"
      className="fixed bottom-0 left-0 right-0 w-full z-40 pointer-events-none pb-3 pt-1"
    >
      <div className="max-w-2xl mx-auto px-4 pointer-events-auto">
        <div className="flex items-center justify-around py-1.5 px-2 rounded-xl bg-[#180d14]/95 backdrop-blur-lg border border-[#3a1a2b] shadow-2xl shadow-black/80">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-tab-${item.id}`}
                onClick={() => onTabChange(item.id)}
                className={`flex flex-col items-center justify-center py-1.5 px-3 rounded-lg transition-all cursor-pointer relative ${
                  isActive
                    ? 'text-white bg-[#361525]/60'
                    : 'text-[#9c7b8b] hover:text-[#f3e8ee]'
                }`}
              >
                {isActive && (
                  <span className="absolute -top-1 w-6 h-[2.5px] rounded-full bg-[#d9426e] shadow-[0_0_10px_#d9426e] transition-all" />
                )}
                <Icon className={`w-[19px] h-[19px] transition-transform ${isActive ? 'scale-110 text-[#f47293]' : ''}`} />
                <span className={`text-[10px] font-mono mt-1 font-medium tracking-tight ${isActive ? 'text-[#f47293]' : ''}`}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};
