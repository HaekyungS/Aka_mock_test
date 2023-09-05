"use client";
import Link from "next/link";
import styles from "../../styles/page.module.css";

export default function Page() {
  return (
    <div>
      <div className={`${styles.intro} ${styles.flexColumnCenter}`}>
        <div className={styles.introBox}>
          2023년 11월 01일 레볼루션 하트 귀염둥이 막내!
          <br />
          아카이로 류님의 생일을 맞아,
          <br /> 류님과 관련한 문제들로 모의고사를 준비하였습니다.
          <br />총 11개의 객관식 문제들로 구성되어 있으며, <br />
          문제들은 류님의 나무위키, 생방송, 유튜브를 기반으로
          <br />
          출제하였습니다.
          <br />
          <br />
          너네가 나에 대해 몰 알아!
        </div>
      </div>
      <Link href="/Intro" className={styles.start}>
        ㄱㅂㅈㄱ!
      </Link>
    </div>
  );
}
