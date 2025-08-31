import React from "react";
import styles from "./ReceptionistDashboard.module.css";
import { FaUsers, FaUserPlus, FaClock } from "react-icons/fa";

const ReceptionistDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Receptionist Dashboard</h1>
        <p className={styles.subheading}>Manage patient registrations & queue</p>
      </header>

      {/* Summary Cards */}
      <section className={styles.summaryGrid}>
        <div className={`${styles.card} ${styles.blueCard}`}>
          <FaUsers className={styles.icon} />
          <div>
            <h2 className={styles.cardTitle}>Patients in Queue</h2>
            <p className={styles.cardValue}>9</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.greenCard}`}>
          <FaUserPlus className={styles.icon} />
          <div>
            <h2 className={styles.cardTitle}>New Registrations</h2>
            <p className={styles.cardValue}>4</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.yellowCard}`}>
          <FaClock className={styles.icon} />
          <div>
            <h2 className={styles.cardTitle}>Avg Wait Time</h2>
            <p className={styles.cardValue}>15 min</p>
          </div>
        </div>
      </section>

      {/* Queue List */}
      <section className={styles.mainGrid}>
        <div className={styles.queueContainer}>
          <h3 className={styles.sectionTitle}>Current Queue</h3>
          <ul className={styles.queueList}>
            <li className={styles.queueItem}>
              <span>Patient #301 - John Smith</span>
              <span>Waiting</span>
            </li>
            <li className={styles.queueItem}>
              <span>Patient #302 - Mary Johnson</span>
              <span>In Consultation</span>
            </li>
            <li className={styles.queueItem}>
              <span>Patient #303 - Ali Raza</span>
              <span>Completed</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default ReceptionistDashboard;
