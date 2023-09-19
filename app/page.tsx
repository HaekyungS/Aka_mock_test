"use client";
import Link from "next/link";
import styles from "../styles/page.module.css";
import { useEffect, useState } from "react";
import { warningMessage, number } from "../data/data";
import { RyuLink } from "../component/RyuLink";
import { setCookie, getCookies, deleteCookie } from "cookies-next";

export default function Page() {
  const [name, setName] = useState("");

  useEffect(() => {
    if (getCookies !== undefined) {
      deleteCookie("user");
      deleteCookie("answer");
    }
  });

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
          <input
            className={styles.name}
            type="text"
            placeholder="이름을 입력해주세요"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
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

      {/* 주의사항 */}
      <div className={`${styles.main} ${styles.flexColumnCenter}`}>
        <ul className={`${styles.messageBox} ${styles.flexColumnCenterNoJustify}`}>
          {warningMessage.map((message, index) => {
            if (index === 2) {
              return <RyuLink key={index} />;
            } else {
              return (
                <li key={index} className={styles.message}>
                  {message}
                </li>
              );
            }
          })}
        </ul>
        <Link
          href="/Mock_test"
          className={styles.buttom}
          onClick={(e) => {
            if (name === "undefined" || name === "") {
              e.preventDefault();
              window.alert("이름을 입력해주세요.");
            } else {
              setCookie("user", name);
            }
          }}
        >
          니네가 나에 대해 몰 알아!
        </Link>
      </div>
    </div>
  );
}
