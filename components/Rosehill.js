import Link from "next/link";
import Image from "next/image";

const slides = [
  <Image
    src="/rosehilllogo.png"
    key="first"
    alt=""
    height={984}
    width={1312}
  />,
  <Image
    src="/rosehillwbg2.png"
    key="second"
    alt=""
    height={984}
    width={1312}
  />,
  <Image
    src="/rosehillwbadge.png"
    key="third"
    alt=""
    height={984}
    width={1312}
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
          Assets for garden{" "}
          <Link href="www.rosehillgardens.com" passHref={true}>
            <u>Rosehill Gardens</u>
          </Link>
        </span>
      </div>
    </>
  );
}
