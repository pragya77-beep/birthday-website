import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Cake, Heart, MailOpen, Music, StopCircle } from "lucide-react";
import spiderman from "./spiderman.png";
import marioMusic from "./mario.mp3";
import catImage from "./cat.jpg";

export default function App() {
  const [age, setAge] = useState(25);
  const [stage, setStage] = useState(0);
  const [openedLetters, setOpenedLetters] = useState(Array(25).fill(false));
  const [audio, setAudio] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const reasons = [
    "You have the cutest of puppy face",
    "You are my DUDU always and forever till we grow old",
    "Your are my hero <3 spiderman for the world dudupipipoo for me",
    "You give the best hugs and cuddles ALWAYS",
    "Your smile brightens my day :)",
    "You're always there for me when I need you",
    "You have the best taste in music MUUSSSTAAARDDD",
    "Your determination inspires me to be a better person everyday",
    "You are my favorite adventure buddy",
    "You support my dreams, thank you dudu",
    "You make ordinary moments special for me even if it's just walking back from LT",
    "You're my safe place",
    "You're the first person I want to share good news with",
    "Your hugs cure bad days",
    "You never give up on the things you love",
    "Your heart is pure gold",
    "You make me feel loved every day",
    "You're an amazing listener",
    "You’re always up for spontaneous fun hehe (esp in Sheares)",
    "You have the best late-night thoughts even though bubu cannot keep track sometimes",
    "You are ADORABLE",
    "You're my favorite person to do nothing and EVERYTHING with",
    "You always know how to cheer me up with SNEKS",
    "You're just… the best MY BABY",
    "I lAAAAV YOUU, simply and completely. HAPPIEST BIRTHDAYYYY"
  ];

  useEffect(() => {
    const newAudio = new Audio(marioMusic);
    newAudio.loop = true;
    setAudio(newAudio);
  }, []);

  const playMusic = () => {
    if (audio) {
      audio.play();
      setIsPlaying(true);
    }
  };

  const stopMusic = () => {
    if (audio) {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const openLetter = (index) => {
    const newLetters = [...openedLetters];
    newLetters[index] = true;
    setOpenedLetters(newLetters);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 p-6 text-center relative overflow-hidden">
      <div className="absolute top-4 right-4 flex gap-4">
        {!isPlaying && (
          <button 
            className="bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2"
            onClick={playMusic}
          >
            <Music size={20} /> Play Music 🎵
          </button>
        )}
        {isPlaying && (
          <button 
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg flex items-center gap-2"
            onClick={stopMusic}
          >
            <StopCircle size={20} /> Stop Music ⏹️
          </button>
        )}
      </div>

      {stage === 0 && (
        <motion.div className="flex flex-col items-center">
          <motion.img 
            src={spiderman} 
            alt="Spiderman" 
            className="w-40 h-40 cursor-pointer" 
            whileHover={{ x: 100, y: -50 }}
          />
          <h1 className="text-4xl font-bold text-white mt-4">Daredevil Levels Up!</h1>
          <p className="text-lg text-white mt-2">From {age} to {age + 1}! 🎉</p>
          <button 
            className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-6 rounded-lg"
            onClick={() => setStage(1)}
          >
            Claim Your Cheesecakes 🍰🍰
          </button>
        </motion.div>
      )}

      {stage === 1 && (
        <motion.div className="flex flex-col items-center">
          <div className="flex gap-4">
            <Cake size={60} className="text-yellow-500" />
            <Cake size={60} className="text-yellow-500" />
          </div>
          <h1 className="text-3xl font-bold text-white mt-4">Two Cheesecakes Just for You! 🎂</h1>
          <button 
            className="mt-4 bg-pink-400 hover:bg-pink-500 text-white font-bold py-2 px-6 rounded-lg"
            onClick={() => setStage(2)}
          >
            Next: Hugs & 26 Reasons ❤️
          </button>
        </motion.div>
      )}

      {stage === 2 && (
        <motion.div className="flex flex-col items-center">
          <Heart size={60} className="text-red-500" />
          <h1 className="text-3xl font-bold text-white mt-4">Hugs & 26 Reasons Why I Love You ❤️</h1>
          <div className="mt-4 grid grid-cols-5 gap-4">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index} 
                className="relative w-32 h-32 bg-white text-gray-800 p-4 rounded-lg shadow-lg cursor-pointer flex items-center justify-center"
                onClick={() => openLetter(index)}
              >
                {openedLetters[index] ? (
                  <p className="text-center text-sm">{reason}</p>
                ) : (
                  <MailOpen size={40} className="mx-auto text-gray-500" />
                )}
              </motion.div>
            ))}
          </div>
          <button 
            className="mt-6 bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-6 rounded-lg"
            onClick={() => setStage(3)}
          >
            Next: US 🐱
          </button>
        </motion.div>
      )}

      {stage === 3 && (
        <motion.div className="flex flex-col items-center">
          <motion.img 
            src={catImage} 
            alt="Cute Cat" 
            className="w-48 h-48 mt-8 rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
          <h1 className="text-3xl font-bold text-white mt-4">It's Us Forever ❤️</h1>
        </motion.div>
      )}
    </div>
  );
}
