import { useState } from 'react';

const coaches = [
  {
    name: 'Coach Mishal Alfadhli',
    image: '../mishaal-profile.JPG',
    rank: 'MMA & BJJ Black Belt | Certified MMA Coach',
    bio: 'Mishal Alfadhli is a lifelong martial artist who began training at the age of seven and went on to compete professionally in MMA from 2014 to 2018. With mastery-level experience in Muay Thai, Wrestling, Boxing, and both Gi and No-Gi Jiu-Jitsu, he holds an MMA and BJJ Gi Black Belt (2020) and has trained under world-class teams including Pancrase London and Team Joker under the mentorship of Jess Liaudin. Alongside his competitive career, Mishaal is a Certified MMA Conditioning Coach (2016) and an experienced educator with a Bachelor’s in Education, teaching Sports Science, Physics, Biology, Chemistry, and Maths. He has coached at institutions such as the Nasser Centre for Science and Technology, Sports Academy in Luton, UK, and now teaches Boxing and MMA in collaboration with Vfitness Gym (Jaww) and Team 4 Fitness (Riffa). Holding CPR, First Aid, Infection Control, Manual Handling, and Retinal Screening certifications, Coach Mishaal ensures his classes are safe, structured, and guided by a deep understanding of both martial arts and teaching methodology.',
  },
  {
    name: 'Female Coach Coming Soon',
    image: '../placeholder-f.jpg',
    rank: 'N/A',
    bio: 'We currently don\'t have a female coach; however, we are looking for a female coach.',
  },
];

export default function Coaches() {
  const [selectedCoach, setSelectedCoach] = useState(null);

  return (
    <section id="coaches" className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Coaches</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition cursor-pointer"
              onClick={() => setSelectedCoach(coach)}
            >
              <img
                src={coach.image}
                alt={coach.name}
                className="w-40 h-40 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold">{coach.name}</h3>
              <p className="text-gray-600">{coach.rank}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
{selectedCoach && (
        <div
          className="fixed inset-0 bg-[#000000A0] flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedCoach(null)}
        >
          <div
            className="bg-white rounded-2xl p-6 max-w-lg w-full relative shadow-lg overflow-y-auto max-h-[90vh] scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCoach(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>
            <div className="flex flex-col items-center">
              <img
                src={selectedCoach.image}
                alt={selectedCoach.name}
                className="w-32 h-32 object-cover rounded-full mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2 text-center">
                {selectedCoach.name}
              </h3>
              <p className="text-gray-600 mb-4 text-center">
                {selectedCoach.rank}
              </p>
            </div>
            <p className="text-gray-700 text-left leading-relaxed">
              {selectedCoach.bio}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
