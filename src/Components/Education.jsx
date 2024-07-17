import React from "react";
import Container from "./Components";

const Education = () => {
  return (
    <section
      className="padding"
      id="education"
      style={{
        backgroundColor: "#f9f9f9",
        borderRadius: "5px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>Education</h2>

      <div className="education" style={{ display: "flex", justifyContent: "space-evenly" }}>
        <Container
          size={"medium"}
          backgroundImage={"linear-gradient(0deg, rgba(231,231,231,1) 0%, rgba(0,102,72,1) 100%)"}
          webLink={
            "https://www.ivytech.edu/programs/all-academic-programs/school-of-information-technology/cybersecurity-information-assurance/"
          }
          header={"Ivy Tech CC"}
          body={"A.A.S. Cyber Security"}
          buttonColor={"rgba(0,102,72,1)"}
        >
          <p style={{ color: "black", fontWeight: "500" }}>Graduated: December 2022</p>
        </Container>
        <Container
          size={"medium"}
          backgroundImage={
            "linear-gradient(0deg, #F5B80A 5%, #5C3000 100%)"
          }
          webLink={
            "https://www.valpo.edu/computing-information-sciences/academics/undergraduate-degree-programs/ba-bs-in-computer-science/"
          }
          header={"Valparaiso University"}
          body={"B.S. Computer Science"}
          buttonColor={"#331A00"}
        >
          <p style={{ color: "black", fontWeight: "500"}}>Graduating: May 2025</p>
        </Container>
        <Container
          size={"medium"}
          backgroundImage={
            "linear-gradient(0deg, #A80087 5%, #C76917 100%)"
          }
          webLink={
            "https://www.valpo.edu/computing-information-sciences/academics/graduate-programs/ms-in-cyber-security/"
          }
          header={"Valparaiso University"}
          body={"M.S. Cyber Security"}  
          buttonColor={"#6BC9C9"}
        >

          <p style={{ color: "white", fontWeight: "500" }}>Graduating: May 2027</p>
        </Container>
      </div>

      <div style={{ marginTop: "30px" }}>
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
