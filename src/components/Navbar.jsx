export default function Navbar({ isMenuOpen, setIsMenuOpen }) {
  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex">
          <img className="h-12 mr-1" src="logo.png"></img>
          <div className="text-2xl font-bold mt-1">Apex Jiu Jitsu Academy</div>
        </div>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>

        <ul className="hidden md:flex gap-6">
          <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#journey" className="hover:text-yellow-400">Journey</a></li>
          <li><a href="#coaches" className="hover:text-yellow-400">Coaches</a></li>
          <li><a href="#register" className="hover:text-yellow-400">Register Now</a></li>
        </ul>

        <ul
          className={`md:hidden flex-col gap-4 absolute top-16 left-0 w-full bg-gray-900 p-4 transition-all duration-500 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          style={{ display: 'flex' }}
        >

          <li><a href="#home" className="hover:text-yellow-400">Home</a></li>
          <li><a href="#about" className="hover:text-yellow-400">About</a></li>
          <li><a href="#journey" className="hover:text-yellow-400">Journey</a></li>
          <li><a href="#coaches" className="hover:text-yellow-400">Coaches</a></li>
          <li><a href="#register" className="hover:text-yellow-400">Register Now</a></li>
        </ul>
      </div>
    </nav>
  );
}