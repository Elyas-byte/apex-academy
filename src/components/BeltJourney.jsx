import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const belts = [
  {
    title: "⚪ White Belt – Fundamentals",
    sections: {
      "Core Focus": [
        "Fundamentals, basic positions, escapes, and self-defense",
        "Introduction to Brazilian Jiu-Jitsu history and philosophy",
        "Importance of ground fighting and self-defense",
        "How to conduct oneself in training",
        "Crucial importance of fundamentals"
      ],
      "Techniques": [
        "Tying the belt",
        "Rolling and breaking a fall",
        "Escape from mounted position (Upa)",
        "Defense against two-handed front choke",
        "Wrist grab defenses",
        "Offensive hip throw",
        "Defense against single-handed lapel grab",
        "Front collar choke",
        "Defense against standing side headlock",
        "Defense against rear bear hug",
        "Thrusting choke (Amassa Pão) and defense",
        "Defense against front-thrusting kick",
        "Introduction to sparring"
      ]
    },
  },
  {
    title: "🔵 Blue Belt – Guard & Attacks",
    sections: {
      "Core Focus": [
        "Guard passing, sweeps, attacks from mount and guard",
        "Advanced escapes",
        "Positional strategy of Brazilian Jiu-Jitsu",
        "Detailed analysis of basic positions in ground grappling",
        "Importance of technical progress"
      ],
      "Techniques": [
        "Passing the guard",
        "Scissors sweep",
        "Attacks from mounted position (Americana, arm bar)",
        "Defense against guillotine choke",
        "Standing guard pass",
        "Double ankle grab sweep and counters",
        "Double leg sweep to arm bar",
        "Push sweep",
        "Elevator sweep",
        "Headlock escapes",
        "Elbow escape from bottom of across-side position",
        "Defense against front bear hug, standing rear choke, and bear hug over the arms",
        "Attack from guard position (Kimura)",
        "Guillotine choke and defense",
        "Defense against shoulder grab and throat grab",
        "Side kick",
        "Elbow strikes",
        "Rear naked choke (Mata Leão)",
        "Defense against double-lapel grab",
        "Triangle choke",
        "Elbow escape drill and from mounted position",
        "Arm bar from guard position",
        "Collar chokes",
        "Transition from mounted position to rear-mounted position",
        "Double leg takedown (Baiana)"
      ]
    },
  },
  {
    title: "🟣 Purple Belt – Transitions & Advanced Techniques",
    sections: {
      "Core Focus": [
        "Transitions, advanced sweeps, leg locks, and submissions",
        "Developing a personal style",
        "Adapting techniques to different body types",
        "Importance of training with a variety of partners"
      ],
      "Techniques": [
        "Moving from across-side position to mounted position",
        "Handstand sweep",
        "Achilles' ankle lock",
        "Defense against hand on chest",
        "Standing up properly in a street fight",
        "Shoulder lock using the legs (Omoplata)",
        "Arm-inside sweep and arm bar",
        "Kimura lock",
        "Strangle from across-side",
        "Defending the arm-inside guillotine choke",
        "Knee-on-stomach position and defense",
        "Arm bar from knee-on-stomach position",
        "Transition from triangle choke to arm bar",
        "Finger lock",
        "Stacking the guard position into an ankle lock",
        "Defense against a rear two-handed grab",
        "Knee-bar attack from inside the guard position",
        "Sweep from seated open (butterfly) guard",
        "Overhead sweep",
        "Leg-binding sweep",
        "Front lapel stranglehold",
        "Arm bar from across-side position"
      ]
    },
  },
  {
    title: "🟤 Brown Belt – Advanced Escapes & Half Guard",
    sections: {
      "Core Focus": [
        "Advanced escapes, transitions, submissions",
        "Half guard techniques",
        "Refining reactions and reflexes",
        "Developing a complete game",
        "Adapting to different training partners"
      ],
      "Techniques": [
        "Escape from standing headlock",
        "Escape from being pushed against a wall",
        "Moving from north-south position to opponent's back",
        "North-south position into toehold",
        "Ankle lock attack from open guard",
        "Knee bar from across-side position",
        "Kimono neck crank submission from across-side position",
        "Stranglehold from knee-on-stomach position",
        "Pressing arm lock and turning shoulder lock from across-side position",
        "Getting to opponent's back from guard position",
        "Foot lock counter to rear-mounted position",
        "Helicopter arm bar",
        "Sickle sweep and hook sweep",
        "Passing the half guard"
      ]
    },
  },
  {
    title: "⚫ Black Belt – Mastery & Variations",
    sections: {
      "Core Focus": [
        "Advanced techniques, variations, combinations",
        "No-gi grappling",
        "Advanced teaching methodologies",
        "Developing a personal teaching style",
        "Adapting instruction to individual student needs"
      ],
      "Techniques": [
        "Triangle choke from underneath north-south position",
        "Escape from north-south position",
        "Kick-over sweep and spider guard sweep",
        "Passing half guard into mounted position",
        "Front shoulder choke from guard position",
        "Transition from mounted position to side-mounted stranglehold",
        "Defense against one-handed choke against a wall",
        "Breaking out of a headlock into an arm bar",
        "Star sweep",
        "Knee bar from closed guard position",
        "Pulling guard to arm lock",
        "Passing the guard to arm lock and figure-four foot locks",
        "Passing the spider guard",
        "Butterfly guard spin purs",
        "Across-side to triangle choke, arm lock, omoplata, key lock, collar and leg choke",
        "Collar choke variations",
        "Mount variations",
        "Taking the back from turtle position",
        "Guard wing sweep",
        "Arm lock from scissors sweep",
        "Closed guard arm-lock variations",
        "Open guard to shoulder locks",
        "Sitting guard sweeps",
        "No-gi techniques including mount to arm lock and triangle, across the side to head and arm choke, guard pass to knee bar, half guard sweep"
      ]
    },
  },
];

const BeltJourney = () => {
  const [active, setActive] = React.useState(null);

  return (
    <div id="journey" className="max-w-4xl mx-auto px-4 py-8 scroll-mt-20">
      <h1 className="text-4xl font-bold text-center text-black mb-10">
        Apex Jiu-Jitsu Academy Curriculum
      </h1>
      <div className="relative border-l-4 border-black">
        {belts.map((belt, index) => (
          <div key={index} className="ml-6 mb-8 relative">
            <div className="absolute -left-[31px] top-1.5 w-5 h-5 rounded-full bg-gray-900 border-2 border-white shadow" />
            <button
              onClick={() => setActive(active === index ? null : index)}
              className="text-left w-full group"
            >
              <h2 className="text-2xl font-semibold text-black group-hover:text-[#FFD700] transition">
                {belt.title}
              </h2>
            </button>
            <AnimatePresence>
              {active === index && (
                <motion.div
                  className="mt-4 pl-3 border-l-2 border-[#0a1f44] space-y-4"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {Object.entries(belt.sections).map(([section, points], i) => (
                    <div key={i}>
                      <h3 className="font-medium text-black">{section}</h3>
                      <ul className="list-disc list-inside text-sm text-black space-y-1">
                        {points.map((point, j) => (
                          <li key={j}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BeltJourney;