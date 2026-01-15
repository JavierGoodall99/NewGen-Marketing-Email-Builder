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
          <div className="w-8 h-8 rounded bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-black text-sm md:text-base">N</div>
          <h1 className="font-semibold text-base md:text-lg tracking-tight">NewGen <span className="text-gray-400 font-normal hidden sm:inline">Email Builder</span></h1>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-xs text-gray-500 hidden lg:block">
            {htmlOutput.length.toLocaleString()} characters
          </span>
          <button
            onClick={handleCopyToClipboard}
            className={`flex items-center gap-2 px-3 md:px-4 py-2 rounded text-xs md:text-sm font-medium transition-all ${
              copyStatus === 'copied' 
                ? 'bg-green-500/20 text-green-400 border border-green-500/50' 
                : 'bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_15px_rgba(6,182,212,0.3)]'
            }`}
          >
            {copyStatus === 'copied' ? (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
                <span className="hidden sm:inline">Copied!</span>
                <span className="sm:hidden">Copied</span>
              </>
            ) : (
              <>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M15.75 4.5a3 3 0 11.825 2.066l-8.421 4.679a2.63 2.63 0 00-1.103-1.04l-2.5-1.5a2.625 2.625 0 10-2.296 4.167 2.625 2.625 0 002.348-1.38L12.5 7.5a1.5 1.5 0 111.104 2.856l-8.354 4.177a2.625 2.625 0 00.865 4.717 2.625 2.625 0 102.13-4.226l8.472-4.236a2.99 2.99 0 012.033.212z" clipRule="evenodd" />
                  <path fillRule="evenodd" d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v.75c0 1.036.84 1.875 1.875 1.875h17.25c1.035 0 1.875-.84 1.875-1.875v-.75C22.5 3.839 21.66 3 20.625 3H3.375z" clipRule="evenodd" />
                </svg>
                <span className="hidden sm:inline">Copy Code</span>
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
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                              <path d="M11.47 3.84a.75.75 0 011.06 0l8.632 8.632a.75.75 0 01-1.06 1.06l-.812-.812V19.5a.75.75 0 01-.75.75H5.46a.75.75 0 01-.75-.75V12.72l-.812.812a.75.75 0 01-1.06-1.06L11.47 3.84z" />
                              <path d="M2.25 21a.75.75 0 01.75-.75H21a.75.75 0 010 1.5H3a.75.75 0 01-.75-.75z" />
                            </svg>
                          </button>
                          <button 
                            onClick={() => setViewMode('tablet')}
                            className={`p-1.5 rounded-md transition-all ${viewMode === 'tablet' ? 'bg-zinc-700 text-cyan-400' : 'text-zinc-500 hover:text-zinc-300'}`}
                            title="Tablet View (max-width: 620px)"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                              <path d="M10.5 1.875a1.125 1.125 0 012.25 0v2.25a1.125 1.125 0 01-2.25 0v-2.25zM12 9.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0V9.75z" />
                              <path fillRule="evenodd" d="M6.375 1.5a4.875 4.875 0 00-4.875 4.875v11.25c0 2.692 2.183 4.875 4.875 4.875h11.25c2.692 0 4.875-2.183 4.875-4.875V6.375c0-2.692-2.183-4.875-4.875-4.875H6.375zm14.625 4.875a3.375 3.375 0 00-3.375-3.375H6.375a3.375 3.375 0 00-3.375 3.375v11.25a3.375 3.375 0 003.375 3.375h11.25a3.375 3.375 0 003.375-3.375V6.375z" clipRule="evenodd" />
                            </svg>
                          </button>
                          <button 
                            onClick={() => setViewMode('mobile')}
                            className={`p-1.5 rounded-md transition-all ${viewMode === 'mobile' ? 'bg-zinc-700 text-cyan-400' : 'text-zinc-500 hover:text-zinc-300'}`}
                            title="Mobile View (max-width: 480px)"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                              <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                              <path fillRule="evenodd" d="M8.625.75A3.375 3.375 0 005.25 4.125v15.75a3.375 3.375 0 003.375 3.375h6.75a3.375 3.375 0 003.375-3.375V4.125A3.375 3.375 0 0015.375.75h-6.75zM7.5 4.125C7.5 3.504 8.004 3 8.625 3h6.75c.621 0 1.125.504 1.125 1.125v15.75c0 .621-.504 1.125-1.125 1.125h-6.75A1.125 1.125 0 017.5 19.875V4.125z" clipRule="evenodd" />
                            </svg>
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