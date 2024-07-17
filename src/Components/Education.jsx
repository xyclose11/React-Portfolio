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
          <Container size={"medium"} backgroundImage={"linear-gradient(0deg, rgba(231,231,231,1) 0%, rgba(0,102,72,1) 100%)"} 
          webLink={"https://www.ivytech.edu/programs/all-academic-programs/school-of-information-technology/cybersecurity-information-assurance/"} 
          header={"Ivy Tech Community College"}
          body={"A.A.S. Cyber Security/Information Assurance"}
          buttonColor={"rgba(0,102,72,1)"}>
            <p style={{ color: "black" }}>Graduated: December 2022</p>
          </Container>
          <Container size={"medium"} backgroundImage={"linear-gradient(317deg, rgba(167,78,94,1) 5%, rgba(106,100,177,1) 100%)"} webLink={"https://www.valpo.edu/computing-information-sciences/academics/undergraduate-degree-programs/ba-bs-in-computer-science/"}>
            <h3 style={{ color: "white" }}>Valparaiso University</h3>
            <h3 style={{ color: "white" }}>B.S. Computer Science</h3>
            <p style={{ color: "white" }}>Graduating: May 2025</p>
          </Container>
          <Container size={"medium"} backgroundImage={"linear-gradient(317deg, rgba(167,78,94,1) 5%, rgba(106,100,177,1) 100%)"} webLink={"https://www.valpo.edu/computing-information-sciences/academics/graduate-programs/ms-in-cyber-security/"}>
            <h3 style={{ color: "white" }}>Valparaiso University</h3>
            <h3 style={{ color: "white" }}>M.S. Cyber Security</h3>
            <p style={{ color: "white" }}>Graduating: May 2027</p>
          </Container>
        </div>

      <div style={{marginTop: "30px"}}>

        <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>
          External Courses
        </h2>

        <div className="education" style={{ display: "flex", justifyContent: "space-evenly" }}>
          <Container size={"small"} backgroundImage={"linear-gradient(to right, #642b73, #c6426e)"}>
            <h3 style={{ color: "white" }}>University of Illinois Urbana-Champaign</h3>
            <p style={{ color: "white" }}>B.S. Computer Science</p>
            <p style={{ color: "white" }}>Graduated: May 2021</p>
          </Container>
          <Container size={"small"} backgroundImage={"linear-gradient(to right, #642b73, #c6426e)"}>
            <h3 style={{ color: "white" }}>University of Illinois Urbana-Champaign</h3>
            <p style={{ color: "white" }}>B.S. Computer Science</p>
            <p style={{ color: "white" }}>Graduated: May 2021</p>
          </Container>
          <Container size={"small"} backgroundImage={"linear-gradient(to right, #642b73, #c6426e)"}>
            <h3 style={{ color: "white" }}>University of Illinois Urbana-Champaign</h3>
            <p style={{ color: "white" }}>B.S. Computer Science</p>
            <p style={{ color: "white" }}>Graduated: May 2021</p>
          </Container>
          <Container size={"small"} backgroundImage={"linear-gradient(to right, #642b73, #c6426e)"}>
            <h3 style={{ color: "white" }}>University of Illinois Urbana-Champaign</h3>
            <p style={{ color: "white" }}>B.S. Computer Science</p>
            <p style={{ color: "white" }}>Graduated: May 2021</p>
          </Container>
          <Container size={"small"} backgroundImage={"linear-gradient(to right, #642b73, #c6426e)"}>
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
