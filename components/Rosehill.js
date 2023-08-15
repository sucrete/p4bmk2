import Link from "next/link";
import Image from "next/image";

const slides = [
  <Image
    src="/rosehilllogo.png"
    key="first"
    alt=""
    height={1350}
    width={1800}
  />,
  <Image
    src="/rosehillwbg2.png"
    key="second"
    alt=""
    height={1350}
    width={1800}
  />,
  <Image
    src="/rosehillwbadge.png"
    key="third"
    alt=""
    height={1350}
    width={1800}
  />,
];

const imageSlides = slides.map((slide, index) => {
  return (
    <li key={`imagesforCal--${index}`} className={`liImage liImage--${index}`}>
      {slide}
    </li>
  );
});

export default function Rosehill() {
  return (
    <>
      <div className="pane rosehill">
        <div className="imagesContainer">
          <ul>{imageSlides}</ul>
        </div>
        <span className="caption">
          Work from a larger logo and website redesign for{" "}
          <u>Rosehill Gardens</u>
        </span>
      </div>
    </>
  );
}
