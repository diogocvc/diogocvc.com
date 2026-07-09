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

const CENTER_THRESHOLD = 60;
const HYSTERESIS_DEG = 10;

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

function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  return reduced;
}

export function Watcher() {
  const imgRef = useRef<HTMLImageElement>(null);
  const sectorRef = useRef<Sector>('front');
  const [sector, setSector] = useState<Sector>('front');
  const isMobile = !useMediaQuery('(min-width: 768px)');
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (reducedMotion) return;

    if (!isMobile) {
      let mouseX = 0;
      let mouseY = 0;
      let rafId: number;

      const onMouseMove = (e: MouseEvent) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
      };

      const tick = () => {
        const el = imgRef.current;
        if (el) {
          const rect = el.getBoundingClientRect();
          const centerX = rect.left + rect.width / 2;
          const centerY = rect.top + rect.height / 2;

          const dx = mouseX - centerX;
          const dy = mouseY - centerY;
          const dist = Math.sqrt(dx * dx + dy * dy);

          let newSector: Sector;
          if (dist < CENTER_THRESHOLD) {
            newSector = 'front';
          } else {
            const angleDeg = Math.atan2(dy, dx) * (180 / Math.PI);
            newSector = getSectorFromAngle(angleDeg, sectorRef.current);
          }

          if (newSector !== sectorRef.current) {
            sectorRef.current = newSector;
            setSector(newSector);
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
      let rafId: number;
      let ticking = false;

      const onScroll = () => {
        if (ticking) return;
        ticking = true;

        rafId = requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          let newSector: Sector;

          if (scrollY < 100) newSector = 'top';
          else if (scrollY <= 350) newSector = 'front';
          else newSector = 'bottom';

          if (newSector !== sectorRef.current) {
            sectorRef.current = newSector;
            setSector(newSector);
          }

          ticking = false;
        });
      };

      window.addEventListener('scroll', onScroll, { passive: true });

      return () => {
        window.removeEventListener('scroll', onScroll);
        cancelAnimationFrame(rafId);
      };
    }
  }, [isMobile, reducedMotion]);

  const displaySector = reducedMotion ? 'front' : sector;

  return (
    <div className="relative w-full flex justify-center md:absolute md:inset-0 md:pointer-events-none md:z-0 md:flex md:items-center md:justify-end">
      <img
        ref={imgRef}
        src={IMAGES[displaySector]}
        alt=""
        aria-hidden="true"
        draggable={false}
        className="select-none w-1/2 max-w-[300px] md:w-2/3 md:max-w-[820px] h-auto"
      />
    </div>
  );
}
