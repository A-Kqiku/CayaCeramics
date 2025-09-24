"use client";
import React, { useEffect, useState } from "react";
import styles from "./Feed.module.css";
import Slider from "../Slider/Slider";
import { FiArrowRightCircle, FiArrowLeftCircle } from "react-icons/fi";

type FeedProps = {
  urls: string[];
};

const Feed: React.FC<FeedProps> = ({ urls }) => {
  const [index, setIndex] = useState(0);

  const handleRightClick: () => void = () => {
    if (index < urls.length - 1) {
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
        <button className={styles.btnRightArrow} onClick={handleLeftClick}>
          <FiArrowLeftCircle className={styles.rightArrow} />
        </button>
        <Slider src={urls[index]} width={800} height={600} />
        <button className={styles.btnRightArrow} onClick={handleRightClick}>
          <FiArrowRightCircle className={styles.rightArrow} />
        </button>
      </div>
      <div className="bottom"></div>
    </div>
  );
};

export default Feed;
