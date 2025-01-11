"use client";

import { useContext } from "react";
import Link from "next/link";
import navbar from "styles/navbar.module.css";
import { FontContext } from "providers/fontProvider";

export default function Navbar() {
  const fonts = useContext(FontContext);

  return (
    <div className={`${navbar.container} ${fonts.inconsolata}`}>
      <Link className={navbar.link} href="/">
        Home
      </Link>
      <Link className={navbar.link} href="/about">
        About me
      </Link>
      <Link className={navbar.link} href="/projects">
        Projects
      </Link>
      <Link className={navbar.link} href="/more">
        More
      </Link>
    </div>
  );
}
