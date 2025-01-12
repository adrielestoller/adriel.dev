"use client";

import Image from "next/image";
import { useContext } from "react";
import { FontContext } from "providers/fontProvider";
import home from "styles/home.module.css";
import Navbar from "components/navbar";
import Footer from "components/footer";

export default function Home() {
    const fonts = useContext(FontContext);

    return (
        <div className={`${home.outerContainer}`}>
            <div className={home.innerContainer}>
                <Navbar />
            </div>
            <div className={home.imageContainer}>
                <div className={home.imageWrapper}>
                    <Image
                        src="/gif-wallpaper.gif"
                        alt="wallpaper-gif"
                        fill
                        priority
                        sizes="100vw"
                        style={{
                            objectFit: "cover",
                            objectPosition: "center bottom",
                        }}
                        unoptimized
                    />
                </div>
            </div>
            <main className={`${home.innerContainer}`}>
                <div className={home.content}>
                    <Image
                        className={home.profileImage}
                        src="/profile.jpg"
                        width={150}
                        height={150}
                        sizes="100vw"
                        style={{
                            objectFit: "cover",
                            objectPosition: "center",
                        }}
                        alt="Profile picture"
                    />
                    <div className={`${home.textContent} ${fonts.inconsolata}`}>
                        <h1> Adriel Estoller</h1>
                        <h4>Professor de Programação e Robótica</h4>
                    </div>
                </div>
                <p className={`${home.description} ${fonts.roboto}`}>
                    Analista e desenvolvedor de sistemas em formação, técnico em
                    Programação de Jogos Digitais e apaixonado por tecnologia,
                    educação e café. Atualmente, atuo como estagiário em
                    educação no CESAR, contribuindo com a criação de materiais
                    didáticos e orientação de alunos em projetos inovadores.
                </p>
            </main>

            <Footer />
        </div>
    );
}
