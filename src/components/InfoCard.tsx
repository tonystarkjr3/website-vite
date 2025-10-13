import React from 'react';
import { LinkIcon, CodeBracketIcon } from '@heroicons/react/24/outline';
import { images } from '../lib/images';

export interface InfoCardProps {
  title: string;
  date: string;
  techStack: string;
  blurb: string;
  image: string;
  sourceLink?: string;
  showcaseLink?: string;
  showcaseLabel?: string;
}

function getImageUrl(name: string) {
  const key = `/src/assets/${name}`;
  return images[key] as string | undefined;
}

const InfoCard: React.FC<InfoCardProps> = ({
  title,
  date,
  techStack,
  blurb,
  image,
  sourceLink,
  showcaseLink,
  showcaseLabel
}) => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-800 rounded-xl shadow-lg dark:shadow-black/20 overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition border border-gray-100 dark:border-gray-700">
      {/* Image */}
      <img
        src={getImageUrl(image)}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3
          className="text-2xl font-extrabold mb-1 leading-snug
                     bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500
                     bg-clip-text text-transparent"
        >
          {title}
        </h3>

        <p className="text-sm text-gray-600 dark:text-gray-300">{date}</p>

        <p className="italic text-gray-700 dark:text-gray-200 mt-2">{techStack}</p>

        <p className="text-gray-800 dark:text-gray-100 flex-grow mt-4">{blurb}</p>

        {/* Links */}
        <div className="mt-6 flex flex-wrap gap-4">
          {showcaseLink && (
            <a
              href={showcaseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-indigo-500 text-white
                        rounded-lg hover:bg-indigo-600 transition"
            >
              <LinkIcon className="w-5 h-5 mr-2" />
              {showcaseLabel}
            </a>
          )}

          {sourceLink && (
            <a
              href={sourceLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-indigo-600 dark:text-indigo-400
                        hover:underline transition"
            >
              <CodeBracketIcon className="w-5 h-5 mr-2" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  )
};

export default InfoCard;
