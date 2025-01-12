"use client";

import { FontContext } from "providers/fontProvider";
import { useContext } from "react";
import footer from "styles/footer.module.css";

export default function Footer() {
    const fonts = useContext(FontContext);

    return (
        <footer className={`${footer.footer} ${fonts.inconsolata}`}>
            <div className={footer.container}>
                <p>
                    <span className={footer.copyright}>&copy;</span>
                    {new Date().getFullYear()} Adriel Estoller. Todos os
                    direitos reservados.
                </p>
            </div>
        </footer>
    );
}
