import { createContext, useState } from "react";

const MembershipContext = createContext();

export const MembershipProvider = ({ children }) => {
  const [memberships, setMemberships] = useState([]);

  const addMembership = (membership) => {
    setMemberships([...memberships, membership]);
    console.log("New Membership Added:", membership);
  };

  return (
    <MembershipContext.Provider value={{ memberships, addMembership }}>
      {children}
    </MembershipContext.Provider>
  );
};

export default MembershipContext;
