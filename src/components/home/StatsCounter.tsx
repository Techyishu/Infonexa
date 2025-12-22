import { useEffect, useRef, useState } from "react";

interface StatsCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  delay?: number;
}

export const StatsCounter = ({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2000,
  delay = 0,
}: StatsCounterProps) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    const startTime = Date.now() + delay;
    const endValue = value;

    const updateCount = () => {
      const now = Date.now();
      if (now < startTime) {
        requestAnimationFrame(updateCount);
        return;
      }

      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentCount = Math.floor(easeOut * endValue);

      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(endValue);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isVisible, value, duration, delay]);

  return (
    <div ref={ref} className="text-center animate-fade-in-up">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse-glow">
        {prefix}
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-sm md:text-base text-muted-foreground uppercase tracking-wider font-medium">
        {label}
      </div>
    </div>
  );
};

