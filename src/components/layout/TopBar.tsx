'use client';

import { useState, useEffect } from 'react';

export function TopBar() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-narrow mx-auto px-4 h-12 flex items-center justify-between">
        <span className="text-xs text-t2">Designing since 2019</span>
        <span className="text-xs text-t3 tabular-nums">{time}</span>
      </div>
    </header>
  );
}
