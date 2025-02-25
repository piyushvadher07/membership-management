import React, { useContext, useState } from "react";
import MembershipContext from "../context/MembershipContext";

const Membership = () => {
  const membershipContext = useContext(MembershipContext);

  const [formData, setFormData] = useState({
    companyName: "",
    plotNo: "",
    roadNo: "",
    companyType: "",
    email: "",
    phone: "",
    mobile: "",
  });

  if (!membershipContext) {
    return <p>Error: Membership Context is not available.</p>;
  }

  const { addMembership } = membershipContext;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMembership(formData);
  };

  return (
    <div className="membership-container">
      <h1>Membership Registration</h1>
      <form onSubmit={handleSubmit} className="membership-form">
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Membership;
