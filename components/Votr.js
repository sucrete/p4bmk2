import Image from "next/image";

const slides = [
  <Image key="first" src="/votrlogo.png" alt="" height={1350} width={1800} />,
  <Image
    key="secundo"
    src="/votergraphic2.png"
    alt=""
    height={1350}
    width={1800}
  />,
];

const imageSlides = slides.map((slide, index) => {
  return (
    <li key={`imagesforVotr--${index}`} className={`liImage liImage--${index}`}>
      {slide}
    </li>
  );
});

export default function Votr() {
  return (
    <>
      <div className="pane votr">
        <div className="imagesContainer">
          <ul>{imageSlides}</ul>
        </div>
        <span className="caption">
          Assets for the voting information app,{" "}
          <u>The Voter&apos;s Companion</u>
        </span>
      </div>
    </>
  );
}
