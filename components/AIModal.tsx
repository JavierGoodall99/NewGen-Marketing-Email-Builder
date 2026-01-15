import React, { useState } from 'react';
import { rewriteText } from '../services/geminiService';

interface AIModalProps {
  isOpen: boolean;
  onClose: () => void;
  originalText: string;
  onApply: (newText: string) => void;
}

const AIModal: React.FC<AIModalProps> = ({ isOpen, onClose, originalText, onApply }) => {
  const [instruction, setInstruction] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedText, setGeneratedText] = useState('');

  if (!isOpen) return null;

  const handleGenerate = async () => {
    setIsGenerating(true);
    const result = await rewriteText(originalText, instruction || "Make it more persuasive and professional.");
    setGeneratedText(result);
    setIsGenerating(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm p-4">
      <div className="w-full max-w-lg bg-zinc-900 border border-zinc-700 rounded-xl shadow-2xl flex flex-col max-h-[90vh]">
        <div className="flex justify-between items-center p-4 md:p-6 border-b border-zinc-800 shrink-0">
          <h3 className="text-lg md:text-xl font-bold text-white flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 text-cyan-400">
              <path fillRule="evenodd" d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813a3.75 3.75 0 002.576-2.576l.813-2.846A.75.75 0 019 4.5zM9 15a.75.75 0 01.75.75v1.5h1.5a.75.75 0 010 1.5h-1.5v1.5a.75.75 0 01-1.5 0v-1.5h-1.5a.75.75 0 010-1.5h1.5v-1.5A.75.75 0 019 15z" clipRule="evenodd" />
            </svg>
            AI Assistant
          </h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-4 md:p-6 overflow-y-auto">
          <div className="mb-4">
            <label className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Original Text</label>
            <div className="p-3 bg-zinc-800 rounded text-gray-300 text-sm max-h-32 overflow-y-auto border border-zinc-700">
              {originalText.length > 150 ? originalText.substring(0, 150) + "..." : originalText}
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Instruction</label>
            <input
              type="text"
              className="w-full bg-black border border-zinc-700 rounded p-3 text-white focus:border-cyan-500 focus:outline-none transition"
              placeholder="e.g., 'Make it punchier', 'More formal', 'Shorter'"
              value={instruction}
              onChange={(e) => setInstruction(e.target.value)}
            />
          </div>

          {generatedText && (
            <div className="mb-2">
               <label className="block text-xs uppercase tracking-wider text-cyan-500 font-semibold mb-2">Generated Result</label>
               <textarea 
                 readOnly 
                 className="w-full h-32 bg-zinc-800/50 border border-cyan-500/30 rounded p-3 text-cyan-50 focus:outline-none resize-none"
                 value={generatedText}
               />
            </div>
          )}
        </div>

        <div className="p-4 md:p-6 border-t border-zinc-800 bg-zinc-900/50 flex justify-end gap-3 shrink-0 rounded-b-xl">
           <button 
            onClick={handleGenerate} 
            disabled={isGenerating}
            className={`px-4 py-2 rounded font-medium text-sm transition-colors ${isGenerating ? 'bg-zinc-700 text-gray-400 cursor-not-allowed' : 'bg-zinc-800 hover:bg-zinc-700 text-white'}`}
          >
            {isGenerating ? 'Thinking...' : generatedText ? 'Regenerate' : 'Generate'}
          </button>
          
          {generatedText && (
             <button 
             onClick={() => {
                onApply(generatedText);
                onClose();
             }}
             className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-black font-bold rounded text-sm transition-all"
           >
             Use Text
           </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIModal;