import { useState, useEffect, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
  end: number;
  duration?: number;
  delay?: number;
  prefix?: string;
  suffix?: string;
}

export function Counter({ end, duration = 2, delay = 0, prefix = "", suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const countRef = useRef<number>(0);
  const [hasStarted, setHasStarted] = useState(false);
  
  useEffect(() => {
    if (isInView && !hasStarted) {
      // Delay the start of the animation
      const delayTimeout = setTimeout(() => {
        setHasStarted(true);
        const startTime = Date.now();
        const endTime = startTime + duration * 1000;
        
        const updateCount = () => {
          const now = Date.now();
          const progress = Math.min(1, (now - startTime) / (duration * 1000));
          const currentCount = Math.floor(progress * end);
          
          if (countRef.current !== currentCount) {
            countRef.current = currentCount;
            setCount(currentCount);
          }
          
          if (now < endTime) {
            requestAnimationFrame(updateCount);
          } else {
            setCount(end);
          }
        };
        
        requestAnimationFrame(updateCount);
      }, delay * 1000);
      
      return () => clearTimeout(delayTimeout);
    }
  }, [isInView, end, duration, delay, hasStarted]);
  
  return (
    <div ref={ref} className="text-4xl font-bold mb-2">
      {prefix}{count}{suffix}
    </div>
  );
}
