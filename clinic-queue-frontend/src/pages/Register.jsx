// src/pages/Register.jsx
import React from "react";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.registerContainer}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Patient Registration</h1>
        <p className={styles.subheading}>
          Quickly add new patients to the clinic queue
        </p>
      </header>

      {/* Registration Form */}
      <div className={styles.formCard}>
        <h2 className={styles.cardHeader}>Patient Information</h2>
        <form className={styles.form}>
          <div className={styles.formGrid}>
            {/* Name */}
            <div className={styles.formGroup}>
              <label className={styles.label}>Full Name</label>
              <input
                type="text"
                className={styles.input}
                placeholder="Enter patient's full name"
              />
            </div>

            {/* Age */}
            <div className={styles.formGroup}>
              <label className={styles.label}>Age</label>
              <input
                type="number"
                className={styles.input}
                placeholder="Enter age"
              />
            </div>

            {/* Gender */}
            <div className={styles.formGroup}>
              <label className={styles.label}>Gender</label>
              <select className={styles.input}>
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Contact */}
            <div className={styles.formGroup}>
              <label className={styles.label}>Contact Number</label>
              <input
                type="tel"
                className={styles.input}
                placeholder="Enter contact number"
              />
            </div>
          </div>

          {/* Reason */}
          <div className={styles.formGroup}>
            <label className={styles.label}>Reason for Visit</label>
            <textarea
              className={`${styles.input} ${styles.textarea}`}
              placeholder="Describe reason for appointment"
            />
          </div>

          {/* Submit */}
          <div className={styles.formActions}>
            <button type="submit" className={styles.buttonGreen}>
              Register Patient
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
