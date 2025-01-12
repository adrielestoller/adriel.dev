"use client";

import { Roboto, Roboto_Mono, Inconsolata, Jersey_15 } from "next/font/google";
import { createContext } from "react";

export const FontContext = createContext({});

const roboto = Roboto({
    variable: "--font-roboto",
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"],
});

const robotoMono = Roboto_Mono({
    variable: "--font-roboto-mono",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "600", "700"],
});

const inconsolataFont = Inconsolata({
    variable: "--font-inconsolata",
    subsets: ["latin"],
    weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

const jerseyFont = Jersey_15({
    variable: "--font-jersey-15",
    subsets: ["latin"],
    weight: ["400"],
});

export function FontProvider({ children }) {
    const fontValues = {
        roboto: roboto.className,
        robotoMono: robotoMono.className,
        inconsolata: inconsolataFont.className,
        jersey: jerseyFont.className,
        variables: `${roboto.variable} ${robotoMono.variable} ${inconsolataFont.variable} ${jerseyFont.variable}`,
    };

    return (
        <FontContext.Provider value={fontValues}>
            {children}
        </FontContext.Provider>
    );
}
