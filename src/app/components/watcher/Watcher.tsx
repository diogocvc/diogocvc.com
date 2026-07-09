import { useRef, useEffect, useState } from 'react';

import frontImg from '@/imports/watcher/front.png';
import topImg from '@/imports/watcher/top.png';
import bottomImg from '@/imports/watcher/bottom.png';
import leftImg from '@/imports/watcher/left.png';
import rightImg from '@/imports/watcher/right.png';
import topLeftImg from '@/imports/watcher/top-left.png';
import topRightImg from '@/imports/watcher/top-right.png';
import bottomLeftImg from '@/imports/watcher/bottom-left.png';
import bottomRightImg from '@/imports/watcher/bottom-right.png';

type Sector = 'front' | 'top' | 'bottom' | 'left' | 'right'
  | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

const IMAGES: Record<Sector, string> = {
  front: frontImg,
  top: topImg,
  bottom: bottomImg,
  left: leftImg,
  right: rightImg,
  'top-left': topLeftImg,
  'top-right': topRightImg,
  'bottom-left': bottomLeftImg,
  'bottom-right': bottomRightImg,
};

const SECTORS: Sector[] = [
  'right', 'bottom-right', 'bottom', 'bottom-left',
  'left', 'top-left', 'top', 'top-right',
];

const CENTER_THRESHOLD = 40;
const HYSTERESIS_DEG = 4;

function angleToSectorIndex(angleDeg: number): number {
  const normalized = ((angleDeg % 360) + 360) % 360;
  return Math.round(normalized / 45) % 8;
}

function getSectorFromAngle(angleDeg: number, currentSector: Sector): Sector {
  if (currentSector === 'front') {
    return SECTORS[angleToSectorIndex(angleDeg)];
  }

  const currentIdx = SECTORS.indexOf(currentSector);
  const newIdx = angleToSectorIndex(angleDeg);

  if (newIdx === currentIdx) return currentSector;

  const currentCenter = currentIdx * 45;
  const normalized = ((angleDeg % 360) + 360) % 360;
  let angularDist = Math.abs(normalized - currentCenter);
  if (angularDist > 180) angularDist = 360 - angularDist;

  if (angularDist <= 22.5 + HYSTERESIS_DEG) return currentSector;

  return SECTORS[newIdx];
}

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, [query]);

  return matches;
}

export function Watcher() {
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const sectorRef = useRef<Sector>('front');
  const rectRef = useRef<DOMRect | null>(null);
  const reducedRef = useRef(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    reducedRef.current = mq.matches;
    if (mq.matches && imgRef.current) {
      imgRef.current.src = IMAGES.front;
    }
    const onMqChange = (e: MediaQueryListEvent) => {
      reducedRef.current = e.matches;
      if (e.matches && imgRef.current) {
        imgRef.current.src = IMAGES.front;
        sectorRef.current = 'front';
      }
    };
    mq.addEventListener('change', onMqChange);
    return () => mq.removeEventListener('change', onMqChange);
  }, []);

  useEffect(() => {
    const updateRect = () => {
      if (imgRef.current) {
        rectRef.current = imgRef.current.getBoundingClientRect();
      }
    };
    updateRect();
    window.addEventListener('scroll', updateRect, { passive: true });
    window.addEventListener('resize', updateRect, { passive: true });
    return () => {
      window.removeEventListener('scroll', updateRect);
      window.removeEventListener('resize', updateRect);
    };
  }, []);

  useEffect(() => {
    if (reducedRef.current) return;

    const setImg = (s: Sector) => {
      if (s !== sectorRef.current && imgRef.current) {
        sectorRef.current = s;
        imgRef.current.src = IMAGES[s];
      }
    };

    if (isDesktop) {
      let mouseX = 0;
      let mouseY = 0;
      let rafId: number;

      const onMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      const tick = () => {
        const rect = rectRef.current;
        if (rect) {
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;
          const dx = mouseX - centerX;
          const dy = mouseY - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CENTER_THRESHOLD) {
            setImg('front');
          } else {
            const angleDeg = Math.atan2(dy, dx) * (180 / Math.PI);
            setImg(getSectorFromAngle(angleDeg, sectorRef.current));
          }
        }
        rafId = requestAnimationFrame(tick);
      };

      window.addEventListener('mousemove', onMouseMove, { passive: true });
      rafId = requestAnimationFrame(tick);
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        cancelAnimationFrame(rafId);
      };
    } else {
      let lastScrollY = window.scrollY;
      let idleTimer: ReturnType<typeof setTimeout> | null = null;

      const onScroll = () => {
        const scrollY = window.scrollY;
        const dir = scrollY >= lastScrollY ? 'down' : 'up';
        lastScrollY = scrollY;

        if (idleTimer) clearTimeout(idleTimer);

        setImg(dir === 'down' ? 'bottom' : 'top');

        idleTimer = setTimeout(() => {
          const el = containerRef.current;
          if (el) {
            const r = el.getBoundingClientRect();
            const visible = r.bottom > 0 && r.top < window.innerHeight;
            if (visible) {
              setImg('front');
            }
          }
        }, 150);
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      return () => {
        window.removeEventListener('scroll', onScroll);
        if (idleTimer) clearTimeout(idleTimer);
      };
    }
  }, [isDesktop]);

  return (
    <div
      ref={containerRef}
      className="relative w-full flex justify-center md:absolute md:inset-0 md:pointer-events-none md:z-0 md:flex md:items-center md:justify-end"
    >
      <img
        ref={imgRef}
        src={IMAGES.front}
        alt=""
        aria-hidden="true"
        draggable={false}
        width={820}
        height={820}
        className="select-none w-full md:w-2/3 md:max-w-[820px] h-auto"
      />
    </div>
  );
}
