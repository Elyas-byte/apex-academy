import { useRef } from "react";
export default function Hero() {
  return (
    <section
      id="home"
      className="bg-[linear-gradient(to_bottom,rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('https://apexacademybh.org/image-hero-sample.jpg')] scroll-mt-20 bg-cover bg-center h-screen flex items-center justify-center text-white"
    >
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Master the Art of </h1><h1 className="text-5xl md:text-6xl font-bold mb-4 text-blue-600">Jiu Jitsu</h1>
        <p className="text-xl mb-8">Experience authentic Brazilian Jiu-Jitsu in Bahrain, brought to you by <br></br>Apex Academy Founded by real MMA fighters & black belts originally from the UK.</p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-6 rounded-lg transition" onClick={() => {
          const el = document.getElementById('register');
          el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
          
        }}
        >
          Register Now
        </button>
      </div>
    </section>
  );
}
