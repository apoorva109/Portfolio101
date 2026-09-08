import { useState, FormEvent } from 'react';
import { Mail, Send, Terminal, Share2, Copy, Check, ExternalLink, MapPin, CheckCircle2 } from 'lucide-react';
import { personalInfo, contactLinks } from '../../data/portfolioData';

interface ConnectScreenProps {
  onOpenCv: () => void;
}

export const ConnectScreen = ({ onOpenCv }: ConnectScreenProps) => {
  const [copied, setCopied] = useState(false);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    // Create mailto fallback link and notify user
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      formState.subject || 'Portfolio Inquiry from ' + formState.name
    )}&body=${encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    )}`;

    window.location.href = mailtoUrl;
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <div id="connect-screen" className="flex flex-col relative w-full space-y-5">
      {/* Header */}
      <div className="rounded-lg bg-[#180d14] border border-[#3a1a2b] p-5 shadow-lg shadow-black/40">
        <div className="flex items-center justify-between">
          <span className="text-[11px] font-mono text-[#c7adb8] flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-[#f47293]" />
            <span>Open for Collaboration</span>
          </span>
          <span className="font-mono text-[11px] text-emerald-400">Available</span>
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight mt-1.5">
          Let's Connect
        </h1>
        <p className="text-xs text-[#c7adb8] mt-1 leading-relaxed">
          Interested in discussing systems programming, embedded IoT projects, or academic collaboration? Feel free to reach out.
        </p>

        {/* Quick Email Pill */}
        <div className="mt-4 p-2.5 rounded bg-[#24111d] border border-[#3a1a2b] flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 text-xs font-mono text-white truncate">
            <Mail className="w-3.5 h-3.5 text-[#f47293] shrink-0" />
            <span className="truncate">{personalInfo.email}</span>
          </div>

          <button
            onClick={handleCopyEmail}
            className="px-2.5 py-1 rounded bg-[#341728] hover:bg-[#481c35] border border-[#3a1a2b] text-xs font-mono text-white flex items-center gap-1 transition-all hover:border-[#c02652] hover:text-[#f47293] cursor-pointer shrink-0"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-[#c7adb8]" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Network Links */}
      <div className="rounded-lg bg-[#180d14] border border-[#3a1a2b] p-3 space-y-2 shadow-lg shadow-black/20">
        <h2 className="text-xs font-mono uppercase tracking-wider text-[#c7adb8] px-2 pt-1">
          Channels &amp; Profiles
        </h2>

        {/* GitHub */}
        <a
          href={personalInfo.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-3 rounded-lg bg-[#24111d]/60 hover:bg-[#24111d] border border-[#3a1a2b] hover:border-[#a31d45] transition-all group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#341728] border border-[#3a1a2b] flex items-center justify-center text-white">
              <Terminal className="w-4 h-4 text-[#f47293]" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-[#c7adb8]">{contactLinks[0].label}</div>
              <div className="text-xs font-semibold text-white group-hover:text-[#f47293] transition-colors">
                {contactLinks[0].sublabel}
              </div>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-[#c7adb8] group-hover:text-white transition-colors" />
        </a>

        {/* LinkedIn */}
        <a
          href={personalInfo.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-between p-3 rounded-lg bg-[#24111d]/60 hover:bg-[#24111d] border border-[#3a1a2b] hover:border-[#a31d45] transition-all group cursor-pointer"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-[#341728] border border-[#3a1a2b] flex items-center justify-center text-white">
              <Share2 className="w-4 h-4 text-[#f47293]" />
            </div>
            <div>
              <div className="text-[11px] font-mono text-[#c7adb8]">{contactLinks[1].label}</div>
              <div className="text-xs font-semibold text-white group-hover:text-[#f47293] transition-colors">
                {contactLinks[1].sublabel}
              </div>
            </div>
          </div>
          <ExternalLink className="w-4 h-4 text-[#c7adb8] group-hover:text-white transition-colors" />
        </a>
      </div>

      {/* Direct Inquiry Form */}
      <div className="rounded-lg bg-[#180d14] border border-[#3a1a2b] p-5 space-y-4 shadow-lg shadow-black/20">
        <div>
          <h2 className="text-sm font-semibold text-white">Send a Direct Message</h2>
          <p className="text-xs text-[#c7adb8] mt-0.5">
            Leave a message and it will be routed directly to {personalInfo.email}.
          </p>
        </div>

        {isSubmitted ? (
          <div className="p-4 rounded-lg bg-[#24111d] border border-emerald-900/50 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <div className="text-xs font-semibold text-white">Message Dispatched</div>
              <div className="text-[11px] text-[#c7adb8]">
                Opening your email client to complete transmission to {personalInfo.email}.
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-mono text-[#c7adb8] mb-1">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Chen"
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full bg-[#12090e] border border-[#3a1a2b] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#a31d45]"
                />
              </div>
              <div>
                <label className="block text-[11px] font-mono text-[#c7adb8] mb-1">Your Email</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full bg-[#12090e] border border-[#3a1a2b] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#a31d45]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#c7adb8] mb-1">Subject</label>
              <input
                type="text"
                placeholder="Systems project inquiry / Collaboration"
                value={formState.subject}
                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                className="w-full bg-[#12090e] border border-[#3a1a2b] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#a31d45]"
              />
            </div>

            <div>
              <label className="block text-[11px] font-mono text-[#c7adb8] mb-1">Message</label>
              <textarea
                required
                rows={3}
                placeholder="Share project details or ideas..."
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full bg-[#12090e] border border-[#3a1a2b] rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-[#a31d45]"
              />
            </div>

            <button
              type="submit"
              className="w-full h-9 rounded bg-[#24111d] hover:bg-[#341728] border border-[#3a1a2b] hover:border-[#c02652] text-white text-xs font-medium flex items-center justify-center gap-2 transition-all hover:text-[#f47293] hover:shadow-[0_0_12px_rgba(192,38,82,0.2)] cursor-pointer"
            >
              <Send className="w-3.5 h-3.5 text-[#f47293]" />
              <span>Send Message</span>
            </button>
          </form>
        )}
      </div>

      {/* University Campus Card */}
      <div className="rounded-lg bg-[#180d14] border border-[#3a1a2b] p-4 flex items-center justify-between shadow-md shadow-black/20">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-[#24111d] border border-[#3a1a2b] flex items-center justify-center text-[#f47293]">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">REVA University</div>
            <div className="text-[11px] font-mono text-[#c7adb8]">
              Rukmini Knowledge Park, Kattigenahalli, Yelahanka, Bengaluru
            </div>
          </div>
        </div>

        <button
          onClick={onOpenCv}
          className="h-8 px-3 rounded text-xs font-mono bg-[#24111d] border border-[#3a1a2b] hover:border-[#c02652] text-white hover:text-[#f47293] transition-all cursor-pointer shrink-0 shadow-sm"
        >
          View CV
        </button>
      </div>

      {/* Footer */}
      <div className="w-full flex flex-col items-center justify-center pt-2 pb-4 text-center">
        <p className="font-mono text-[11px] text-[#c7adb8]">
          Engineered with precision • REVA Bengaluru
        </p>
      </div>
    </div>
  );
};
