import React from "react";
import styles from "./DoctorDashboard.module.css";
import { FaClipboardList, FaUserMd, FaClock } from "react-icons/fa";

const DoctorDashboard = () => {
  return (
    <div className={styles.dashboardContainer}>
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Doctor Dashboard</h1>
        <p className={styles.subheading}>Manage your appointments & consultations</p>
      </header>

      {/* Summary Cards */}
      <section className={styles.summaryGrid}>
        <div className={`${styles.card} ${styles.blueCard}`}>
          <FaClipboardList className={styles.icon} />
          <div>
            <h2 className={styles.cardTitle}>Today's Appointments</h2>
            <p className={styles.cardValue}>12</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.greenCard}`}>
          <FaUserMd className={styles.icon} />
          <div>
            <h2 className={styles.cardTitle}>Patients Seen</h2>
            <p className={styles.cardValue}>7</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.yellowCard}`}>
          <FaClock className={styles.icon} />
          <div>
            <h2 className={styles.cardTitle}>Next Consultation</h2>
            <p className={styles.cardValue}>10:45 AM</p>
          </div>
        </div>
      </section>

      {/* Appointment List */}
      <section className={styles.mainGrid}>
        <div className={styles.appointmentsContainer}>
          <h3 className={styles.sectionTitle}>Upcoming Appointments</h3>
          <ul className={styles.appointmentList}>
            <li className={styles.appointmentItem}>
              <span>Patient #201 - Sarah Lee</span>
              <span>10:45 AM</span>
            </li>
            <li className={styles.appointmentItem}>
              <span>Patient #202 - Mark Wilson</span>
              <span>11:15 AM</span>
            </li>
            <li className={styles.appointmentItem}>
              <span>Patient #203 - Ayesha Khan</span>
              <span>11:45 AM</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default DoctorDashboard;
