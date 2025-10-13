// src/pages/Home.tsx
import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import profilePic from '../assets/portfolio-profile.png';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  MapPinIcon,
  LinkIcon
} from '@heroicons/react/24/outline';

const rotatingWords = ['creative', 'productive', 'entertained'];

const Home: React.FC = () => {
  const typed = useTypewriter({
    words: rotatingWords,
    typingSpeed: 60,
    pauseTime: 800,
  });

  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      {/* outer: stack on small, row on md+ */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-12">
        {/* Left column (main text) - appears after the compact header on mobile */}
        <div className="flex-1 space-y-6 w-full order-last md:order-first">
          <h2 className="text-3xl font-bold leading-snug">
            Hi, I’m Anupam “Anup” Pokharel! I like building innovative tech that makes users{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {typed}
            </span>
            <span className="inline-block w-1 h-8 bg-indigo-500 ml-1 animate-pulse align-bottom" />
          </h2>

          <p className="text-lg text-gray-800 dark:text-gray-300">
            My specialties in software enginering span across the stack: I am just as comfortable writing code for delightful and responsive user interfaces as I am delving deep into
            complex back-end logic aiming to shave milliseconds off of computations and database operations at large scale.

            Off the clock, you’ll find me playing racquet sports (trying to nail a wickedly swervy ping pong serve), 
            reading (usually about financial markets, blockchain and its implementations like DeFi and Web3, neuroscience, nutrition, or new 
            consumer tech), tinkering on a side project, or watching a movie or some TV.
          </p>
        </div>

        {/* Top compact header when stacked: photo left, info right (on mobile); on md+ acts as the right column */}
        <div className="w-full md:w-auto flex flex-col items-center shrink-0 space-y-6 order-first md:order-last">
          {/* compact row: row on small screens, column on md+ */}
          <div className="w-full flex flex-row md:flex-col items-start md:items-center md:space-y-6">
            <div className="flex w-full md:block md:w-auto">
              {/* photo container: right margin on mobile, bottom margin on md+ */}
              <div className="flex-none mr-6 md:mr-0 md:mb-[25px]">
                <img
                  src={profilePic}
                  alt="Anupam Pokharel"
                  className="w-32 h-32 md:w-56 md:h-56 rounded-full object-cover ring-4 ring-indigo-500 max-w-full block"
                />
              </div>

              {/* info area: sits to the right on mobile, becomes full-width under image on md+ */}
              <div className="flex-1 text-gray-800 dark:text-gray-300 text-sm md:w-full">
                {/* Education block */}
                <div className="mb-3">
                  <div className="flex items-center space-x-2">
                    <AcademicCapIcon className="w-5 h-5 text-indigo-500" />
                    <span className="text-sm">BS in Statistics & ML, Carnegie Mellon</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
                    <MapPinIcon className="w-5 h-5 text-indigo-500" />
                    <span>Pittsburgh, PA</span>
                  </div>
                </div>

                {/* Current role block */}
                <div className="mb-3">
                  <div className="flex items-center space-x-2">
                    <BriefcaseIcon className="w-5 h-5 text-indigo-500" />
                    <span className="text-sm">Sr Software Engineer at Visa, Inc.</span>
                  </div>
                  <div className="flex items-center space-x-2 mt-1 text-xs text-gray-500">
                    <MapPinIcon className="w-5 h-5 text-indigo-500" />
                    <span>Austin, TX</span>
                  </div>
                </div>

                {/* More link */}
                <div>
                  <div className="flex items-center space-x-2">
                    <LinkIcon className="w-5 h-5 text-indigo-500" />
                     <a href="/resume" className="text-indigo-600 hover:underline">
                      More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed experience section */}
      <div id="experience" className="mt-16 space-y-6">
      </div>
    </section>
  );
};

export default Home;
