import React from "react";
import Image, { StaticImageData } from "next/image";
import styles from "./Hero.module.css";
import { motion } from "framer-motion";
import { Ovo } from "next/font/google";
import placeholder from "../../Ceramic_hero.png";

type HeroProps = {
  src: StaticImageData;
  alt: string;
};
const ovo = Ovo({ subsets: ["latin"], weight: "400" });

const containerVariants = {
  initial: { textShadow: "0px 0px 0px rgba(0,0,0,0)" },
  hover: {
    textShadow: "2px 2px 5px rgba(255,255,255,0.8)",
    transition: { staggerChildren: 0.05 },
  },
};

const lineVariants = {
  initial: { scaleX: 0 },
  hover: { scaleX: 1, transition: { duration: 0.3, ease: "easeInOut" } },
};
const outlineVariants = {
  initial: { scaleX: 0 },
  hover: { scaleX: 1 },
};

const Hero: React.FC<HeroProps> = ({ src, alt }) => {
  return (
    <div className={styles["hero-container"]}>
      <div className={styles["img-container"]}>
        <Image
          src={placeholder}
          className={styles["hero-img"]}
          width={800}
          height={1000}
          alt={alt}
        ></Image>
      </div>
      <div className={`${styles.description} ${ovo.className}`}>
        <div className={styles["title-container"]}>
          <span className={styles.line}>
            <h1>CAYA CERAMICS</h1>
          </span>
          <span className={styles.line}>
            <h1 className={styles.thick}>Töpferwaren & Mehr</h1>
          </span>
          <span className={styles.line}>
            <h1 className={styles.normal}>Josina Hohnholz</h1>
          </span>
        </div>

        <div className={styles["description-container"]}>
          <p className={styles.text}>
            Entdecken Sie die Kunst des Töpferns – Handgefertigte Keramik für
            Ihr Zuhause <br />
            Verleihen Sie Ihrem Raum einen einzigartigen Charme mit unseren
            exklusiv handgefertigten Töpferwaren. Jedes Stück ist ein Kunstwerk,
            das mit Leidenschaft und Hingabe von erfahrenen Kunsthandwerkern
            gefertigt wird. Ob Vasen, Schalen oder Tassen – finden Sie das
            perfekte Accessoire für Ihr Zuhause oder ein besonderes Geschenk.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Voluptatibus molestiae illum non consectetur expedita pariatur quod
            quas architecto voluptate adipisci sequi, dolor ipsum mollitia
            aperiam ducimus. Quae quidem temporibus ea.
          </p>

          <motion.button
            className={styles.button}
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
      </div>
    </div>
  );
};

export default Hero;
