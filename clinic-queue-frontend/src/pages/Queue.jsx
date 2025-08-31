// src/pages/Queue.jsx
import React, { useState, useEffect } from "react";
import styles from "./Queue.module.css";
import { FaUser, FaClock, FaCheckCircle, FaStethoscope } from "react-icons/fa";

const Queue = () => {
  // Mock patient queue (replace with API later)
  const patients = [
    { id: 1, name: "John Doe", status: "waiting", time: "10:05 AM" },
    { id: 2, name: "Priya Sen", status: "in-consultation", time: "10:10 AM" },
    { id: 3, name: "Ahmed Khan", status: "completed", time: "9:55 AM" },
    { id: 4, name: "Emily Smith", status: "waiting", time: "10:20 AM" },
  ];

  // Simulating the logged-in patient
  const loggedInPatientId = 4;
  const avgConsultationTime = 12; // minutes per consultation

  // Identify the logged-in patient
  const loggedInPatient = patients.find((p) => p.id === loggedInPatientId);

  // Count how many patients are ahead in queue
  const waitingAhead = patients.filter(
    (p) => p.status === "waiting" && p.id !== loggedInPatientId
  ).length;

  // Calculate estimated wait time
  const estimatedTime = waitingAhead * avgConsultationTime;

  // Real-time countdown
  const [remainingTime, setRemainingTime] = useState(estimatedTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((prev) => (prev > 0 ? prev - 1 : 0));
    }, 60000); // update every 1 minute

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.queueContainer}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.pageTitle}>Live Queue</h1>
        <p className={styles.subheading}>
          Track patients and manage real-time consultations
        </p>
      </header>

      {/* Logged-in Patient Estimate */}
      {loggedInPatient && (
        <div className={styles.patientEstimate}>
          <h2>Hello, {loggedInPatient.name}</h2>
          <p>
            Your estimated consultation will begin in{" "}
            <span className={styles.highlight}>
              {remainingTime} minutes
            </span>{" "}
            ({waitingAhead} patient(s) ahead of you).
          </p>
        </div>
      )}

      {/* Queue List */}
      <div className={styles.queueList}>
        {patients.map((patient) => (
          <div key={patient.id} className={styles.queueCard}>
            <div className={styles.cardLeft}>
              <FaUser className={styles.icon} />
              <div>
                <h3 className={styles.patientName}>{patient.name}</h3>
                <p className={styles.time}>Arrived at {patient.time}</p>
              </div>
            </div>

            <div className={styles.cardRight}>
              {patient.status === "waiting" && (
                <span className={`${styles.status} ${styles.waiting}`}>
                  <FaClock /> Waiting
                </span>
              )}
              {patient.status === "in-consultation" && (
                <span
                  className={`${styles.status} ${styles.inConsultation}`}
                >
                  <FaStethoscope /> In Consultation
                </span>
              )}
              {patient.status === "completed" && (
                <span className={`${styles.status} ${styles.completed}`}>
                  <FaCheckCircle /> Completed
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Queue;
