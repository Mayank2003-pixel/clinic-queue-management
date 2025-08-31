// src/pages/Appointments.jsx
import React from "react";
import styles from "./Appointments.module.css";
import { FaSearch, FaUserMd, FaClock, FaCalendarPlus } from "react-icons/fa";

const Appointments = () => {
  return (
    <div className={styles.appointmentsContainer}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Appointments</h1>
        <p className={styles.subheading}>
          Manage upcoming, ongoing, and past appointments
        </p>
      </header>

      {/* Search & Filters */}
      <section className={styles.searchSection}>
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search by patient, doctor, or date..."
        />
        <button className={styles.searchButton}>
          <FaSearch /> Search
        </button>
      </section>

      {/* Summary Cards */}
      <section className={styles.summaryGrid}>
        <div className={`${styles.card} ${styles.blueCard}`}>
          <FaCalendarPlus className={styles.icon} />
          <div>
            <h2 className={styles.cardTitle}>Upcoming</h2>
            <p className={styles.cardValue}>12</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.yellowCard}`}>
          <FaClock className={styles.icon} />
          <div>
            <h2 className={styles.cardTitle}>Ongoing</h2>
            <p className={styles.cardValue}>3</p>
          </div>
        </div>
        <div className={`${styles.card} ${styles.greenCard}`}>
          <FaUserMd className={styles.icon} />
          <div>
            <h2 className={styles.cardTitle}>Completed</h2>
            <p className={styles.cardValue}>27</p>
          </div>
        </div>
      </section>

      {/* Appointments List */}
      <section className={styles.appointmentsList}>
        <h3 className={styles.sectionTitle}>Today’s Appointments</h3>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Time</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>Dr. Sharma</td>
              <td>10:30 AM</td>
              <td><span className={styles.statusYellow}>Ongoing</span></td>
              <td>
                <button className={styles.buttonBlue}>Reschedule</button>
                <button className={styles.buttonRed}>Cancel</button>
              </td>
            </tr>
            <tr>
              <td>Priya Sen</td>
              <td>Dr. Mehta</td>
              <td>11:15 AM</td>
              <td><span className={styles.statusGreen}>Completed</span></td>
              <td>
                <button className={styles.buttonGray}>View</button>
              </td>
            </tr>
            <tr>
              <td>Ahmed Khan</td>
              <td>Dr. Kapoor</td>
              <td>12:00 PM</td>
              <td><span className={styles.status}>Upcoming</span></td>
              <td>
                <button className={styles.buttonBlue}>Reschedule</button>
                <button className={styles.buttonRed}>Cancel</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Appointments;
