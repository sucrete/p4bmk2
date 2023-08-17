import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import styles from "../styles/Home.module.css";

import Calvin from "../components/Calvin";
import Votr from "../components/Votr";
import CnC from "../components/CnC";
import Poly from "../components/Poly";
import Rosehill from "../components/Rosehill";
import Norman from "../components/Norman";
import Handful from "../components/Handful";

export default function Home() {
  const [isShownForma, setIsShownForma] = useState(false);
  const [isShownSkelter, setIsShownSkelter] = useState(false);
  const [isShownHina, setIsShownHina] = useState(false);
  const [isShownRoobert, setIsShownRoobert] = useState(false);
  const [isShownApple, setIsShownApple] = useState(false);
  const [isShownNudge, setIsShownNudge] = useState(false);
  const index = {
    forma: {
      yay: () => setIsShownForma(true),
      nay: () => setIsShownForma(false),
    },
    hina: {
      yay: () => setIsShownHina(true),
      nay: () => setIsShownHina(false),
    },
    skelter: {
      yay: () => setIsShownSkelter(true),
      nay: () => setIsShownSkelter(false),
    },
    roobert: {
      yay: () => setIsShownRoobert(true),
      nay: () => setIsShownRoobert(false),
    },
    apple: {
      yay: () => setIsShownApple(true),
      nay: () => setIsShownApple(false),
    },
    nudge: {
      yay: () => setIsShownNudge(true),
      nay: () => setIsShownNudge(false),
    },
  };
  return (
    <div className={styles.container}>
      <Head>
        <title>Will Andrée innit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/Wmicon.png" />
      </Head>

      <main className={styles.main}>
        {isShownForma && (
          <div className="fontImage forma">
            <Image src="/FormaFont.png" alt="" width={267} height={75} />
          </div>
        )}
        {isShownHina && <span className="fontImage hina">Hina Mincho</span>}
        {isShownApple && (
          <span className="fontImage apple">Apple Garamond</span>
        )}
        {isShownSkelter && (
          <div className="fontImage skelter">
            <Image src="/SkelterFont.png" alt="" width={116} height={136} />
          </div>
        )}
        {isShownRoobert && (
          <div className="fontImage roobert">
            <Image src="/RoobertFont.png" alt="" width={471} height={100} />
          </div>
        )}

        {isShownNudge && (
          <div className="fontImage nudge">
            <Image src="/NudgeFont.svg" alt="" width={135} height={65} />
          </div>
        )}
        <div className="bigdiv">
          <div className="topBox">
            <span className="name">
              <Image
                src="/namespace.svg"
                alt="portfolio owner name logo"
                width={300}
                height={70}
              />
            </span>
            <hr />
            <div className="barkFloat">
              <Image src="/BarkPortDGreen.svg" alt="" width={200} height={79} />
            </div>

            <div className="arrow">
              <Image src="/arrow.png" alt="" width={200} height={200} />
            </div>
          </div>
          <div className="descripsh"></div>
        </div>
        <section className="bottomdiv">
          <Calvin />
          <CnC />
          <Votr />
          <Rosehill />
          <Poly />
          <Handful />
          <Norman />
          <hr />
        </section>
        <hr />
        <div className="descripsh descripsh--2">
          <div className="detailsContainer">
            <div>
              <span className="_1">Hi, Barkley!</span> Thank you for viewing
              some of my work. I{"'"}ve always wanted to apply for a position
              with Barkley when I had some work I was proud to present. If it
              {"'"}s possible to know someone by what they love, here are a few
              of my favorite artists/designers/firms →{" "}
              <Link href="https://tmthyl.uk/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  Timothy Luke
                </a>
              </Link>
              ,{" "}
              <Link href="https://portorocha.com/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  Porto Rocha
                </a>
              </Link>
              ,{" "}
              <Link href="https://www.instagram.com/haleywollens" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  Haley Wollens
                </a>
              </Link>
              ,{" "}
              <Link href="https://staffansundstrom.com/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  Staffan Sundström
                </a>
              </Link>
              ,{" "}
              <Link href="https://www.instagram.com/trvsbrthrs/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  Travis Brothers
                </a>
              </Link>
              ,{" "}
              <Link href="https://nicksherman.com/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  Nick Sherman
                </a>
              </Link>
              ,{" "}
              <Link href="https://www.instagram.com/jamesharrenart/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  James Harren
                </a>
              </Link>
              ,{" "}
              <Link href="https://www.instagram.com/specialoffer.inc/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  Special Offer, inc.
                </a>
              </Link>{" "}
              {"("}helmed by{" "}
              <Link href="https://brentdavidfreaney.com/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  Brent David Freaney
                </a>
              </Link>
              {")"},{" "}
              <Link href="https://www.instagram.com/danielsannwald/" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  Daniel Sannwald
                </a>
              </Link>
              ,{" "}
              <Link href="https://vimeo.com/586419209" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  Daniel Swan
                </a>
              </Link>
              ,{" "}
              <Link href="https://www.instagram.com/wiissa" passHref>
                <a target="_blank" rel="noopener noreferrer">
                  Wiissa
                </a>
              </Link>
              , ...the list is too long. Fonts I love →{" "}
              <span
                className="roobert font"
                onMouseEnter={index.roobert.yay}
                onMouseLeave={index.roobert.nay}
              >
                Roobert
              </span>
              ,{" "}
              <span
                className="america font"
                onMouseEnter={index.hina.yay}
                onMouseLeave={index.hina.nay}
              >
                Hina Mincho
              </span>
              ,{" "}
              <span
                className="skelter font"
                onMouseEnter={index.skelter.yay}
                onMouseLeave={index.skelter.nay}
              >
                Skelter
              </span>
              ,{" "}
              <span
                className="forma font"
                onMouseEnter={index.forma.yay}
                onMouseLeave={index.forma.nay}
              >
                Forma
              </span>
              ,{" "}
              <span
                className="forma font"
                onMouseEnter={index.apple.yay}
                onMouseLeave={index.apple.nay}
              >
                Apple Garamond
              </span>
              ,{" "}
              <span
                className="forma font"
                onMouseEnter={index.nudge.yay}
                onMouseLeave={index.nudge.nay}
              >
                Nudge
              </span>
              . My design credo → {"'"}Eschew the formulaic.{"'"}
            </div>
            <br />
            <div>
              <span className="_1">Skills</span> → Graphic Design, User
              Experience Design, Logo Design, Trend Forecasting, Advanced
              Prototyping, Web Development {"("}Javascript/HTML/CSS/Sass, React,
              Wordpress Development{")"}
            </div>
            <br />
            <div>
              <span className="_1">Tech</span> → Illustrator, Photoshop, Figma,
              VS Code, After Effects
            </div>
            <br />

            {/* <div className="businessContainer subcontainer">
              <h3 className="bskillz">business</h3>
              <ul>
                <li>
                  <a href="/resume" target="_blank">
                    Resumé
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/william-andree/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="mailto:williamandree@gmail.com">
                    williamandree@gmail.com
                  </a>
                </li>
                <li>
                  <a href="tel:5738202616">(573) 820-2616</a>
                </li>
              </ul>
            </div> */}
            <div className="contactCard">
              <div className="contactTopBox">
                <div className="contactPull">CONTACT</div>
                <div className="contactName">Will Andrée</div>
              </div>
              <div className="contactBottomBox">
                <div className="resume">
                  <Link href="/resume.pdf" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      Resumé
                    </a>
                  </Link>
                </div>
                <div className="email">
                  <Link href="mailto:williamandree@gmail.com" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      williamandree@gmail.com
                    </a>
                  </Link>
                </div>
                <div className="tel">
                  <Link href="tel:15738202616" passHref>
                    <a target="_blank" rel="noopener noreferrer">
                      {"("}573{") "}820-2616
                    </a>
                  </Link>
                </div>
                <div className="LinkedIn">
                  <Link
                    href="https://www.linkedin.com/in/william-andree/"
                    passHref
                  >
                    <a target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
