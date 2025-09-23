"use client";
import React, { useEffect, useState } from "react";
import styles from "./Feed.module.css";
import Image, { StaticImageData } from "next/image";
import Slider from "../Slider/Slider";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";
import points from "../../points.svg";

type FeedProps = {
  urls: StaticImageData[];
};

const Feed: React.FC<FeedProps> = ({ urls }) => {
  const [index, setIndex] = useState(0);

  const handleRightClick: () => void = () => {
    if (index < 2) {
      setIndex((prevIndex) => (prevIndex + 1) % urls.length);
    }
  };
  const handleLeftClick: () => void = () => {
    if (index > 0) {
      setIndex((prevIndex) => (prevIndex - 1) % urls.length);
    }
  };
  /*
  useEffect{
    () =>{
      
    }
  }
    */

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <p>Entdecke meine neuesten Werke!</p>
      </div>
      <div className={styles.middle}>
        {" "}
        <button className={styles.btnRightArrow}>
          <FiArrowLeftCircle
            className={styles.rightArrow}
            onClick={handleLeftClick}
          />
        </button>
        <Slider src={urls[index]} width={800} height={600} />
        <button className={styles.btnRightArrow}>
          <FiArrowRightCircle
            className={styles.rightArrow}
            onClick={handleRightClick}
          />
        </button>
      </div>
      <div className="bottom">
        <Image
          className={styles.index}
          src={points}
          width={40}
          height={40}
          alt="index"
        />
      </div>
    </div>
  );
};

export default Feed;
