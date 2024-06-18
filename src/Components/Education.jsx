import React from "react";

const Education = () => {
  return (
    <section
      className="padding"
      id="education"
      style={{ backgroundColor: "#f9f9f9", borderRadius: "5px", padding: "20px" }}
    >
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>Education</h2>
      <span
        className="education"
      >
        <div
          style={{
            textAlign: "center",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <h3 style={{ color: "#555" }}>Valparaiso University</h3>
          <p style={{ color: "#777" }}>B.S. Computer Science</p>
          <p style={{ color: "#777" }}>Graduating: May 2025</p>
        </div>
      </span>
      <span
        className="education"
      >
        <div
          style={{
            textAlign: "center",
            boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
            padding: "20px",
            borderRadius: "5px",
          }}
        >
          <h3 style={{ color: "#555" }}>Valparaiso University</h3>
          <p style={{ color: "#777" }}>M.S. Cyber Security</p>
          <p style={{ color: "#777" }}>Graduating: May 2025</p>
        </div>
      </span>
    </section>
  );
};

export default Education;
