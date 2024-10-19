// import React from "react";
// import DynamicForm from "./components/DynamicForm";

// const formSchema = {
//   title: "Dynamic Personal Information Form",
//   description: "Please fill out your personal details below.",
//   groups: [
//     {
//       title: "Contact Information",
//       fields: [
//         {
//           label: "Full Name",
//           type: "text",
//           name: "fullName",
//           placeholder: "Enter your full name",
//           required: true,
//         },
//         {
//           label: "Email",
//           type: "text",
//           name: "email",
//           placeholder: "Enter your email",
//           required: true,
//         },
//         {
//           label: "Phone Number",
//           type: "text",
//           name: "phoneNumber",
//           placeholder: "Enter your phone number",
//           required: false,
//         },
//         {
//           label: "Preferred Contact Method",
//           type: "radio",
//           name: "contactMethod",
//           options: [
//             { label: "Email", value: "email" },
//             { label: "Phone", value: "phone" },
//             { label: "SMS", value: "sms" },
//           ],
//           required: true,
//         },
//       ],
//     },
//     {
//       title: "Schooling Information",
//       fields: [
//         {
//           label: "Highest Qualification",
//           type: "dropdown",
//           name: "qualification",
//           options: [
//             "High School",
//             "Associate Degree",
//             "Bachelor's Degree",
//             "Master's Degree",
//           ],
//           default: "Bachelor's Degree",
//           required: true,
//         },
//         {
//           label: "Graduation Year",
//           type: "number",
//           name: "graduationYear",
//           placeholder: "Enter graduation year",
//           min: 1950,
//           max: 2024,
//           required: true,
//         },
//         {
//           label: "Subjects Studied",
//           type: "checkbox",
//           name: "subjects",
//           options: [
//             { label: "Mathematics", value: "math" },
//             { label: "Physics", value: "physics" },
//             { label: "Chemistry", value: "chemistry" },
//           ],
//         },
//       ],
//     },
//   ],
// };

// const App = () => {
//   return (
//     <div className="App">
//       <DynamicForm schema={formSchema} />
//     </div>
//   );
// };

// export default App;

// src/App.js
// import React, { useState, useEffect } from "react";
// import FormGroup from "./components/FormGroupComponent";
// import formData from "./form.json"; // Importing the JSON data

// const App = () => {
//   const [formState, setFormState] = useState({});

//   useEffect(() => {
//     // Load existing data from localStorage
//     const savedData = localStorage.getItem("formData");
//     if (savedData) {
//       setFormState(JSON.parse(savedData));
//     }
//   }, []);

//   const handleChange = (name, value) => {
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     localStorage.setItem("formData", JSON.stringify(formState));
//     alert("Form data saved!");
//   };

//   return (
//     <div className="form-container">
//       <h1>{formData.form.title}</h1>
//       <p>{formData.form.description}</p>
//       <form onSubmit={handleSubmit}>
//         {formData.form.groups.map((group, index) => (
//           <FormGroup
//             key={index}
//             group={group}
//             formState={formState}
//             onChange={handleChange}
//           />
//         ))}
//         <button type="submit" className="submit-button">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default App;

// src/App.js
// import React, { useState, useEffect } from "react";
// import FormGroup from "./components/FormGroupComponent";
// import formData from "./form.json"; // Importing the JSON data
// import UserIcon from "./components/UserIcon"; // Importing the UserIcon component

// const App = () => {
//   const [formState, setFormState] = useState({});

//   useEffect(() => {
//     // Load existing data from localStorage
//     const savedData = localStorage.getItem("formData");
//     if (savedData) {
//       setFormState(JSON.parse(savedData));
//     }
//   }, []);

//   const handleChange = (name, value) => {
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     localStorage.setItem("formData", JSON.stringify(formState));
//     alert("Form data saved!");
//   };

//   return (
//     <div className="form-container">
//       <header className="app-header">
//         <h1>{formData.form.title}</h1>
//         <UserIcon /> {/* Adding UserIcon component */}
//       </header>
//       <p>{formData.form.description}</p>
//       <form onSubmit={handleSubmit}>
//         {formData.form.groups.map((group, index) => (
//           <FormGroup
//             key={index}
//             group={group}
//             formState={formState}
//             onChange={handleChange}
//           />
//         ))}
//         <button type="submit" className="submit-button">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default App;

// src/App.js
// import React, { useState, useEffect } from "react";
// import FormGroup from "./components/FormGroupComponent";
// import formData from "./form.json"; // Importing the JSON data
// import UserIcon from "./components/UserIcon"; // Importing the UserIcon component

// const App = () => {
//   const [formState, setFormState] = useState({});

