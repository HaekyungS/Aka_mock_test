import React, { useCallback, useEffect, useRef } from "react";
import ReactCanvasConfetti from "react-canvas-confetti";
import styles from "../styles/page.module.css";

export const Confetti = () => {
  const refAnimationInstance = useRef(null);

  const getInstance = useCallback((instance) => {
    refAnimationInstance.current = instance;
  }, []);

  const makeShot = useCallback((particleRatio, opts) => {
    refAnimationInstance.current &&
      refAnimationInstance.current({
        ...opts,
        origin: { y: 0.7 },
        colors: ["#f12828", "#fd5454", "#fc1919"],
        particleCount: Math.floor(200 * particleRatio),
      });
  }, []);

  useEffect(() => fire(), []);

  const fire = useCallback(() => {
    makeShot(0.25, {
      spread: 50,
      startVelocity: 55,
    });

    makeShot(0.2, {
      spread: 70,
    });

    makeShot(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
      decay: 0.92,
      scalar: 1.2,
    });

    makeShot(0.1, {
      spread: 120,
      startVelocity: 45,
      decay: 0.92,
      scalar: 1.2,
      particleCount: 100,
    });

    makeShot(0.1, {
      spread: 150,
      startVelocity: 45,
      particleCount: 100,
    });

    makeShot(0.1, {
      spread: 170,
      startVelocity: 45,
      particleCount: 100,
    });

    makeShot(0.1, {
      spread: 190,
      startVelocity: 45,
      particleCount: 100,
    });
  }, [makeShot]);

  return (
    <>
      <ReactCanvasConfetti refConfetti={getInstance} className={styles.confetti} />
    </>
  );
};
