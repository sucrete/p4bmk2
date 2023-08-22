import Image from "next/image";

export default function Dump() {
  return (
    <>
      <div className="pane handful">
        <div className="imagesContainer">
          <Image
            key="first"
            src="/dumpTRUCK.svg"
            alt=""
            height={1350}
            width={1800}
            style={{ borderRadius: "10px" }}
          />
        </div>
        <span className="caption">
          Logo for internet art repository, <u>dumpTRUCK</u>
        </span>
      </div>
    </>
  );
}
