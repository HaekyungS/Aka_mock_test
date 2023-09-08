import { useEffect, useState } from "react";
import styles from "../styles/page.module.css";

interface problems {
  number: String;
  problem: String;
  ex: Array<String>;
}

export const Ex = (problem: problems, answer) => {
  const [load, setLoad] = useState(false);
  const [exNum, setExNum] = useState([]);
  const [check, setCheck] = useState([
    { color: "black" },
    { color: "black" },
    { color: "black" },
    { color: "black" },
  ]);

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
    setCheck([{ color: "black" }, { color: "black" }, { color: "black" }, { color: "black" }]);
    // console.log("useEffect 안 랜덤숫자", exNum);
  }, [problem]);

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
                className={`${styles.examLi}`}
                style={check[index]}
                key={index}
                onClick={() => {
                  const reCheck = check.map((e) => {
                    if (e.color === "red") {
                      return { color: "black" };
                    } else {
                      return { color: "black" };
                    }
                  });

                  const update = [...reCheck];
                  update[index] = { color: "red" };
                  setCheck(update);
                  answer(problem.ex[e]);
                }}
              >
                {problem.ex[e]}
              </li>
            );
          })}
      </ol>
    </>
  );
};
