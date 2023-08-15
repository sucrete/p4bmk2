import Image from "next/image";
export default function CnC() {
  return (
    <>
      <div className="pane cnc">
        <div className="imagesContainer">
          <ul>
            <li>
              <Image src="/cnc.png" alt="" height={1350} width={1800} />
            </li>
          </ul>
        </div>
        <span className="caption">
          Typesetting for independent Kansas City publication,{" "}
          <u>The City And The City</u>. Fonts → IvyPresto, Nudge, Apple Garamond
        </span>
      </div>
    </>
  );
}
