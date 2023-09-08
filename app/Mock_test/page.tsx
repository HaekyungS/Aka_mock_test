"use client";
import Link from "next/link";
import styles from "../../styles/page.module.css";
import { useEffect, useState } from "react";
import { number, problems } from "../../data/data";
import { getCookies, setCookie } from "cookies-next";
import { Ex } from "../../component/problem";

export default function Page() {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);
  const [respon, setRespon] = useState([]);

  useEffect(() => {
    const user = decodeURIComponent(getCookies()["user"]);
    if (user === "undefined") {
      window.alert("잘못된 접근입니다.");
      window.location.href = "/";
    } else {
      setName(user);
    }
  }, []);

  const NextButton = (count: number) => {
    if (count < 10) {
      return (
        <div
          className={styles.buttom}
          onClick={() => {
            if (respon[count] !== undefined) {
              setCount(count + 1);
            } else {
              window.alert("정답을 선택해주세요.");
            }
          }}
        >
          다음 문제
        </div>
      );
    } else if (count >= 10) {
      const hrefLink = respon[count] !== undefined ? "/Result" : "#";

      setCookie("answer", respon);
      return (
        <Link href={hrefLink} className={`${styles.buttom} ${styles.link}`} onClick={noCheck}>
          성적보러가기
        </Link>
      );
    }
  };

  const answerInsert = (answer) => {
    const answerAll = [...respon];
    answerAll[count] = answer;
    setRespon(answerAll);
  };

  const noCheck = (e) => {
    if (respon[count] === undefined) {
      e.preventDefault();
      window.alert("정답을 선택해주세요.");
    }
  };

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
      <div className={`${styles.problem} ${styles.flexColumnCenter}`}>
        {Ex(problems[count], answerInsert)}
        {NextButton(count)}
      </div>
    </div>
  );
}
