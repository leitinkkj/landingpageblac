
"use client";

import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  className?: string;
  onComplete?: () => void;
}

const TypewriterEffect = ({ text, speed = 40, className, onComplete }: TypewriterEffectProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const onCompleteRef = useRef(onComplete);

  // Update ref when onComplete prop changes
  useEffect(() => {
    onCompleteRef.current = onComplete;
  }, [onComplete]);

  useEffect(() => {
    let i = 0;
    setDisplayedText(''); // Reset the text
    const typingInterval = setInterval(() => {
      if (i < text.length) {
        // Use substring to avoid potential state update issues
        setDisplayedText(text.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
        setIsComplete(true);
        if (onCompleteRef.current) {
          onCompleteRef.current();
        }
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return (
    <span className={cn(className)}>
      {displayedText}
      {!isComplete && (
        <span className="inline-block w-1 h-[1em] ml-1 bg-primary animate-pulse" />
      )}
    </span>
  );
};

export default TypewriterEffect;
