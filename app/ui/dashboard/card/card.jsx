import styles from "./card.module.css";
import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={20} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>10.272</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span>more than previous week
          <span className={styles.negative}>4%</span>
        </span>
      </div>
    </div>
  );
};

export default Card;
