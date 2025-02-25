import Member from "../models/MembershipModel.js";

export const addMembership = async (req, res) => {
  try {
    const newMember = new Member({ ...req.body });

    const savedMember = await newMember.save();
    res
      .status(201)
      .json({ message: "Membership successfully added!", savedMember });
  } catch (error) {
    console.error("Error in Membership Submission:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
