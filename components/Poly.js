import Image from "next/image";

export default function Poly() {
  return (
    <>
      <div className="pane poly">
        <div className="imagesContainer">
          <ul>
            <li>
              <Image src="/poly.svg" alt="" height={1350} width={1800} />
            </li>
          </ul>
        </div>
        <span className="caption">
          Logo re-design for local business, <u>ProPolyjacking</u>. Fonts →
          Dharma
        </span>
      </div>
    </>
  );
}
