import Image from "next/image";

const slides = [
  <Image key="secundo" src="/Sequoia.png" alt="" height={1350} width={1800} />,
  <Image
    key="third"
    src="/SequoiaDark.svg"
    alt=""
    height={1350}
    width={1800}
  />,
];

const imageSlides = slides.map((slide, index) => {
  return (
    <li
      key={`imagesforSeqSeq--${index}`}
      className={`liImage liImage--${index}`}
    >
      {slide}
    </li>
  );
});

export default function Sequoia() {
  return (
    <>
      <div className="pane seqseq">
        <div className="imagesContainer">
          <ul>{imageSlides}</ul>
        </div>
        <span className="caption">
          Logo design for <u>Sequoia Solutions Group</u>
        </span>
      </div>
    </>
  );
}
