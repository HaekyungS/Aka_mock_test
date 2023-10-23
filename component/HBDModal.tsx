import Link from "next/link";
import styles from "../styles/page.module.css";

export const HBDModal = () => {
  return (
    <div className={styles.modal}>
      <div className={`${styles.modalContainer} ${styles.flexColumnCenter}`}>
        <div>
          류님! 생일 축하드립니다!!🤗
          <br />
          플레이 해주셔서 감사합니다! <br />
          재밌게 즐기셨길 바래요🥰 <br />
          그 어느 날보다 행복한 하루였길 바라고, <br />늘 즐겁고 행복하시길 응원합니다!
        </div>
        <Link
          href="https://youtu.be/nOibrGPJt8U?si=uyWECboGPz5ZfkpB"
          target="_blank"
          className={styles.link}
        >
          🕊️마이!마이!마이!마이!🕊️
        </Link>
        <br />
        <div className={styles.modalFont}>*주변을 클릭 하시면 창이 닫힙니다.*</div>
      </div>
    </div>
  );
};
