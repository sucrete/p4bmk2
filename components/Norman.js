import Image from "next/image";

const slides = [
  <Image key="first" src="/NormanLogo.svg" alt="" height={1350} width={1800} />,
  <Image
    key="secundo"
    src="/NormanSquare.png"
    alt=""
    height={1350}
    width={1800}
  />,
  <Image
    key="third"
    src="/NormanLogoBanner.svg"
    alt=""
    height={1350}
    width={1800}
  />,
];

const imageSlides = slides.map((slide, index) => {
  return (
    <li key={`imagesforNorm--${index}`} className={`liImage liImage--${index}`}>
      {slide}
    </li>
  );
});

export default function Norman() {
  return (
    <>
      <div className="pane norm">
        <div className="imagesContainer">
          <ul>{imageSlides}</ul>
        </div>
        <span className="caption">
          Logo designs for woodworking studio, <u>Studio Norman</u>. Font → Vulf
          Mono
        </span>
      </div>
    </>
  );
}
