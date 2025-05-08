export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 Apex Jiu Jitsu Academy. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="https://www.instagram.com/apex_academy_bjj/" target="_blank" className="hover:text-yellow-400">Instagram</a>
            <a href="#" className="hover:text-yellow-400">TikTok</a>
          </div>
        </div>
      </footer>
    );
  }