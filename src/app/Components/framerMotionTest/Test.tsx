"use client";
import React from "react";
import { motion, rgba } from "framer-motion";
import styles from "./Test.module.css";

const Test = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.box}
        initial={{
          scale: 0.5,
          opacity: 1,
          rotate: 0,
          backgroundColor: "#ff0000",
        }}
        animate={{
          rotate: 360,
          scale: 1,
          opacity: 1,
          backgroundColor: ["#ff0000", "#0000ff"],
        }}
        transition={{
          backgroundColor: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          },
          rotate: { duration: 2, repeat: Infinity, ease: "linear" },
          scale: { duration: 0.4 },
        }}
      ></motion.div>
    </div>
  );
};

export default Test;
