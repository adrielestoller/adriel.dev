import { FontProvider } from "providers/fontProvider";
import "styles/globals.css";

export const metadata = {
    description: "Adriel's personal website portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <FontProvider>{children}</FontProvider>
            </body>
        </html>
    );
}