//   useEffect(() => {
//     // Load existing data from localStorage
//     const savedData = localStorage.getItem("formData");
//     if (savedData) {
//       setFormState(JSON.parse(savedData));
//     }
//   }, []);

//   const handleChange = (name, value) => {
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     localStorage.setItem("formData", JSON.stringify(formState));
//     alert("Form data saved!");
//   };

//   return (
//     <div className="form-container">
//       <header className="app-header">
//         <h1>{formData.form.title}</h1>
//         <UserIcon /> {/* Adding UserIcon component */}
//       </header>
//       <p>{formData.form.description}</p>
//       <form onSubmit={handleSubmit}>
//         {formData.form.groups.map((group, index) => (
//           <FormGroup
//             key={index}
//             group={group}
//             formState={formState}
//             onChange={handleChange}
//           />
//         ))}
//         <button type="submit" className="submit-button">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import formData from "./form.json"; // Assuming form.json is in the same directory
// import "./index.css"; // Update this line to import your index.css file
// import UserIcon from "./components/UserIcon"; // Import UserIcon

// const App = () => {
//   const sections = [
//     "Contact Information",
//     "Schooling Information",
//     "Employment Details",
//     "Hobbies and Interests",
//   ]; // List of sections
//   const [activeSectionIndex, setActiveSectionIndex] = useState(0); // Track the active section index
//   const [sectionCompletion, setSectionCompletion] = useState({
//     "Contact Information": false,
//     "Schooling Information": false,
//     "Employment Details": false,
//     "Hobbies and Interests": false,
//   }); // Track completion of each section

//   const handleNextSection = () => {
//     if (activeSectionIndex < sections.length - 1) {
//       setActiveSectionIndex(activeSectionIndex + 1); // Move to the next section
//     }
//   };

//   const handlePrevSection = () => {
//     if (activeSectionIndex > 0) {
//       setActiveSectionIndex(activeSectionIndex - 1); // Move to the previous section
//     }
//   };

//   const handleSectionComplete = (section) => {
//     setSectionCompletion((prevState) => ({
//       ...prevState,
//       [section]: true, // Mark the specified section as completed
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if all sections are filled out
//     const formElements = e.target.elements;
//     const isEmpty = Object.keys(sectionCompletion).some(
//       (section) => !sectionCompletion[section]
//     );

//     if (isEmpty) {
//       alert("Please complete all sections before submitting!"); // Alert the user
//       return; // Prevent submission
//     }

//     // Save form data to local storage
//     const formData = {};
//     for (let i = 0; i < formElements.length; i++) {
//       const element = formElements[i];
//       if (element.name) {
//         formData[element.name] = element.value;
//       }
//     }
//     localStorage.setItem("formData", JSON.stringify(formData));
//     alert("Form data saved!");
//   };

//   const renderField = (field, onComplete, section) => {
//     switch (field.type) {
//       case "text":
//         return (
//           <div className="form-field">
//             <label>{field.label}</label>
//             <input
//               type="text"
//               name={field.name}
//               placeholder={field.placeholder}
//               onBlur={() => onComplete(section)} // Mark section as complete on blur
//               required={field.required}
//             />
//           </div>
//         );
//       case "number":
//         return (
//           <div className="form-field">
//             <label>{field.label}</label>
//             <input
//               type="number"
//               name={field.name}
//               placeholder={field.placeholder}
//               onBlur={() => onComplete(section)} // Mark section as complete on blur
//               required={field.required}
//             />
//           </div>
//         );
//       case "radio":
//         return (
//           <div className="form-field">
//             <label>{field.label}</label>
//             {field.options.map((option) => (
//               <div key={option.value}>
//                 <input
//                   type="radio"
//                   name={field.name}
//                   value={option.value}
//                   required={field.required}
//                   onBlur={() => onComplete(section)} // Mark section as complete on blur
//                 />
//                 <label>{option.label}</label>
//               </div>
//             ))}
//           </div>
//         );
//       case "checkbox":
//         return (
//           <div className="form-field">
//             <label>{field.label}</label>
//             {field.options.map((option) => (
//               <div key={option.value}>
//                 <input
//                   type="checkbox"
//                   name={field.name}
//                   value={option.value}
//                   onBlur={() => onComplete(section)} // Mark section as complete on blur
//                 />
//                 <label>{option.label}</label>
//               </div>
//             ))}
//           </div>
//         );
//       case "dropdown":
//         return (
//           <div className="form-field">
//             <label>{field.label}</label>
//             <select name={field.name} required={field.required}>
//               {field.options.map((option) => (
//                 <option key={option} value={option}>
//                   {option}
//                 </option>
//               ))}
//             </select>
//           </div>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="app-container">
//       <div className="form-sidebar">
//         <h2 onClick={() => setActiveSectionIndex(0)}>📞 Contact Information</h2>
//         <h2 onClick={() => setActiveSectionIndex(1)}>
//           🎓 Schooling Information
//         </h2>
//         <h2 onClick={() => setActiveSectionIndex(2)}>💼 Employment Details</h2>
//         <h2 onClick={() => setActiveSectionIndex(3)}>
//           🎨 Hobbies and Interests
//         </h2>

