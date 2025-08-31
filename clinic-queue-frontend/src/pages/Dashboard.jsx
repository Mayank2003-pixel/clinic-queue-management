// src/pages/Dashboard.jsx

import React from 'react';
import styles from './Dashboard.module.css';
import { FaUserMd, FaUserPlus, FaClock, FaProcedures } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Clinic Dashboard</h1>
        <p className={styles.subheading}>Live insights & actions for better queue management</p>
      </header>

      {/* Summary Cards */}
      <section className={styles.summaryGrid}>
        <div className={`${styles.card} ${styles.blueCard}`}>
          <FaProcedures className={styles.icon} />
          <div>
            <h2 className={styles.cardTitle}>Total Patients Today</h2>
            <p className={styles.cardValue}>46</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.greenCard}`}>
          <FaUserMd className={styles.icon} />
          <div>
            <h2 className={styles.cardTitle}>Doctors Available</h2>
            <p className={styles.cardValue}>5</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.yellowCard}`}>
          <FaClock className={styles.icon} />
          <div>
            <h2 className={styles.cardTitle}>Appointments Ongoing</h2>
            <p className={styles.cardValue}>8</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.redCard}`}>
          <FaClock className={styles.icon} />
          <div>
            <h2 className={styles.cardTitle}>Avg Wait Time</h2>
            <p className={styles.cardValue}>12 min</p>
          </div>
        </div>
      </section>

      {/* Live Queue + Quick Actions */}
      <section className={styles.mainGrid}>
        {/* Live Queue Monitor */}
        <div className={styles.queueContainer}>
          <h3 className={styles.sectionTitle}>Live Queue Overview</h3>
          <ul className={styles.queueList}>
            <li className={styles.queueItem}>
              <span>Patient #124 - John Doe</span>
              <span className={styles.status}>Waiting</span>
            </li>
            <li className={styles.queueItem}>
              <span>Patient #125 - Priya Sen</span>
              <span className={styles.statusYellow}>In Consultation</span>
            </li>
            <li className={styles.queueItem}>
              <span>Patient #126 - Ahmed Khan</span>
              <span className={styles.statusGreen}>Completed</span>
            </li>
          </ul>
        </div>

        {/* Quick Actions */}
        <div className={styles.quickActions}>
          <h3 className={styles.sectionTitle}>Quick Actions</h3>
          <div className={styles.actionGroup}>
            <button className={styles.buttonBlue}><FaUserPlus /> Register New Patient</button>
            <button className={styles.buttonGreen}><FaClock /> Schedule Appointment</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
