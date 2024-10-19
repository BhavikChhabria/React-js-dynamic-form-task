import React, { useState } from "react";
import "./index.css";
import { FaUserCircle } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";

function App() {
  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    state: "",
    phoneNumber: "",
    contactMethod: "",
    qualification: "",
    graduationYear: "",
    subjects: [],
    gpa: 0.0,
    jobTitle: "",
    employmentStatus: "",
    skills: [],
    favoriteHobby: "",
    techInterest: 1,
    sportsParticipation: "",
  });

  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "New York",
    "Texas",
    "Washington",
    "Wisconsin",
    "Wyoming",
  ];
  const qualifications = [
    "High School",
    "Associate Degree",
    "Bachelor's Degree",
    "Master's Degree",
    "Doctorate",
  ];
  const subjects = [
    { label: "Mathematics", value: "math" },
    { label: "Physics", value: "physics" },
    { label: "Chemistry", value: "chemistry" },
    { label: "Biology", value: "biology" },
    { label: "Computer Science", value: "cs" },
  ];
  const skills = [
    { label: "Programming", value: "programming" },
    { label: "Project Management", value: "projectManagement" },
    { label: "Design", value: "design" },
    { label: "Data Analysis", value: "dataAnalysis" },
    { label: "Communication", value: "communication" },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...prevData[name], value]
          : prevData[name].filter((item) => item !== value),
      }));
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };

  return (
    <div className="form-container">
      <header className="header">
        <div className="user-info">
          <FaUserCircle size={30} />
          <span>{formData.fullName || "User Name"}</span>
          <MdKeyboardArrowDown size={20} className="down-arrow" />
        </div>
      </header>

      <h2>Personal Information Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="section">
          <h3 className="section-title">Contact Information</h3>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Address:
            <textarea
              name="address"
              placeholder="Enter your address"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            State:
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              <option value="">Select a state</option>
              {states.map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </select>
          </label>
          <label>
            Phone Number:
            <input
              type="text"
              name="phoneNumber"
              placeholder="Enter your phone number"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </label>
          <div>
            Preferred Contact Method:
            <label>
              <input
                type="radio"
                name="contactMethod"
                value="email"
                checked={formData.contactMethod === "email"}
                onChange={handleChange}
              />{" "}
              Email
            </label>
            <label>
              <input
                type="radio"
                name="contactMethod"
                value="phone"
                checked={formData.contactMethod === "phone"}
                onChange={handleChange}
              />{" "}
              Phone
            </label>
            <label>
              <input
                type="radio"
                name="contactMethod"
                value="sms"
                checked={formData.contactMethod === "sms"}
                onChange={handleChange}
              />{" "}
              SMS
            </label>
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">Schooling Information</h3>
          <label>
            Highest Qualification:
            <select
              name="qualification"
              value={formData.qualification}
              onChange={handleChange}
              required
            >
              <option value="">Select a qualification</option>
              {qualifications.map((qual) => (
                <option key={qual} value={qual}>
                  {qual}
                </option>
              ))}
            </select>
          </label>
          <label>
            Graduation Year:
            <input
              type="number"
              name="graduationYear"
              min="1950"
              max="2024"
              value={formData.graduationYear}
              onChange={handleChange}
              required
            />
          </label>
          <div>
            Subjects Studied:
            {subjects.map((subject) => (
              <label key={subject.value}>
                <input
                  type="checkbox"
                  name="subjects"
                  value={subject.value}
                  checked={formData.subjects.includes(subject.value)}
                  onChange={handleChange}
                />
                {subject.label}
              </label>
            ))}
          </div>
          <label>
            GPA: {formData.gpa}
            <input
              type="range"
              name="gpa"
              min="0"
              max="4"
              step="0.1"
              value={formData.gpa}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="section">
          <h3 className="section-title">Employment Details</h3>
          <label>
            Current Job Title:
            <input
              type="text"
              name="jobTitle"
              placeholder="Enter your current job title"
              value={formData.jobTitle}
              onChange={handleChange}
            />
          </label>
          <div>
            Employment Status:
            <label>
              <input
                type="radio"
                name="employmentStatus"
                value="employed"
                checked={formData.employmentStatus === "employed"}
                onChange={handleChange}
              />{" "}
              Employed
            </label>
            <label>
              <input
                type="radio"
                name="employmentStatus"
                value="unemployed"
                checked={formData.employmentStatus === "unemployed"}
                onChange={handleChange}
              />{" "}
              Unemployed
            </label>
            <label>
              <input
                type="radio"
                name="employmentStatus"
                value="student"
                checked={formData.employmentStatus === "student"}
                onChange={handleChange}
              />{" "}
              Student
            </label>
            <label>
              <input
                type="radio"
                name="employmentStatus"
                value="retired"
                checked={formData.employmentStatus === "retired"}
                onChange={handleChange}
              />{" "}
              Retired
            </label>
          </div>
          <div>
            Skills:
            {skills.map((skill) => (
              <label key={skill.value}>
                <input
                  type="checkbox"
                  name="skills"
                  value={skill.value}
                  checked={formData.skills.includes(skill.value)}
                  onChange={handleChange}
                />
                {skill.label}
              </label>
            ))}
          </div>
        </div>

        <div className="section">
          <h3 className="section-title">Hobbies and Interests</h3>
          <label>
            Favorite Hobby:
            <input
              type="text"
              name="favoriteHobby"
              placeholder="Enter your favorite hobby"
              value={formData.favoriteHobby}
              onChange={handleChange}
            />
          </label>
          <label>
            Level of Interest in Technology: {formData.techInterest}
            <input
              type="range"
              name="techInterest"
              min="1"
              max="10"
              step="1"
              value={formData.techInterest}
              onChange={handleChange}
            />
          </label>
          <div>
            Do you participate in any sports?
            <label>
              <input
                type="radio"
                name="sportsParticipation"
                value="yes"
                checked={formData.sportsParticipation === "yes"}
                onChange={handleChange}
              />{" "}
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="sportsParticipation"
                value="no"
                checked={formData.sportsParticipation === "no"}
                onChange={handleChange}
              />{" "}
              No
            </label>
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
