import Image from "next/image";
import Link from "next/link";
import Logo from "../../Logo.png";
import styles from "./Navbar.module.css";
import { motion, spring } from "framer-motion";
import { Neonderthaw } from "next/font/google";

const neonderthawFont = Neonderthaw({ subsets: ["latin"], weight: "400" });

const MotionLink = motion(Link);

export default function Navbar() {
  return (
    <div className={styles.container}>
      {/* Logo */}
      <motion.div
        whileHover={{
          boxShadow:
            "0 0 12px rgba(255,255,255,0.2), 0 0 18px rgba(255,255,255,1), 0 0 24px rgba(255,255,255,0.6)",
          fontWeight: "bolder",
          cursor: "pointer",
        }}
        transition={{
          duration: 0.2,
          ease: "easeInOut",
          repeatType: "loop",
        }}
        className="flex-none rounded-full"
      >
        <Image
          src={Logo}
          className={styles.logo}
          width={75}
          height={75}
          alt="Logo"
        />
      </motion.div>

      {/* Links */}
      <div
        className={`flex space-x-8 mr-20 text-white text-3xl ${neonderthawFont.className}`}
      >
        <MotionLink
          initial={{
            color: "white",
          }}
          whileHover={{
            y: [0, 5, 0],
            scale: 1.2,
            opacity: 1,
            textShadow:
              "0 0 12px rgba(255,255,255,0.2), 0 0 24px rgba(255,255,255,1), 0 0 48px rgba(255,255,255,0.6)",
            fontWeight: "bolder",
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
            repeatType: "loop",
          }}
          href="/"
          className="text-3xl"
          prefetch={true}
        >
          Work
        </MotionLink>
        <MotionLink
          href="/"
          initial={{ color: "white" }}
          whileHover={{
            y: [0, 5, 0],
            scale: 1.2,
            opacity: 1,
            textShadow:
              "0 0 12px rgba(255,255,255,0.2), 0 0 24px rgba(255,255,255,1), 0 0 48px rgba(255,255,255,0.6)",
            fontWeight: "bolder",
            transition: {
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
          className="text-3xl"
          prefetch={true}
        >
          About
        </MotionLink>
        <MotionLink
          href="/"
          initial={{ color: "white" }}
          whileHover={{
            y: [0, 5, 0],
            scale: 1.2,
            opacity: 1,
            textShadow:
              "0 0 12px rgba(255,255,255,0.2), 0 0 24px rgba(255,255,255,1), 0 0 48px rgba(255,255,255,0.6)",
            fontWeight: "bolder",
            transition: {
              duration: 0.2,
              ease: "easeInOut",
            },
          }}
          className="text-3xl"
          prefetch={true}
        >
          Contact
        </MotionLink>
      </div>
    </div>
  );
}
