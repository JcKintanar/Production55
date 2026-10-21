import { useRef, useState } from "react";

const MEDIA_W = 70;
const MEDIA_GAP = 1;
const MEDIA_STEP = MEDIA_W + MEDIA_GAP;

export default function ProjectMediaCarousel({ items, visible = true }) {
  const [index, setIndex] = useState(0);
  const lastWheelRef = useRef(0);

  const n = items.length;
  const half = Math.floor(n / 2);
  const getOffset = (i) => ((i - index + half + n) % n) - half;

  const onNonSelectedImageClick = (i, distance) => {
    if (distance === 0) return;
    setIndex(i);
  };

  const onMediaClick = (item, i, distance) => {
    // TODO: clicking will bring up focused image, big view for pic wow
  };

  const onWheel = (e) => {
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;

    if (Math.abs(delta) < 10) return;
    if (Date.now() - lastWheelRef.current < 500) return;
    lastWheelRef.current = Date.now();

    const direction = delta > 0 ? 1 : -1;
    setIndex((i) => (i + direction + n) % n);
  };

  if (n === 0) {
    return <div className="basis-12/15" />;
  }

  return (
    <div
      onWheel={onWheel}
      className={`basis-12/15 relative overflow-hidden transition-opacity ease-in-out ${
        visible
          ? "opacity-100 duration-700 delay-300"
          : "pointer-events-none opacity-0 duration-300"
      }`}
    >
      {items.map((item, i) => {
        const offset = getOffset(i);
        const distance = Math.abs(offset);

        return (
          <div
            key={i}
            onClick={() => onNonSelectedImageClick(i, distance)}
            className={`absolute inset-y-[8%] bg-white transition-all duration-500 ease-in-out ${
              distance === 0
                ? "cursor-pointer opacity-80"
                : distance === 1
                  ? "cursor-pointer opacity-40"
                  : "pointer-events-none opacity-0"
            }`}
            style={{
              width: `${MEDIA_W}vw`,
              left: `calc(50% - ${MEDIA_W / 2}vw)`,
              transform: `translateX(${offset * MEDIA_STEP}vw) scale(${distance === 0 ? 1 : 0.9})`,
            }}
          >
            {item.type === "video" ? (
              <video
                src={item.src}
                controls={distance === 0}
                muted
                playsInline
                preload="metadata"
                ref={(el) => {
                  if (el && distance !== 0) el.pause();
                }}
                className="h-full w-full object-cover"
              />
            ) : (
              <img
                src={item.src}
                alt=""
                className="h-full w-full object-cover"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
