// src/components/ImageUploader.tsx
import React, { useState } from 'react';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  isLoading: boolean;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, isLoading }) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleGenerateClick = () => {
    if (selectedFile) {
      onImageUpload(selectedFile);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.classList.add('border-blue-500', 'bg-blue-50');
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.classList.remove('border-blue-500', 'bg-blue-50');
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.classList.remove('border-blue-500', 'bg-blue-50');

    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
      event.dataTransfer.clearData();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      {!previewUrl ? (
        <div
          className="border-2 border-dashed border-gray-300 rounded-3xl p-12 md:p-16 w-full max-w-lg cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-full text-center">
            <svg className="w-20 h-20 text-blue-500 mb-4 animate-bounce-slow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="M12 11a1 1 0 011 1v4a1 1 0 01-2 0v-4a1 1 0 011-1zm0-3a1 1 0 011 1v.001a1 1 0 01-2 0V9a1 1 0 011-1z"/>
            </svg>
            <span className="text-2xl font-bold text-gray-700 mb-2">Seret & Jatuhkan</span>
            <span className="text-lg text-gray-500">atau <span className="text-blue-600 font-semibold">klik untuk unggah</span></span>
            <input id="file-upload" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
          </label>
        </div>
      ) : (
        <div className="w-full max-w-lg flex flex-col items-center">
          <div className="relative w-full h-80 border-4 border-gray-200 rounded-3xl overflow-hidden shadow-2xl mb-8 transform transition-transform duration-300 hover:scale-105">
            <img src={previewUrl} alt="Preview" className="w-full h-full object-cover" />
            <button
              onClick={() => { setSelectedFile(null); setPreviewUrl(null); }}
              className="absolute top-4 right-4 bg-white/70 backdrop-blur-sm text-gray-700 rounded-full p-2 transition-all duration-300 hover:bg-white hover:text-red-500"
              title="Hapus Gambar"
            >
              <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm4.293 12.293a1 1 0 01-1.414 1.414L12 13.414l-2.293 2.293a1 1 0 01-1.414-1.414L10.586 12 8.293 9.707a1 1 0 011.414-1.414L12 10.586l2.293-2.293a1 1 0 011.414 1.414L13.414 12l2.293 2.293z"/>
              </svg>
            </button>
          </div>
          <button
            onClick={handleGenerateClick}
            disabled={isLoading || !selectedFile}
            className={`px-10 py-4 rounded-full font-semibold text-lg transition-all duration-500 shadow-xl
              ${isLoading ? 'bg-gray-400 text-gray-600 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'}`}
          >
            {isLoading ? 'Mengolah...' : 'Generate Prompt'}
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;