"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import styles from "./Test.module.css";

const containerVariants: Variants = {
  initial: { textShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: {
    textShadow: "2px 2px 5px rgba(255,255,255,0.8)",
    transition: { staggerChildren: 0.05 },
  },
};

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
      <motion.button
        className={styles.button}
        type="button"
        initial="initial"
        whileHover="hover"
        variants={containerVariants}
        style={{ position: "relative", overflow: "hidden" }}
      >
        Jetzt stöbern
        {/*Horizontal Oben Links */}
        <motion.span
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "50%",
            height: "2px",
            backgroundColor: "white",
            transformOrigin: "left",
          }}
          variants={{
            initial: { scaleX: 0 },
            hover: {
              scaleX: 1,
              transition: { duration: 0.3, ease: "easeInOut" },
            },
          }}
        />
        {/*Horizontal Oben Rechts */}
        <motion.span
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "30%",
            height: "2px",
            backgroundColor: "white",
            transformOrigin: "right",
            scaleX: 0,
          }}
          variants={{
            initial: { scaleX: 0 },
            hover: {
              scaleX: 1,
              transition: { duration: 0.3, ease: "easeInOut" },
            },
          }}
        />
        {/* Vertikal Rechts Oben */}
        <motion.span
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "2px",
            height: "25%", // nicht 100%
            backgroundColor: "white",
            transformOrigin: "top",
            scaleY: 0,
          }}
          variants={{
            initial: { scaleY: 0 },
            hover: {
              scaleY: 1,
              transition: { duration: 0.3, ease: "easeInOut" },
            },
          }}
        />
        {/* Vertikal Rechts Unten */}
        <motion.span
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "2px",
            height: "45%",
            backgroundColor: "white",
            transformOrigin: "bottom",
            scaleY: 0,
          }}
          variants={{
            initial: { scaleY: 0 },
            hover: {
              scaleY: 1,
              transition: { duration: 0.3, ease: "easeInOut" },
            },
          }}
        />
        {/*Horizontal Unten Links*/}
        <motion.span
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "30%",
            height: "2px",
            backgroundColor: "white",
            transformOrigin: "left",
            scaleX: 0,
          }}
          variants={{
            initial: { scaleX: 0 },
            hover: {
              scaleX: 1,
              transition: { duration: 0.3, ease: "easeInOut" },
            },
          }}
        />
        {/*Horizontal Unten Rechts*/}
        <motion.span
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "50%",
            height: "2px",
            backgroundColor: "white",
            transformOrigin: "right",
            scaleX: 0,
          }}
          variants={{
            initial: { scaleX: 0 },
            hover: {
              scaleX: 1,
              transition: { duration: 0.3, ease: "easeInOut" },
            },
          }}
        />
        {/* Vertikal Links Unten*/}
        <motion.span
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "2px",
            height: "25%",
            backgroundColor: "white",
            transformOrigin: "bottom",
            scaleY: 0,
          }}
          variants={{
            initial: { scaleY: 0 },
            hover: {
              scaleY: 1,
              transition: { duration: 0.3, ease: "easeInOut" },
            },
          }}
        />
        {/* Vertikal Links Oben*/}
        <motion.span
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "2px",
            height: "50%",
            backgroundColor: "white",
            transformOrigin: "top",
            scaleY: 0,
          }}
          variants={{
            initial: { scaleY: 0 },
            hover: {
              scaleY: 1,
              transition: { duration: 0.3, ease: "easeInOut" },
            },
          }}
        />
      </motion.button>
    </div>
  );
};

export default Test;
