import { generateOgImage } from "@/lib/og-image";

export const runtime = "edge";
export const alt =
  "Eight Byte Studio | Web Development Agency Albania";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function TwitterImage() {
  return generateOgImage();
}
