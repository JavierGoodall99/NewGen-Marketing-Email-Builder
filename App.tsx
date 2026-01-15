import React, { useState, useEffect, useRef } from 'react';
import Editor from './components/Editor';
import { generateEmailHtml } from './utils/emailTemplate';
import { INITIAL_EMAIL_DATA, EmailData } from './types';

type ViewMode = 'desktop' | 'tablet' | 'mobile';
type MobileTab = 'editor' | 'preview';

function App() {
  const [emailData, setEmailData] = useState<EmailData>(INITIAL_EMAIL_DATA);
  const [htmlOutput, setHtmlOutput] = useState('');
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');
  const [viewMode, setViewMode] = useState<ViewMode>('desktop');
  const [mobileTab, setMobileTab] = useState<MobileTab>('editor');
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Regenerate HTML whenever data changes
  useEffect(() => {
    const html = generateEmailHtml(emailData);
    setHtmlOutput(html);

    // Update iframe content safely
    if (iframeRef.current) {
      const doc = iframeRef.current.contentDocument;
      if (doc) {
        doc.open();
        doc.write(html);
        doc.close();
      }
    }
  }, [emailData]);

  const handleCopyToClipboard = () => {
    // Extract content starting from <head> tag to the closing </body> tag
    const startIndex = htmlOutput.indexOf('<head>');
    const endIndex = htmlOutput.indexOf('</body>');

    let contentToCopy = htmlOutput;

    if (startIndex !== -1 && endIndex !== -1) {
      // Include </body> (length is 7)
      contentToCopy = htmlOutput.substring(startIndex, endIndex + 7);
    }

    navigator.clipboard.writeText(contentToCopy).then(() => {
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2000);
    });
  };

  // Width calculation based on specific email template breakpoints
  const getPreviewStyle = () => {
    switch (viewMode) {
      case 'mobile':
        return { width: '375px', height: '100%' };
      case 'tablet':
        return { width: '550px', height: '100%' };
      case 'desktop':
      default:
        return { width: '100%', maxWidth: '800px', height: '100%' };
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white font-sans overflow-hidden">
      {/* Top Bar */}
      <header className="h-14 border-b border-zinc-800 bg-zinc-900/50 flex items-center justify-between px-4 md:px-6 shrink-0 z-10">
        <div className="flex items-center gap-3">
          <img src="/newgenlogoBG.png" alt="NewGen Logo" className="w-8 h-8 object-contain rounded" />
          <h1 className="font-semibold text-base md:text-lg tracking-tight">NewGen Marketing</h1>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleCopyToClipboard}
            className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded text-xs md:text-sm font-medium transition-all ${copyStatus === 'copied'
                ? 'bg-green-500/20 text-green-400 border border-green-500/50'
                : 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_15px_rgba(6,182,212,0.3)]'
              }`}
          >
            {copyStatus === 'copied' ? (
              <>
                <span className="hidden sm:inline">Copied!</span>
                <span className="sm:hidden">Copied</span>
              </>
            ) : (
              <>
                <span className="hidden sm:inline">Copy Template</span>
                <span className="sm:hidden">Copy</span>
              </>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Tabs */}
      <div className="md:hidden flex border-b border-zinc-800 bg-zinc-900 shrink-0">
        <button
          onClick={() => setMobileTab('editor')}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${mobileTab === 'editor' ? 'text-cyan-400 border-b-2 border-cyan-400 bg-zinc-800/50' : 'text-gray-400 hover:text-gray-200'}`}
        >
          Editor
        </button>
        <button
          onClick={() => setMobileTab('preview')}
          className={`flex-1 py-3 text-sm font-medium transition-colors ${mobileTab === 'preview' ? 'text-cyan-400 border-b-2 border-cyan-400 bg-zinc-800/50' : 'text-gray-400 hover:text-gray-200'}`}
        >
          Preview
        </button>
      </div>

      {/* Main Content Area */}
      <div className="flex flex-1 overflow-hidden relative">
        {/* Left Sidebar - Editor */}
        <div className={`
          w-full md:w-[450px] h-full bg-zinc-900 border-r border-zinc-800 shrink-0 z-20 shadow-2xl transition-all
          ${mobileTab === 'editor' ? 'block' : 'hidden md:block'}
        `}>
          <Editor data={emailData} onChange={setEmailData} />
        </div>

        {/* Right Area - Preview */}
        <div className={`
          flex-1 h-full bg-neutral-900 relative flex-col
          ${mobileTab === 'preview' ? 'flex' : 'hidden md:flex'}
        `}>
          <div className="absolute inset-0 flex items-center justify-center p-8 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

          <div className="flex-1 flex flex-col overflow-hidden relative z-10">
            <div className="flex-1 overflow-auto flex md:items-center justify-center p-4 md:p-8">
              <div
                className="flex flex-col bg-zinc-800 rounded-xl overflow-hidden shadow-2xl border border-zinc-700 transition-all duration-500 ease-in-out shrink-0"
                style={getPreviewStyle()}
              >
                {/* Browser Mockup Header */}
                <div className="bg-zinc-900 px-4 py-2 border-b border-zinc-800 flex items-center justify-between shrink-0 h-10">
                  <div className="w-14"></div>

                  {/* Device Switcher */}
                  <div className="flex items-center gap-1 bg-black/40 rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('desktop')}
                      className={`p-1.5 rounded-md transition-all ${viewMode === 'desktop' ? 'bg-zinc-700 text-cyan-400' : 'text-zinc-500 hover:text-zinc-300'}`}
                      title="Desktop View"
                    >
                      <img src="https://cdn-icons-png.flaticon.com/512/482/482469.png" alt="Desktop View" className="brightness-0 invert opacity-70 w-5 h-5" />
                    </button>
                    <button
                      onClick={() => setViewMode('tablet')}
                      className={`p-1.5 rounded-md transition-all ${viewMode === 'tablet' ? 'bg-zinc-700 text-cyan-400' : 'text-zinc-500 hover:text-zinc-300'}`}
                      title="Tablet View"
                    >
                      <img src="https://cdn-icons-png.flaticon.com/512/7192/7192457.png" alt="Tablet View" className="brightness-0 invert opacity-70 w-5 h-5 " />
                    </button>
                    <button
                      onClick={() => setViewMode('mobile')}
                      className={`p-1.5 rounded-md transition-all ${viewMode === 'mobile' ? 'bg-zinc-700 text-cyan-400' : 'text-zinc-500 hover:text-zinc-300'}`}
                      title="Mobile View"
                    >
                      <img src="https://cdn-icons-png.flaticon.com/512/4443/4443113.png" alt="Mobile View" className="brightness-0 invert opacity-70 w-6 h-6" />
                    </button>
                  </div>

                  <div className="w-14"></div> {/* Spacer for symmetry */}
                </div>

                {/* The Email Iframe */}
                <div className="flex-1 bg-white relative w-full overflow-hidden">
                  <iframe
                    ref={iframeRef}
                    title="Email Preview"
                    className="absolute inset-0 w-full h-full border-0"
                    sandbox="allow-same-origin"
                  />
                </div>
              </div>
            </div>

            <div className="h-8 bg-zinc-900 border-t border-zinc-800 flex items-center justify-center text-[10px] text-zinc-500 uppercase tracking-widest gap-2 shrink-0">
              <span className={viewMode === 'desktop' ? 'text-cyan-500' : ''}>Desktop</span> &bull;
              <span className={viewMode === 'tablet' ? 'text-cyan-500' : ''}>Tablet</span> &bull;
              <span className={viewMode === 'mobile' ? 'text-cyan-500' : ''}>Mobile</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;