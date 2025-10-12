import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  words: string[];
  typingSpeed?: number;
  pauseTime?: number;
}

export function useTypewriter({
  words,
  typingSpeed = 150,
  pauseTime = 1000,
}: UseTypewriterProps) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (deleting && subIndex === 0) {
      // move to next word
      setDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    if (!deleting && subIndex === words[wordIndex].length) {
      // finished typing, start deleting after a pause
      const timeout = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    // typing or deleting
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (deleting ? -1 : 1));
      setText(words[wordIndex].substring(0, subIndex + (deleting ? 0 : 1)));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, wordIndex, words, typingSpeed, pauseTime]);

  return text;
}
