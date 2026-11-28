'use client';

import React, { useState, useEffect } from 'react';

interface SplashScreenProps {
  durationMs?: number;
  onFinish?: () => void;
}

/**
 * Pantalla de carga inicial con desvanecimiento suave al cumplirse `durationMs`.
 */
export const SplashScreen: React.FC<SplashScreenProps> = ({
  durationMs = 3000,
  onFinish,
}) => {
  const [isFading, setIsFading] = useState(false);
  const [isMounted, setIsMounted] = useState(true);

  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, Math.max(durationMs - 800, 800));

    const unmountTimer = setTimeout(() => {
      setIsMounted(false);
      if (onFinish) {
        onFinish();
      }
    }, durationMs);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(unmountTimer);
    };
  }, [durationMs, onFinish]);

  if (!isMounted) {
    return null;
  }

  return (
    <div className={`splash-screen-overlay ${isFading ? 'fade-out' : ''}`} aria-hidden={isFading}>
      <div className="splash-logo-container">
        <div className="splash-logo-wrapper">
          <div className="splash-glow-halo" />
          <img
            src="/logo-dark.png"
            alt="Oikonomos Global Logo"
            className="splash-logo-img"
          />
        </div>

        <div className="splash-brand-text">
          <h1 className="splash-brand-title">Oikonomos</h1>
          <span className="splash-brand-subtitle">Global</span>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
