import { Roboto_Mono, Inconsolata, Jersey_15 } from "next/font/google";
import { FontProvider } from "providers/fontProvider";
import "styles/globals.css";

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: "400",
});

const inconsolataFont = Inconsolata({
  variable: "--font-inconsolata",
  weight: "600",
  subsets: ["latin"],
});

const jerseyFont = Jersey_15({
  variable: "--font-jersey-15",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  description: "Adriel's personal website portfolio",
};

export default function RootLayout({ children }) {
  const fontValues = {
    robotoMono: robotoMono.className,
    inconsolata: inconsolataFont.className,
    jersey: jerseyFont.className,
  };

  return (
    <html lang="en">
      <body className={robotoMono.className}>
        <FontProvider fonts={fontValues}>{children}</FontProvider>
      </body>
    </html>
  );
}
