// src/components/Footer.tsx
const Footer = ({ id }: { id?: string }) => {
  return (
    <footer id={id} className="bg-white border-t border-gray-200 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        {/* Tentang Saya */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Tentang Saya</h2>
          <p className="text-gray-600 leading-relaxed">
            Saya, <strong>Rahmat Mulia</strong>, membangun aplikasi ini dengan hati ✨ untuk membantu kamu menghasilkan
            <span className="text-blue-600 font-medium"> Prompt AI </span>
            yang lebih presisi dan kreatif. Semoga bermanfaat dan terus berkembang.
          </p>
        </div>

        {/* Sosial Media */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">maybe u neet</h2>
          <div className="flex space-x-6 items-center">
            {/* Instagram */}
            <a
              href="https://instagram.com/skimatt_"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/6282239434989"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="hover:scale-110 transition-transform"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="w-6 h-6"
              />
            </a>

           
          </div>
        </div>
      </div>

      {/* Credit */}
      <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} PromptifyAI — 💙 oleh Rahmat Mulia.
      </div>
    </footer>
  );
};

export default Footer;
