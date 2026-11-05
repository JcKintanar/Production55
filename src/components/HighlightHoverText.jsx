import { Fragment, useEffect, useRef } from "react";

export default function HighlightHoverText({
  text = "",
  className = "",
  baseColor = "#ffffff",
  hoverColor = "#ed007c",
}) {
  const RADIUS = 600;
  const OFFSET = 300;
  const RISE = 200;
  const FALL = 500;
  const BASE = baseColor.toString();
  const GLOW = hoverColor.toString();

  const containerRef = useRef(null);
  const charRefs = useRef([]);

  const words = text.trim().split(/\s+/);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const chars = charRefs.current
      .filter(Boolean)
      .map((node) => ({ el: node, x: 0, y: 0, v: 0, shown: -1 }));

    function measure() {
      for (const c of chars) {
        const r = c.el.getBoundingClientRect();
        c.x = r.left + r.width / 2 + window.scrollX;
        c.y = r.top + r.height / 2 + window.scrollY;
      }
    }
    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure);

    const hist = [{ t: 0, x: 0, y: 0, a: 0 }];
    const cur = { x: -9999, y: -9999 };
    let lastMove = 0;
    let prev = 0;
    let raf = 0;

    function push(x, y, a) {
      const t = performance.now();
      if (a) {
        cur.x = x;
        cur.y = y;
      }
      hist.push({ t, x, y, a });
      while (hist.length > 2 && hist[1].t < t - OFFSET - 200) hist.shift();
      lastMove = t;
      if (!raf) {
        prev = t;
        raf = requestAnimationFrame(frame);
      }
    }

    function sample(time) {
      for (let i = hist.length - 1; i > 0; i--)
        if (hist[i].t <= time) return hist[i];
      return hist[0];
    }

    function frame(now) {
      const dt = Math.max(0, Math.min(now - prev, 50));
      prev = now;
      let busy = false;

      for (const c of chars) {
        const dist = Math.hypot(c.x - cur.x, c.y - cur.y);
        const s = sample(now - Math.min(dist / RADIUS, 1) * OFFSET);

        let target = 0;
        if (s.a) {
          const t = Math.max(0, 1 - Math.hypot(c.x - s.x, c.y - s.y) / RADIUS);
          target = t * t * (3 - 2 * t);
        }

        c.v +=
          (target - c.v) * (1 - Math.exp(-dt / (target > c.v ? RISE : FALL)));
        if (Math.abs(target - c.v) > 0.002) busy = true;

        if (Math.abs(c.v - c.shown) > 0.001) {
          c.shown = c.v;
          c.el.style.color = `color-mix(in oklab, ${GLOW} ${(c.v * 100).toFixed(1)}%, ${BASE})`;
        }
      }

      raf =
        busy || now - lastMove < OFFSET + 50 ? requestAnimationFrame(frame) : 0;
    }

    const onMove = (e) => push(e.pageX, e.pageY, 1);
    const onLeave = () => push(cur.x, cur.y, 0);

    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("pointercancel", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", measure);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("pointercancel", onLeave);
      for (const c of chars) c.el.style.color = "";
    };
  }, [text]);

  charRefs.current = [];
  let index = 0;

  return (
    <div ref={containerRef} className={className}>
      {words.map((word, wi) => (
        <Fragment key={wi}>
          <span className="inline-block whitespace-nowrap [text-box:trim-both_cap_alphabetic]">
            {Array.from(word).map((ch, ci) => {
              const i = index++;
              return (
                <span
                  key={ci}
                  ref={(node) => (charRefs.current[i] = node)}
                  className="[text-box:trim-both_cap_alphabetic]"
                >
                  {ch}
                </span>
              );
            })}
          </span>
          {wi < words.length - 1 && " "}
        </Fragment>
      ))}
    </div>
  );
}
