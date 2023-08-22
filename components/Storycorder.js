import Image from "next/image";

const slides = [
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
];

const imageSlides = slides.map((slide, index) => {
  return (
    <li
      key={`imagesforStorycorder--${index}`}
      className={`liImage liImage--${index}`}
    >
      {slide}
    </li>
  );
});

export default function Storycorder() {
  return (
    <>
      <div className="pane storycorder">
        <div className="imagesContainer">
          <ul>{imageSlides}</ul>
        </div>
        <span className="caption">
          Logo design for a unique little app called <u>Storycorder</u>
        </span>
      </div>
    </>
  );
}
