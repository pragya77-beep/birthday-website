import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cake, Heart } from "lucide-react";
import spiderman from "./spiderman.png";

export default function App() {
  const [age, setAge] = useState(25);
  const [stage, setStage] = useState(0);
  const reasons = [
    "You have the purest of heart and cutest of puppy face",
    "You are my DUDU always and forever till we grow old",
    "Your are my hero <3 spiderman for the world dudupipipoo for me",
    "You give the best hugs and cuddles ALWAYS",
    "Your smile brightens my day :)",
    "You're always there for me when i need you",
    "You have the best taste in music MUUSSSTAAARDDD",
    "Your determination inspires me to be a better person everyday",
    "You are my favorite adventure buddy",
    "You support my dreams thank you dudu",
    "You make ordinary moments special for me even if its just walking back from LT",
    "You're my safe place",
    "You're the first person I want to share good news with",
    "Your hugs cure bad days",
    "You never give up on the things you love",
    "Your heart is pure gold",
    "You make me feel loved every day",
    "You're an amazing listener",
    "You’re always up for spontaneous fun hehe (esp in sheares)",
    "You have the best late-night thoughts eventhough bubu cannot keep track sometimes",
    "You are ADORABLE",
    "You're my favorite person to do nothing with",
    "You always know how to cheer me up",
    "You're just… the best MY BABY",
    "I lAAAAV YOUU, simply and completely."
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-300 to-red-300 p-6 text-center">
      {stage === 0 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <img src={spiderman} alt="Spiderman" className="w-40 h-40" />
          <h1 className="text-4xl font-bold text-white mt-4">Spidey Levels Up!</h1>
          <p className="text-lg text-gray-100 mt-2">From {age} to {age + 1}! 🎉</p>
          <Button 
            className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-lg"
            onClick={() => setStage(1)}
          >
            Claim Your Cheesecakes 🍰🍰
          </Button>
        </motion.div>
      )}

      {stage === 1 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <Cake size={60} className="text-yellow-500" />
          <h1 className="text-3xl font-bold text-white mt-4">Two Cheesecakes Just for You! 🎂</h1>
          <p className="text-lg text-gray-100 mt-2">Because one isn’t enough for the birthday hero.</p>
          <Button 
            className="mt-4 bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-6 rounded-lg"
            onClick={() => setStage(2)}
          >
            Next: Hugs & 26 Reasons ❤️
          </Button>
        </motion.div>
      )}

      {stage === 2 && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <Heart size={60} className="text-red-500" />
          <h1 className="text-3xl font-bold text-white mt-4">Hugs & 26 Reasons Why I Love You ❤️</h1>
          <div className="mt-4 text-gray-100 text-lg">
            {reasons.map((reason, index) => (
              <p key={index} className="mt-2">{index + 1}. {reason}</p>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}