import React, { useState } from "react";
import api from "../api";

const MembershipForm = ({ existingData = null, onSuccess }) => {
  const [formData, setFormData] = useState(
    existingData || {
      companyName: "",
      plotNo: "",
      roadNo: "",
      companyType: "",
      email: "",
      phone: "",
      mobile: "",
    }
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (existingData) {
        await api.put("/membership", formData);
      } else {
        await api.post("/membership", formData);
      }
      onSuccess();
    } catch (error) {
      console.error("Membership submission error", error);
    }
  };

  return (
    <div>
      <h2>{existingData ? "Update Membership" : "Register Membership"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="plotNo"
          placeholder="Plot No"
          value={formData.plotNo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="roadNo"
          placeholder="Road No"
          value={formData.roadNo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="companyType"
          placeholder="Company Type"
          value={formData.companyType}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        <button type="submit">{existingData ? "Update" : "Submit"}</button>
      </form>
    </div>
  );
};

export default MembershipForm;
