import { generateOgImage } from "@/lib/og-image";

export const runtime = "edge";
export const alt =
  "Eight Byte Studio — Professional web development agency based in Tirana, Albania";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return generateOgImage();
}
