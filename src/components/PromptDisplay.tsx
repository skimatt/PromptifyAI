// src/components/PromptDisplay.tsx
import React from 'react';

interface PromptDisplayProps {
  prompt: { description: string; prompt: string };
}

const PromptDisplay: React.FC<PromptDisplayProps> = ({ prompt }) => {
  return (
    <div className="mt-8 p-6 md:p-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border border-gray-100 animate-fadeIn">
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-8">
        Hasil <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Prompt</span> Anda
      </h2>

      {/* Bagian Deskripsi */}
      <div className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
        <div className="flex items-center mb-4">
          <svg className="w-8 h-8 mr-3 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21 15v.231C21 18.067 18.067 21 15.231 21H8.769C5.933 21 3 18.067 3 15.231V8.769C3 5.933 5.933 3 8.769 3h.231V2a1 1 0 012 0v1h1a1 1 0 110 2h-1v1a1 1 0 01-2 0v-1h-.231a3.769 3.769 0 00-3.768 3.768v6.462a3.769 3.769 0 003.768 3.768h6.462a3.769 3.769 0 003.768-3.768V15h.231a1 1 0 011 1zM12 11a1 1 0 011 1v4a1 1 0 01-2 0v-4a1 1 0 011-1zm0-3a1 1 0 011 1v.001a1 1 0 01-2 0V9a1 1 0 011-1z"/>
          </svg>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700">Deskripsi Lengkap</h3>
        </div>
        <p className="mt-2 text-gray-600 leading-relaxed whitespace-pre-wrap">{prompt.description}</p>
      </div>

      {/* Bagian Prompt */}
      <div className="mb-8 p-6 bg-white border border-gray-200 rounded-2xl shadow-lg transform transition-transform duration-300 hover:scale-[1.02] cursor-pointer">
        <div className="flex items-center mb-4">
          <svg className="w-8 h-8 mr-3 text-purple-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="M13 12h-2V7h2v5zm0 2h-2v2h2v-2z"/>
          </svg>
          <h3 className="text-xl md:text-2xl font-semibold text-gray-700">Prompt untuk AI</h3>
        </div>
        <p className="mt-2 text-gray-600 leading-relaxed font-mono whitespace-pre-wrap">{prompt.prompt}</p>
      </div>
      
      {/* Tampilan JSON Mentah */}
      <div className="mt-6 p-6 bg-gray-800 text-green-400 rounded-xl font-mono text-sm overflow-auto whitespace-pre-wrap shadow-inner">
        <code>{JSON.stringify(prompt, null, 2)}</code>
      </div>
    </div>
  );
};

export default PromptDisplay;