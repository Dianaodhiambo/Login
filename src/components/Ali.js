import React, { useState } from "react";
import "../Ali.css";

const OrganizationForm = () => {
  const [formData, setFormData] = useState({
    contactPerson: "John Doe", // Hardcoded value for contact person
    role: "CEO", // Hardcoded value for role
    organizationName: "",
    organizationType: "",
    dateOfEstablishment: "",
    websiteURL: "",
    company: "", // Additional field for company
    firstName: "",
    lastName: "",
    designation: "",
    email: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Submit the form data to your backend or API here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Contact Person:
        <input
          type="text"
          name="contactPerson"
          value={formData.contactPerson}
          onChange={handleChange}
          disabled // Disables input for hardcoded contact person
        />
      </label>
      <br />
      <label>
        Role:
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleChange}
          disabled // Disables input for hardcoded role
        />
      </label>
      <br />
      <label>
        Organization Name:
        <input
          type="text"
          name="organizationName"
          value={formData.organizationName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Organization Type:
        <input
          type="text"
          name="organizationType"
          value={formData.organizationType}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Date of Establishment:
        <input
          type="date"
          name="dateOfEstablishment"
          value={formData.dateOfEstablishment}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Website URL:
        <input
          type="url"
          name="websiteURL"
          value={formData.websiteURL}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Company:
        <input
          type="text"
          name="company"
          value={formData.company}
          onChange={handleChange}
        />
      </label>
      <br />
      <h3>Personal Information</h3>
      <label>
        First Name:
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Last Name:
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Designation:
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default OrganizationForm;
