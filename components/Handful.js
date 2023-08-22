import Image from "next/image";

const slides = [
  <Image key="first" src="/dumpTRUCK.svg" alt="" height={1350} width={1800} />,
  <Image
    key="secundo"
    src="/Storycorder.png"
    alt=""
    height={1350}
    width={1800}
  />,
  <Image
    key="third"
    src="/StorycorderDotCom.png"
    alt=""
    height={1350}
    width={1800}
  />,
  <Image key="fourth" src="/Sequoia.png" alt="" height={1350} width={1800} />,
  <Image key="fifth" src="/Best.png" alt="" height={1350} width={1800} />,
  // <Image key="sixth" src="/Bennett.png" alt="" height={1350} width={1800} />,
];

const imageSlides = slides.map((slide, index) => {
  return (
    <li
      key={`imagesforHandful--${index}`}
      className={`liImage liImage--${index}`}
    >
      {slide}
    </li>
  );
});

export default function Handful() {
  return (
    <>
      <div className="pane handful">
        <div className="imagesContainer">
          <ul>{imageSlides}</ul>
        </div>
        <span className="caption">
          A handful of logos, original and redesigned
        </span>
      </div>
    </>
  );
}
