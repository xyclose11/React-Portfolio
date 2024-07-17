import React from "react";
import Container from "./Components";

const Education = () => {
  return (
    <section
      className="padding"
      id="education"
      style={{ backgroundColor: "#f9f9f9", borderRadius: "5px", padding: "20px", display: "flex", flexDirection: "column" }}
    >
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>Education</h2>
    
        <div className="education" style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Container size={"small"}>
            <h3 style={{ color: "white" }}>University of Illinois Urbana-Champaign</h3>
            <p style={{ color: "white" }}>B.S. Computer Science</p>
            <p style={{ color: "white" }}>Graduated: May 2021</p>
          </Container>
          <Container size={"small"}>
            <h3 style={{ color: "white" }}>University of Illinois Urbana-Champaign</h3>
            <p style={{ color: "white" }}>B.S. Computer Science</p>
            <p style={{ color: "white" }}>Graduated: May 2021</p>
          </Container>
          <Container size={"small"}>
            <h3 style={{ color: "white" }}>University of Illinois Urbana-Champaign</h3>
            <p style={{ color: "white" }}>B.S. Computer Science</p>
            <p style={{ color: "white" }}>Graduated: May 2021</p>
          </Container>
        </div>

      <div style={{marginTop: "30px"}}>

        <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>External Courses</h2>

        <div className="education" style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Container size={"small"}>
            <h3 style={{ color: "white" }}>University of Illinois Urbana-Champaign</h3>
            <p style={{ color: "white" }}>B.S. Computer Science</p>
            <p style={{ color: "white" }}>Graduated: May 2021</p>
          </Container>
          <Container size={"small"}>
            <h3 style={{ color: "white" }}>University of Illinois Urbana-Champaign</h3>
            <p style={{ color: "white" }}>B.S. Computer Science</p>
            <p style={{ color: "white" }}>Graduated: May 2021</p>
          </Container>
          <Container size={"small"}>
            <h3 style={{ color: "white" }}>University of Illinois Urbana-Champaign</h3>
            <p style={{ color: "white" }}>B.S. Computer Science</p>
            <p style={{ color: "white" }}>Graduated: May 2021</p>
          </Container>
        </div>

        </div>


    </section>
  );
};

export default Education;
