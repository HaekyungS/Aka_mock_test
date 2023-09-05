"use client";
import Link from "next/link";
import styles from "../styles/page.module.css";
import { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");

  return (
    <div>
      {/* 상단 고정부분 */}
      <div className={`${styles.topBox} ${styles.flexColumnCenter}`}>
        <div className={`${styles.topTitle} ${styles.flexRowCenter}`}>
          <div className={styles.title}>2023 아카이로 류 모의고사</div>
          <div className={styles.type}>홀수형</div>
        </div>
        <div className={`${styles.topName} ${styles.flexRowCenter}`}>
          <div className={styles.name}>성 명</div>
          <input
            className={styles.name}
            type="text"
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            onBlur={() => {
              console.log(name + "잘바뀌니");
            }}
          ></input>
          <div className={styles.name}>수험번호</div>
          <div className={`${styles.numberbox} ${styles.name} ${styles.flexRowCenter}`}>
            <div className={styles.numberEA}>2</div>
            <div className={styles.numberEA}>0</div>
            <div className={styles.numberEA}>0</div>
            <div className={styles.numberEA}>2</div>
            <div className={styles.numberEA}>-</div>
            <div className={styles.numberEA}>1</div>
            <div className={styles.numberEA}>1</div>
            <div className={styles.numberEA}>0</div>
            <div className={styles.numberEA}>1</div>
          </div>
        </div>
      </div>
      {/* 주의사항 */}
      <div className={`${styles.main}`}></div>
    </div>
  );
}
