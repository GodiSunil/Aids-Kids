import { Variants, Transition, Easing } from 'framer-motion';

type Direction = 'left' | 'right' | 'up' | 'down';

interface AnimationOptions {
  type?: 'spring' | 'tween' | 'inertia' | 'just' | 'keyframes' | 'decay';
  delay?: number;
  duration?: number;
  ease?: Easing | Easing[];
}

export const staggerContainer = (staggerChildren?: number, delayChildren?: number): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: staggerChildren || 0.1,
      delayChildren: delayChildren || 0,
    },
  },
});

export const textVariant = (delay = 0): Variants => ({
  hidden: {
    y: 50,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay,
    },
  },
});

export const fadeIn = (
  direction: Direction,
  type: 'spring' | 'tween' = 'tween',
  delay: number = 0,
  duration: number = 0.5
): Variants => {
  const x = direction === 'left' ? 100 : direction === 'right' ? -100 : 0;
  const y = direction === 'up' ? 100 : direction === 'down' ? -100 : 0;

  return {
    hidden: {
      x,
      y,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration,
        ease: type === 'tween' ? 'easeInOut' : undefined,
      } as Transition,
    },
  };
};

export const slideIn = (
  direction: Direction,
  type: 'spring' | 'tween' = 'tween',
  delay: number = 0,
  duration: number = 0.5
): Variants => {
  const x = direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0;
  const y = direction === 'up' ? '100%' : direction === 'down' ? '-100%' : 0;

  return {
    hidden: {
      x,
      y,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: type === 'tween' ? 'easeInOut' : undefined,
      } as Transition,
    },
  };
};
