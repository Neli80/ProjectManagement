// components/Section.js
import styles from "../styles/Section.module.css";

const Section = ({ leftContent, rightContent }) => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.left}>{leftContent}</div>
        <div className={styles.right}>{rightContent}</div>
      </div>
    </section>
  );
};

export default Section;
