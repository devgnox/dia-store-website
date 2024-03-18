import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import Vibrant from "node-vibrant";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function getFontColor(imagePath: string): Promise<string> {
  try {
    const vibrant = new Vibrant(imagePath);
    const swatches = await vibrant.getPalette();

    // Get the lightness of the dominant color
    const dominantSwatch =
      swatches.Vibrant ||
      swatches.Muted ||
      swatches.DarkVibrant ||
      swatches.DarkMuted ||
      swatches.LightVibrant ||
      swatches.LightMuted;
    let lightness = dominantSwatch?.hsl?.[2];

    if (lightness === undefined) lightness = 0;

    if (lightness < 1) lightness = lightness * 100;

    // Determine font color based on lightness
    const fontColor = lightness < 50 ? "#f8f6f6" : "#262424";

    return fontColor;
  } catch (error) {
    console.error("Error analyzing image:", error);
    // Default to black font color in case of error
    return "#262424";
  }
}

export const priceFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});
