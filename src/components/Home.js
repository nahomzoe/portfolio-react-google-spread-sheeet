import React from "react";
import AboutMe from "./AboutMe";
import Project from "./Project";
import AllTestimonial from "./AllTestimonial";
import { MDBCardLink } from "mdb-react-ui-kit";
import FormModal from "./FormModal";
import Video from "./Video";
import Ex from "./Ex";

export default function Home() {
  return (
    <div>
      <AboutMe />
      {/* <Ex /> */}
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <Project />
      <h2 style={{ textAlign: "center" }}>Testimonials</h2>

      <AllTestimonial />

      <MDBCardLink
        href="#"
        style={{
          marginTop: "2rem",
          float: "right",
        }}
      >
        <i class="fas fa-chevron-up" style={{ width: "50px" }}></i>
      </MDBCardLink>
      <MDBCardLink
        href="#"
        style={{
          marginTop: "2rem",
          float: "center",
        }}
      >
        <FormModal />
      </MDBCardLink>
    </div>
  );
}
