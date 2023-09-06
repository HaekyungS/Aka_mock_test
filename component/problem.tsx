import { useEffect, useState } from "react";
import styles from "../styles/page.module.css";

interface problems {
  number: String;
  problem: String;
  ex: Array<String>;
}

export const Ex = (problem: problems) => {
  const [answer, setAnswer] = useState("");
  const [load, setLoad] = useState(false);
  const [exNum, setExNum] = useState([]);

  useEffect(() => {
    const exNumA = [];

    for (let i = 0; i < problem.ex.length; i++) {
      const random = Math.floor(Math.random() * problem.ex.length);

      if (exNumA.includes(random)) {
        i--;
      } else {
        exNumA.push(random);
      }
    }
    setExNum(exNumA);
    setLoad(true);
    // console.log("useEffect 안 랜덤숫자", exNum);
  }, []);

  // console.log("useEffect 밖 랜덤숫자", exNum);
  return (
    <>
      <div className={styles.examNumber}>{problem.number} 문제</div>
      <div className={styles.examTitle}>{problem.problem}</div>
      <ol className={`${styles.exams} ${styles.flexColumnCenter}`}>
        {load &&
          exNum.map((e, index) => {
            return (
              <li
                className={styles.examLi}
                key={index}
                onClick={() => {
                  setAnswer(`${problem.ex[e]}`);
                  console.log("선택한 답" + answer);
                }}
              >
                {problem.ex[e]}
              </li>
            );
          })}
      </ol>
      <div className={styles.buttom}>다음 문제</div>
    </>
  );
};
