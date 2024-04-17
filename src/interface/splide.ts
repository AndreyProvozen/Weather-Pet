export interface SplideOptionsProps {
  focus?: number | 'center';
  pauseOnHover?: boolean;
  pauseOnFocus?: boolean;
  arrows?: boolean;
  pagination?: boolean;
  labelledby?: string;
  speed?: number;
  width?: number | string;
  height?: number | string;
  start?: number;
  perPage?: number;
  perMove?: number;
  gap?: number | string;
  drag?: boolean | 'free';
  snap?: boolean;
  autoplay?: boolean | 'pause';
  interval?: number;
  breakpoints: Record<string | number, any>;
  type: 'loop' | 'slide' | 'fade';
  autoScroll?: {
    speed?: number;
  };
}

export interface SplideExtensionsProps {
  AutoScroll?: any;
}
