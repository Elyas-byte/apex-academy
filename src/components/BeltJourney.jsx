import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const belts = [
  {
    title: "⚪ White Belt – Serious Play",
    sections: {
      Learn: [
        "Four major positions",
        "Mount (Defensive/Offensive)",
        "Side Control (Defensive/Offensive)",
        "Guard (Defensive/Offensive)",
        "Back (Defensive/Offensive)",
        "No ego Sparring",
      ],
      Escapes: [
        "Side Control",
        "Pass Guard",
        "Escape Back Control",
        "Escape the Mount",
      ],
      "Offensive from Back": [
        "Rear Naked Choke",
        "Bow and Arrow Choke",
        "Armbar / Triangle",
        "Armbar",
        "Omoplata",
        "Triangle",
        "Collar Choke",
        "Cross Body Choke",
        "Lapel Americana",
      ],
      "Half Guard": [
        "Defensive Butterfly Guard",
        "Offensive",
        "Sweeps & Leglocks",
      ],
      "Offensive Mount Attacks": ["Chokes", "Armbar", "Triangles"],
    },
  },
  {
    title: "🔵 Blue Belt – Skilled",
    sections: {
      "What to Master": [
        "50 techniques demonstrated",
        "Simplified, complete game",
        "Defend against bigger non-JJ opponents",
        "Roll effectively, sneaky techniques",
        "Leg locks, takedowns, guard/mount attacks",
      ],
      Growth: [
        "Go deeper into techniques",
        "Setup, timing, sensitivity refinement",
      ],
    },
  },
  {
    title: "🟣 Purple Belt – Advanced Learner",
    sections: {
      Fluidity: [
        "Smooth transitions",
        "Chain multiple escapes",
        "Chokes with detail",
        "Elegant momentum usage",
        "Less strength, more technique",
      ],
      Focus: ["Discard noise, refine what works", "Apply pressure, stay fluid"],
    },
  },
  {
    title: "🟤 Brown Belt – Teaching & Pressure",
    sections: {
      Skills: [
        "Apply strong pressure",
        "Play more guard, focus on chokes",
        "Start mentoring lower belts",
        "Focus on student basics (hip movement, etc.)",
      ],
    },
  },
  {
    title: "⚫ Black Belt – Mastery",
    sections: {
      Mastery: [
        "Simplify your Jiu Jitsu game to max effect with min effort",
        "Calm defense – do almost nothing",
        "Perfect setups, funnel opponents",
        "Symphony of execution",
        "Mold others through knowledge transfer",
      ],
    },
  },
];


const BeltJourney = () => {
  const [active, setActive] = React.useState(null);

  return (
    <div id="journey" className="max-w-4xl mx-auto px-4 py-8 scroll-mt-20">
      <h1 className="text-4xl font-bold text-center text-black mb-10">
        Belt Journey
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
