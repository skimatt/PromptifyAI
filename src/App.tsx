// src/App.tsx
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import ImageUploader from './components/ImageUploader';
import PromptDisplay from './components/PromptDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import { useImageProcessor } from './hooks/useImageProcessor';

function App() {
  const { result, isLoading, error, processImage } = useImageProcessor();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-800 font-sans">
      <Navbar />

      {/* HERO SECTION */}
      <main
        id="home"
        className={`pt-28 md:pt-36 pb-16 px-4 md:px-8 transition-opacity duration-1000 ease-in-out ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight text-gray-900 font-serif mb-6 animate-fadeInUp">
            Ubah Gambar Menjadi <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
              Prompt AI yang Presisi
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed animate-fadeInUp delay-200">
            Upload gambar dan biarkan AI <strong>PromptifyAI</strong> menganalisis gaya visual, komposisi, dan detailnya
            untuk menghasilkan prompt yang kreatif dan tepat sasaran.
          </p>
        </section>

        {/* UPLOADER SECTION */}
        <section className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-3xl shadow-xl p-6 md:p-10 animate-fadeInUp delay-300">
          <div className="mb-8">
            <ImageUploader onImageUpload={processImage} isLoading={isLoading} />
          </div>

          {/* LOADING */}
          {isLoading && (
            <div className="mt-8 text-center animate-pulse">
              <LoadingSpinner />
              <p className="mt-4 text-gray-500 italic">AI sedang mengolah gambar Anda. Mohon tunggu sebentar...</p>
            </div>
          )}

          {/* ERROR */}
          {error && (
            <div className="mt-8 p-4 text-red-700 bg-red-100 border border-red-200 rounded-lg animate-fadeIn">
              {error}
            </div>
          )}

          {/* RESULT */}
          {result && (
            <div className="mt-8 animate-fadeIn">
              <PromptDisplay prompt={result} />
            </div>
          )}
        </section>
      </main>

      {/* ABOUT SECTION */}
      <AboutSection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
