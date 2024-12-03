import React, { useState } from "react";
import styles from "../styles/users.module.css";

const Users = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.email || !user.password) {
      setError("Both fields are required!");
      return;
    }

    // Further validation or API call could be done here

    setError(""); // Clear any previous error messages
    alert("User registered successfully!");
    setUser({ email: "", password: "" }); // Reset form
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>User Registration</h1>

      {error && <div className={styles.errorMessage}>{error}</div>}

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleInputChange}
          className={styles.input}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleInputChange}
          className={styles.input}
        />
        <button type="submit" className={styles.submitButton}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Users;
