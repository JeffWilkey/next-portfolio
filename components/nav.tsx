/** @jsx jsx */
import React, { useState } from "react";
import { jsx } from "theme-ui";
import Link from "next/link";

export default function Nav() {
  const [navColor, setNavColor] = useState("primary");

  return (
    <nav sx={{ display: "flex", justifyContent: "space-between" }}>
      <Link href="/">
        <a
          onMouseEnter={(e) => setNavColor("nav")}
          onMouseLeave={(e) => setNavColor("primary")}
          sx={{ textDecoration: "none" }}
        >
          <h1 sx={{ variant: "nav.brand" }}>
            Jeff <span sx={{ color: navColor, transition: ".4s" }}>Wilkey</span>
          </h1>
        </a>
      </Link>
      <div
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Link href="/">
          <a sx={{ variant: "nav.link" }}>Home</a>
        </Link>
        <Link href="/projects">
          <a sx={{ variant: "nav.link" }}>Projects</a>
        </Link>
        <Link href="/blog">
          <a sx={{ variant: "nav.link" }}>Blog</a>
        </Link>
        <Link href="/about">
          <a sx={{ variant: "nav.link" }}>About</a>
        </Link>
        <Link href="/contact">
          <button sx={{ variant: "nav.button" }}>Contact</button>
        </Link>
      </div>
    </nav>
  );
}