//         {/* Help section moved below the submit button */}
//         <div className="help-section">
//           <h3>Need any help?</h3>
//           <p>If you have any questions, please reach out to us!</p>
//         </div>
//       </div>
//       <div className="form-content">
//         <UserIcon /> {/* User Icon positioned at the top-right */}
//         <h1>{formData.form.title}</h1>
//         <p>{formData.form.description}</p>
//         <form onSubmit={handleSubmit}>
//           {formData.form.groups.map((group, index) => {
//             // Render only the active section
//             if (group.title === sections[activeSectionIndex]) {
//               return (
//                 <div key={index} className="form-group">
//                   <h2>{group.title}</h2>
//                   {group.fields.map((field) =>
//                     renderField(field, handleSectionComplete, group.title)
//                   )}

//                   {/* Render buttons for navigation */}
//                   <div className="navigation-buttons">
//                     {/* Render Back button for all sections except the first one */}
//                     {activeSectionIndex > 0 && (
//                       <button
//                         type="button"
//                         onClick={handlePrevSection}
//                         className="navigation-button back-button"
//                       >
//                         Back
//                       </button>
//                     )}
//                     {/* Render Next button for all sections except the last one */}
//                     {activeSectionIndex < sections.length - 1 && (
//                       <button
//                         type="button"
//                         onClick={handleNextSection}
//                         className="navigation-button next-button"
//                       >
//                         Next
//                       </button>
//                     )}
//                     {/* Render Submit button for the last section */}
//                     {activeSectionIndex === sections.length - 1 && (
//                       <button type="submit" className="submit-button">
//                         Submit
//                       </button>
//                     )}
//                   </div>
//                 </div>
//               );
//             }
//             return null; // Render nothing for non-active sections
//           })}
//         </form>
//       </div>
//     </div>
//   );
// };

// export default App;

// App.js
// App.js

// import React from "react";
// import "./index.css";
// import { FaPhone, FaGraduationCap, FaBriefcase, FaSmile } from "react-icons/fa"; // Importing icons

// const formData = {
//   form: {
//     title: "Personal Information Form",
//     description: "Please fill out your personal details below.",
//     groups: [
//       {
//         title: "Contact Information",
//         icon: <FaPhone />, // Add icon for Contact Information
//         fields: [
//           {
//             label: "Full Name",
//             type: "text",
//             name: "fullName",
//             placeholder: "Enter your full name",
//             required: true,
//           },
//           {
//             label: "Address",
//             type: "textarea",
//             name: "address",
//             placeholder: "Enter your address",
//             required: true,
//           },
//           {
//             label: "State",
//             type: "dropdown",
//             name: "state",
//             options: [
//               "Alabama",
//               "Alaska",
//               "Arizona",
//               "Arkansas",
//               "California",
//               "New York",
//               "Texas",
//               "Washington",
//               "Wisconsin",
//               "Wyoming",
//             ],
//             required: true,
//           },
//           {
//             label: "Phone Number",
//             type: "text",
//             name: "phoneNumber",
//             placeholder: "Enter your phone number",
//             required: true,
//           },
//           {
//             label: "Preferred Contact Method",
//             type: "radio",
//             name: "contactMethod",
//             options: [
//               { label: "Email", value: "email" },
//               { label: "Phone", value: "phone" },
//               { label: "SMS", value: "sms" },
//             ],
//             required: true,
//           },
//         ],
//       },
//       {
//         title: "Schooling Information",
//         icon: <FaGraduationCap />, // Add icon for Schooling Information
//         fields: [
//           {
//             label: "Highest Qualification",
//             type: "dropdown",
//             name: "qualification",
//             options: [
//               "High School",
//               "Associate Degree",
//               "Bachelor's Degree",
//               "Master's Degree",
//               "Doctorate",
//             ],
//             required: true,
//           },
//           {
//             label: "Graduation Year",
//             type: "number",
//             name: "graduationYear",
//             placeholder: "Enter graduation year",
//             min: 1950,
//             max: 2024,
//             required: true,
//           },
//           {
//             label: "Subjects Studied",
//             type: "checkbox",
//             name: "subjects",
//             options: [
//               { label: "Mathematics", value: "math" },
//               { label: "Physics", value: "physics" },
//               { label: "Chemistry", value: "chemistry" },
//               { label: "Biology", value: "biology" },
//               { label: "Computer Science", value: "cs" },
//             ],
//           },
//           {
//             label: "Grade Point Average (GPA)",
//             type: "slider",
//             name: "gpa",
//             min: 0.0,
//             max: 4.0,
//             step: 0.1,
//           },
//         ],
//       },
//       {
//         title: "Employment Details",
//         icon: <FaBriefcase />, // Add icon for Employment Details
//         fields: [
//           {
//             label: "Current Job Title",
//             type: "text",
//             name: "jobTitle",
//             placeholder: "Enter your current job title",
//             required: false,
//           },
//           {
//             label: "Employment Status",
//             type: "radio",
//             name: "employmentStatus",
//             options: [
//               { label: "Employed", value: "employed" },
//               { label: "Unemployed", value: "unemployed" },
//               { label: "Student", value: "student" },
//               { label: "Retired", value: "retired" },
//             ],
//           },
//           {
//             label: "Skills",
//             type: "checkbox",
//             name: "skills",
//             options: [
//               { label: "Programming", value: "programming" },
//               { label: "Project Management", value: "projectManagement" },
//               { label: "Design", value: "design" },
//               { label: "Data Analysis", value: "dataAnalysis" },
//               { label: "Communication", value: "communication" },
//             ],
//           },
//         ],
//       },
//       {
//         title: "Hobbies and Interests",
//         icon: <FaSmile />, // Add icon for Hobbies and Interests
//         fields: [
//           {
//             label: "Favorite Hobby",
//             type: "text",
//             name: "favoriteHobby",
//             placeholder: "Enter your favorite hobby",
//           },
//           {
//             label: "Level of Interest in Technology",
//             type: "slider",
//             name: "techInterest",
//             min: 1,
//             max: 10,
//             step: 1,
//           },
//           {
//             label: "Do you participate in any sports?",
//             type: "radio",
//             name: "sportsParticipation",
//             options: [
//               { label: "Yes", value: "yes" },
//               { label: "No", value: "no" },
//             ],
//           },
//         ],
//       },
//     ],
//   },
// };

