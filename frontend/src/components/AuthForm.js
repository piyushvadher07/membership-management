import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api";

const AuthForm = ({ type }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (
        type === "register" &&
        formData.password !== formData.confirmPassword
      ) {
        setError("Passwords do not match");
        return;
      }

      const endpoint = type === "register" ? "/auth/register" : "/auth/login";
      const { data } = await api.post(endpoint, formData);
      localStorage.setItem("token", data.token);
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div>
      <h2>{type === "register" ? "Register" : "Login"}</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />
        {type === "register" && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />
        )}
        <button type="submit">
          {type === "register" ? "Register" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;
