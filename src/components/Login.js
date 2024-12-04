import React, { useState } from "react";
import axios from "axios";

const Login = ({ onLoginSuccess }) => {
  const [clientId, setClientId] = useState("");
  const [mpin, setMpin] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:8080/api/auth/login", {
        clientId,
        mpin,
      });
      console.log(response.data.data.userName);
      setMessage(`Login successful! Welcome, ${response.data.data.userName}`);
      onLoginSuccess(response.data.data.userName);
    } catch (error) {
      setMessage("Login failed: " + error.response.data);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Login</h2>
      <div style={{ marginBottom: "10px", width: "300px" }}>
        <input
          type="text"
          placeholder="Client ID"
          value={clientId}
          onChange={(e) => setClientId(e.target.value)}
          style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
      </div>
      <div style={{ marginBottom: "10px", width: "300px" }}>
        <input
          type="password"
          placeholder="MPIN"
          value={mpin}
          onChange={(e) => setMpin(e.target.value)}
          style={{ width: "100%", padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
      </div>
      <button
        onClick={handleLogin}
        style={{
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Login
      </button>
      <p style={{ marginTop: "10px", color: message.includes("failed") ? "red" : "green" }}>
        {message}
      </p>
    </div>
  );
};

export default Login;
