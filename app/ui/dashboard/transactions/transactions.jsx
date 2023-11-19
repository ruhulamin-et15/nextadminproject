import React from "react";
import styles from "./transactions.module.css";
import Image from "next/image";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                />
                Mr. Ruhul
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>18.11.2023</td>
            <td>$20</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                />
                Mr. Amin
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>18.11.2023</td>
            <td>$20</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  className={styles.userImage}
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                />
                Mr. Zohn
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cencelled
              </span>
            </td>
            <td>18.11.2023</td>
            <td>$20</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
