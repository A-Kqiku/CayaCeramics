import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./Slider.module.css";

type SliderProps = {
  src: StaticImageData;
  height: number;
  width: number;
};

const Slider: React.FC<SliderProps> = ({ src, height, width }) => {
  return (
    <div>
      <Image
        className={styles.image}
        src={src}
        width={width}
        height={height}
        alt="img"
      />
    </div>
  );
};

export default Slider;
