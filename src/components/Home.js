import React from "react";
import AboutMe from "./AboutMe";
import Project from "./Project";
import TestimonialCard from "./TestimonialCard";
import { MDBCardLink } from "mdb-react-ui-kit";
export default function Home() {
  return (
    <div>
      <AboutMe />
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <Project />
      <h2 style={{ textAlign: "center" }}>Testimonials</h2>
      <div className="grid">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
      <MDBCardLink
        href="#"
        style={{
          marginTop: "2rem",
          float: "right",
        }}
      >
        <i class="fas fa-chevron-up" style={{ width: "50px" }}></i>
      </MDBCardLink>
    </div>
  );
}
