import mongoose from "mongoose";

const RepresentativeSchema = new mongoose.Schema({
  name: String,
  designation: String,
  email: String,
  phone: String,
  mobile: String,
  photo: String,
});

const AttachmentSchema = new mongoose.Schema({
  type: String,
  file: String,
});

const OtherDetailsSchema = new mongoose.Schema({
  website: String,
  productName: String,
  coCategory: String,
  torrentServiceNo: String,
  gstnNo: String,
  amcTenementNo: String,
  udyogAadharNo: String,
});

const MemberSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  plotNo: { type: String, required: true },
  roadNo: { type: String, required: true },
  companyType: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  mobile: { type: String, required: true },
  representatives: [RepresentativeSchema],
  otherDetails: OtherDetailsSchema,
  attachments: [AttachmentSchema],
  documents: [{ documentName: String, file: String }],
  waterConnections: [
    { number: String, conSize: String, areaSize: String, shedNo: String },
  ],
});

const Member = mongoose.model("Member", MemberSchema);
export default Member;
