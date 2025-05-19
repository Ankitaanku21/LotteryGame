import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function WinnerCelebration({ show }) {
  useEffect(() => {
    if (show) {
      confetti({
        particleCount: 400,
        spread: 100,
        origin: { y: 0.6 }
      });
    }
  }, [show]);

  return null;
}
