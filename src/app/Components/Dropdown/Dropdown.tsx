"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./Dropdown.module.css";
import { FaChevronDown } from "react-icons/fa";

type DropdownProps = {
  question: string;
  answer: string;
};

const Dropdown: React.FC<DropdownProps> = ({ question, answer }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const toggleDropdown = () => {
    setOpen((open) => !open);
  };

  return (
    <div>
      <div
        ref={ref}
        onClick={toggleDropdown}
        className={open ? styles.open : styles["question-block"]}
      >
        <h1 className={styles.question}>{question}</h1>
        {open && <p className="answer">{answer}</p>}
        <button className={styles.btnRightArrow}>
          <FaChevronDown className={styles.arrow} onClick={toggleDropdown} />
        </button>
      </div>
    </div>
  );
};

export default Dropdown;