// function App() {
//   const renderField = (field) => {
//     switch (field.type) {
//       case "text":
//         return (
//           <input
//             type="text"
//             name={field.name}
//             placeholder={field.placeholder}
//             required={field.required}
//           />
//         );
//       case "textarea":
//         return (
//           <textarea
//             name={field.name}
//             placeholder={field.placeholder}
//             required={field.required}
//           ></textarea>
//         );
//       case "dropdown":
//         return (
//           <select name={field.name} required={field.required}>
//             <option value="">Select...</option>
//             {field.options.map((option, index) => (
//               <option key={index} value={option}>
//                 {option}
//               </option>
//             ))}
//           </select>
//         );
//       case "radio":
//         return (
//           <div className="radio-group">
//             {field.options.map((option, index) => (
//               <label key={index}>
//                 <input
//                   type="radio"
//                   name={field.name}
//                   value={option.value}
//                   required={field.required}
//                 />
//                 {option.label}
//               </label>
//             ))}
//           </div>
//         );
//       case "checkbox":
//         return (
//           <div className="checkbox-group">
//             {field.options.map((option, index) => (
//               <label key={index}>
//                 <input type="checkbox" name={field.name} value={option.value} />
//                 {option.label}
//               </label>
//             ))}
//           </div>
//         );
//       case "slider":
//         return (
//           <input
//             type="range"
//             name={field.name}
//             min={field.min}
//             max={field.max}
//             step={field.step}
//           />
//         );
//       case "number":
//         return (
//           <input
//             type="number"
//             name={field.name}
//             placeholder={field.placeholder}
//             min={field.min}
//             max={field.max}
//             required={field.required}
//           />
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="app-container">
//       <div className="form-sidebar">
//         <h2>{formData.form.title}</h2>
//         <p>{formData.form.description}</p>
//         <ul className="sidebar-list">
//           {formData.form.groups.map((group, index) => (
//             <li key={index} className="sidebar-item">
//               {group.icon} {group.title}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="form-content">
//         <form className="personal-info-form">
//           {formData.form.groups.map((group, index) => (
//             <div key={index} className="form-group">
//               <h3>{group.title}</h3>
//               {group.fields.map((field, index) => (
//                 <div key={index} className="field-wrapper">
//                   <label>{field.label}</label>
//                   {renderField(field)}
//                 </div>
//               ))}
//             </div>
//           ))}
//           <div className="navigation-buttons">
//             <button type="button" className="navigation-button back-button">
//               Back
//             </button>
//             <button type="submit" className="navigation-button submit-button">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default App;
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
