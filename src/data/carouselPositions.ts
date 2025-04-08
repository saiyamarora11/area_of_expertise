import { CarouselPosition, ImageItem } from '@/types/carousel';

export const carouselPositions: CarouselPosition[] = [
  {
    transform: "perspective(1000px) rotateX(-60deg)",
    positionOverride: { bottom: "auto" },
    imageRotate: true,
  },
  {
    transform: "perspective(1000px) rotateY(-60deg)",
    positionOverride: { left: "auto" },
    imageRotate: false,
  },
  {
    transform: "perspective(1000px) rotateX(60deg)",
    positionOverride: { top: "auto" },
    imageRotate: true,
  },
  {
    transform: "perspective(1000px) rotateY(60deg)",
    positionOverride: { right: "auto" },
    imageRotate: false,
  },
];

export const carouselImages: ImageItem[] = [
  { id: 1, src: "/pic_1.png" },
  { id: 2, src: "/pic_2.png" },
  { id: 3, src: "/pic_3.png" },
  { id: 4, src: "/pic_4.png" },
];
