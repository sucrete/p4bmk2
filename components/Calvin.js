import Image from "next/image";

const slides = [
  <Image src="/calloval2.png" key="first" alt="" height={1350} width={1800} />,
  <Image src="/calbeats2.png" key="second" alt="" height={1350} width={1800} />,
  <Image
    src="/calvinstandsalone2.png"
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

export default function Calvin() {
  return (
    <>
      <div className="pane calvin">
        <div className="imagesContainer">
          <ul>{imageSlides}</ul>
        </div>
        <span className="caption">
          Assets for singer and professional Southwestern person, Calvin Todd
        </span>
      </div>
    </>
  );
}
