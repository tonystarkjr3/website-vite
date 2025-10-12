// src/pages/Home.tsx
import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import profilePic from '../assets/portfolio-profile.png';
import {
  AcademicCapIcon,
  BriefcaseIcon,
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
      <div className="flex items-start justify-between gap-12">
        {/* Left column */}
        <div className="flex-1 space-y-6">

          <h2 className="text-3xl font-bold leading-snug">
            Hi, I’m Anupam “Anup” Pokharel! I like building innovative tech that makes users{' '}
            <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              {typed}
            </span>
            <span className="inline-block w-1 h-8 bg-indigo-500 ml-1 animate-pulse align-bottom" />
          </h2>

          <p className="text-lg text-gray-700">
            My specialties in software enginering span across the stack: I am just as comfortable writing code for delightful and responsive user interfaces as I am delving deep into
            complex back-end logic aiming to shave milliseconds off of computations and database operations at large scale.

            Off the clock, you’ll find me playing racquet sports (trying to nail a wickedly swervy ping pong serve), 
            reading (usually about financial markets, blockchain and its implementations like DeFi and Web3, neuroscience, nutrition, or new 
            consumer tech), tinkering on a side project, or watching a movie or some TV.
          </p>
        </div>

        {/* Right column: photo + info-rows */}
        <div className="flex flex-col items-center shrink-0 space-y-6">
          <img
            src={profilePic}
            alt="Anupam Pokharel"
            className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover ring-4 ring-indigo-500"
          />

          <div className="w-full flex flex-col items-start space-y-6 text-gray-600 text-sm">
            {/* Education block */}
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <AcademicCapIcon className="w-5 h-5 text-indigo-500" />
                <span>BS in Statistics & ML, Carnegie Mellon</span>
              </div>
              <a
                href="/my-portfolio/resume"
                className="pl-7 text-indigo-600 hover:underline"
              >
                More
              </a>
            </div>

            {/* Current role block */}
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <BriefcaseIcon className="w-5 h-5 text-indigo-500" />
                <span>Sr Software Engineer at Visa, Inc.</span>
              </div>
              <a
                href="/my-portfolio/resume"
                className="pl-7 text-indigo-600 hover:underline"
              >
                More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Detailed experience section */}
      <div id="experience" className="mt-16 space-y-6">
        {/* …your work-experience cards/timeline here… */}
      </div>
    </section>
  );
};

export default Home;
