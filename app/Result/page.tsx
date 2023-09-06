"use client";
import Link from "next/link";
import styles from "../../styles/page.module.css";
import { useEffect, useState } from "react";
import { number, problems } from "../../data/data";
import { getCookies, setCookie } from "cookies-next";
import { Ex } from "../../component/problem";

export default function Page() {
  const [name, setName] = useState("");
  const [respon, setRespon] = useState([]);

  useEffect(() => {
    const user = decodeURIComponent(getCookies()["user"]);
    setName(user);

    const userRespon = decodeURIComponent(getCookies()["answer"]);
    const userResponRe = [];
    console.log("제대로 됐나", userRespon, typeof userRespon);
    console.log(userRespon.split(`"`));
    userRespon.split(`"`).map((e, index) => {
      if (index !== 0 && index % 2 === 1) {
        userResponRe.push(e);
      }
    });
    setRespon(userResponRe);
  }, []);

  return (
    <div>
      {/* 상단 고정부분 */}
      <div className={`${styles.topBox} ${styles.flexColumnCenter}`}>
        <div className={`${styles.topTitle} ${styles.flexRowCenter}`}>
          <div className={styles.title}>2023년도 아카이로 류 모의고사</div>
          <div className={styles.type}>아카용</div>
        </div>
        <div className={`${styles.topName} ${styles.flexRowCenter}`}>
          <div className={styles.name}>성 명</div>
          <div className={styles.name}>{name}</div>
          <div className={styles.name}>수험번호</div>
          <div className={`${styles.numberbox} ${styles.name} ${styles.flexRowCenter}`}>
            {number.map((n, index) => {
              return (
                <div key={index} className={styles.numberEA}>
                  {n}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* 문제 */}
      <div className={`${styles.problem} ${styles.flexColumnCenter}`}></div>
    </div>
  );
}
