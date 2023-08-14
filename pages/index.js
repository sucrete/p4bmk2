import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import Calvin from "../components/Calvin";
import Votr from "../components/Votr";
import CnC from "../components/CnC";
import Poly from "../components/Poly";
import Rosehill from "../components/Rosehill";

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
          <img className="fontImage forma" src="/FormaFont.svg" />
        )}
        {isShownHina && <span className="fontImage hina">Hina Mincho</span>}
        {isShownApple && (
          <span className="fontImage apple">Apple Garamond</span>
        )}
        {isShownSkelter && (
          <img className="fontImage skelter" src="/SkelterFont.svg" />
        )}
        {isShownRoobert && (
          <img className="fontImage roobert" src="/RoobertFont.svg" />
        )}
        {isShownNudge && (
          <img className="fontImage nudge" src="/NudgeFont.svg" />
        )}
        <div className="bigdiv">
          <div className="descripsh">
            <span className="name">
              <img src="/namespace.png" />
            </span>
            Mr. Collins, meanwhile, was meditating in solitude on what had
            passed. He thought too well of himself to comprehend on what motives
            his cousin could refuse him; and though his pride was hurt, he
            suffered in no other way. His regard for her was quite imaginary;
            and the possibility of her deserving her mother’s reproach prevented
            his feeling any regret. While the family were in this confusion,
            Charlotte Lucas came to spend the day with them. She was met in the
            vestibule by Lydia, who, flying to her, cried in a half whisper, “I
            am glad you are come, for there is such fun here! What do you think
            has happened this morning? Mr. Collins has made an offer to Lizzy,
            and she will not have him.”
          </div>
        </div>
        <section className="bottomdiv">
          <Calvin />
          <br />
          <br />
          <br />
          <br />
          <CnC />
          <br />
          <br />
          <br />
          <br />
          <Votr />
          <br />
          <br />
          <br />
          <br />
          <Rosehill />
          <br />
          <br />
          <br />
          <br />
          <Poly />
          <br />
          <br />
          <br />
          <br />
        </section>
        <div className="descripsh descripsh--2">
          <div className="detailsContainer">
            <div className="skillsContainer subcontainer">
              <h3 className="bskillz">skillz</h3>
              <ul>
                <li>Graphic Design</li>
                <li>User Experience Design</li>
                <li>Trend Forecasting</li>
                <li>Logo Design</li>
                <li>
                  Web Development <br />
                  <span>⬝ JavaScript</span>
                  <br />
                  <span>⬝ HTML/CSS</span>
                  <br />
                  <span>⬝ Sass</span>
                  <br />
                  <span>⬝ React</span>
                  <br />
                  <span>⬝ Express</span>
                  <br />
                  <span>⬝ Node</span>
                  <br />
                  <span>⬝ Wordpress Development</span>
                  <br />
                  <span>⬝ Git</span>
                </li>
              </ul>
            </div>
            <div className="businessContainer subcontainer">
              <div className="skillsContainer subcontainer">
                <h3 className="bskillz">tech</h3>
                <ul>
                  <li>Photoshop</li>
                  <li>Illustrator</li>
                  <li>Visual Studio</li>
                </ul>
              </div>
            </div>
            <div className="skillsContainer subcontainer">
              <h3 className="bskillz">Fonts I ❤</h3>
              <ul>
                <li
                  className="roobert font"
                  onMouseEnter={index.roobert.yay}
                  onMouseLeave={index.roobert.nay}
                >
                  Roobert
                </li>
                <li
                  className="america font"
                  onMouseEnter={index.hina.yay}
                  onMouseLeave={index.hina.nay}
                >
                  Hina Mincho
                </li>
                <li
                  className="skelter font"
                  onMouseEnter={index.skelter.yay}
                  onMouseLeave={index.skelter.nay}
                >
                  Skelter
                </li>
                <li
                  className="forma font"
                  onMouseEnter={index.forma.yay}
                  onMouseLeave={index.forma.nay}
                >
                  Forma
                </li>
                <li
                  className="forma font"
                  onMouseEnter={index.apple.yay}
                  onMouseLeave={index.apple.nay}
                >
                  Apple Garamond
                </li>
                <li
                  className="forma font"
                  onMouseEnter={index.nudge.yay}
                  onMouseLeave={index.nudge.nay}
                >
                  Nudge
                </li>
              </ul>
              <h3 className="bskillz" style={{ marginBlockStart: "1rem" }}>
                favorite designers
              </h3>
              <ul>
                <li>
                  <a href="http://tmthyl.uk/" target="_blank" rel="noreferrer">
                    Timothy Luke
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/d_a_n_i_e_l_s_w_a_n/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Daniel Swan
                  </a>
                </li>
              </ul>
            </div>
            <div className="businessContainer subcontainer">
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
