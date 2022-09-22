import React from "react";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const AboutMe = () => {
  return (
    <div>
      <h2 className="si-name">About me</h2>
      <div className="single-card-container ">
        <div className="single-wrapper">
          <div className="card front-face">
            <img
              src={
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2072&q=80"
              }
            />
          </div>
        </div>
        <div className="detail">
          <div className="info">
            <p style={{ width: "600px" }}>
              <RiDoubleQuotesL style={{ color: "rgb(188, 137, 42)" }} /> The
              standard chunk of Lorem Ipsum used since reproduced in their exact
              original form, accompanied by English versions from the 1914
              translation by H.Lorem Ipsum is simply dummy text of the printing
              and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled it to make a type specimen
              book. It has survived not only five centuries, but also the leap
              into electronic typesetting, remaining essentially unchanged. It
              was popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
              <RiDoubleQuotesR style={{ color: "rgb(188, 137, 42)" }} />
            </p>
          </div>
          <div className="info">
            {/* {" "}
            <h3>Recipe is from:</h3>
            {recipe.countryname} */}
          </div>
          <div className="info">
            {/* {" "}
            <h3>Description:</h3>
            {recipe.description} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
