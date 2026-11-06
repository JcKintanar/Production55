import { useEffect, useRef } from "react";
import { clients } from "../../data/notableClients";

const REPEAT = 2;
const EASE = 0.045;

export default function ClientCarousel() {
  const trackRef = useRef(null);
  const rafRef = useRef(0);
  const rateRef = useRef(1);
  const targetRef = useRef(1);

  const step = () => {
    const diff = targetRef.current - rateRef.current;
    rateRef.current =
      Math.abs(diff) < 0.001
        ? targetRef.current
        : rateRef.current + diff * EASE;

    trackRef.current?.getAnimations({ subtree: true }).forEach((a) => {
      a.playbackRate = rateRef.current;
    });

    if (rateRef.current !== targetRef.current) {
      rafRef.current = requestAnimationFrame(step);
    }
  };

  const setSpeed = (target) => {
    targetRef.current = target;
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(step);
  };

  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  const row = Array.from({ length: REPEAT }).flatMap(() => clients);

  return (
    <div
      ref={trackRef}
      onMouseEnter={() => setSpeed(0)}
      onMouseLeave={() => setSpeed(1)}
      className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
    >
      {[0, 1].map((g) => (
        <div
          key={g}
          aria-hidden={g === 1}
          className="flex min-w-full shrink-0 animate-marquee items-center justify-around motion-reduce:animate-none"
        >
          {row.map((item, i) => (
            <div key={i} className="shrink-0 px-3">
              <div className="flex h-[10vh] w-[10vw] items-center justify-center rounded-lg bg-gray-200 text-gray-600">
                {item}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
