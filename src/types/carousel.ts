export type ImageItem = {
  id: number;
  src: string;
}

export type CarouselPosition = {
  transform: string;
  positionOverride?: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  imageRotate: boolean;
}
