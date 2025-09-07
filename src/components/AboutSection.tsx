// src/components/AboutSection.tsx

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50 text-gray-800 font-sans animate-fadeIn">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 animate-fadeInUp">
            Tentang <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">PromptifyAI</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 animate-fadeInUp delay-200">
            Jembatan antara imajinasi dan realitas digital.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200 animate-fadeIn delay-300">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Apa itu PromptifyAI?</h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            PromptifyAI adalah alat revolusioner yang memanfaatkan kecerdasan dari model bahasa PromptifyAI untuk mengubah visual kompleks menjadi instruksi verbal yang akurat. Kami menghilangkan tebak-tebakan dalam membuat prompt dan memungkinkan Anda fokus pada kreativitas.
          </p>

          <h3 className="text-2xl font-bold text-gray-800 mb-6">Bagaimana Kami Bekerja?</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center mb-10">
            <div className="p-6 rounded-2xl bg-blue-50 shadow-md transform transition-transform duration-300 hover:scale-105">
              <svg className="w-16 h-16 mx-auto mb-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 15v.231C21 18.067 18.067 21 15.231 21H8.769C5.933 21 3 18.067 3 15.231V8.769C3 5.933 5.933 3 8.769 3h.231V2a1 1 0 012 0v1h1a1 1 0 110 2h-1v1a1 1 0 01-2 0v-1h-.231a3.769 3.769 0 00-3.768 3.768v6.462a3.769 3.769 0 003.768 3.768h6.462a3.769 3.769 0 003.768-3.768V15h.231a1 1 0 011 1zM12 11a1 1 0 011 1v4a1 1 0 01-2 0v-4a1 1 0 011-1zM12 7a1 1 0 011 1v.001a1 1 0 01-2 0V8a1 1 0 011-1z"/>
              </svg>
              <h4 className="font-semibold text-lg text-gray-800 mb-1">1. Analisis Visual</h4>
              <p className="text-sm text-gray-600">PromptifyAI menganalisis komposisi, gaya, dan detail gambar.</p>
            </div>
            <div className="p-6 rounded-2xl bg-purple-50 shadow-md transform transition-transform duration-300 hover:scale-105">
              <svg className="w-16 h-16 mx-auto mb-4 text-purple-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="M13 12h-2V7h2v5zm0 2h-2v2h2v-2z"/>
              </svg>
              <h4 className="font-semibold text-lg text-gray-800 mb-1">2. Generasi Prompt</h4>
              <p className="text-sm text-gray-600">AI membuat deskripsi dan prompt yang dioptimalkan dalam format JSON.</p>
            </div>
            <div className="p-6 rounded-2xl bg-green-50 shadow-md transform transition-transform duration-300 hover:scale-105">
              <svg className="w-16 h-16 mx-auto mb-4 text-green-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/><path d="M12 11a1 1 0 011 1v4a1 1 0 01-2 0v-4a1 1 0 011-1zm0-3a1 1 0 011 1v.001a1 1 0 01-2 0V9a1 1 0 011-1z"/>
              </svg>
              <h4 className="font-semibold text-lg text-gray-800 mb-1">3. Output Terstruktur</h4>
              <p className="text-sm text-gray-600">Hasilnya siap digunakan langsung di platform seperti Midjourney dan DALL·E.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;