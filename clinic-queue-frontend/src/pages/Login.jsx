import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("patient");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mock login handling (replace with API later)
    if (role === "patient") {
      navigate("/dashboard");
    } else if (role === "receptionist") {
      navigate("/reception-dashboard");
    } else if (role === "doctor") {
      navigate("/doctor-dashboard");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h2 className={styles.title}>QLINIK Login</h2>

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <label>Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="patient">Patient</option>
          <option value="receptionist">Receptionist</option>
          <option value="doctor">Doctor</option>
        </select>

        <button type="submit" className={styles.loginButton}>
          Login
        </button>

        {role === "patient" && (
          <p className={styles.registerText}>
            New here? <a href="/register">Register as Patient</a>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
