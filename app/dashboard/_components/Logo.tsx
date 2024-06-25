import Image from "next/image";
import React from "react";

type Props = {};

function Logo({}: Props) {
  return (
    <div>
      <Image src={"/logo.svg"} alt="Logo" width={150} height={100} />
    </div>
  );
}

export default Logo;
