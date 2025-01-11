import { Roboto_Mono, Inconsolata, Jersey_15 } from "next/font/google";
import "styles/globals.css";

const roboto_mono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: "400",
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  weight: "400",
  subsets: ["latin"],
});

const jersey_15 = Jersey_15({
  variable: "--font-jersey-15",
  weight: "400",
  subsets: ["latin"],
});

export const metadata = {
  description: "Adriel's personal website portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto_mono.className}>{children}</body>
    </html>
  );
}
