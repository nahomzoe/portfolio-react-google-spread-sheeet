import React from "react";

import Star from "./Star";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const TestimonialCard = () => {
  return (
    <div className="wrapper">
      <div className="card back-face">
        <img
          src={`https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80`}
        />
        <Star />
        <div className="info">
          <p>
            <RiDoubleQuotesL style={{ color: "rgb(188, 137, 42)" }} /> The
            standard chunk of Lorem Ipsum used since reproduced in their exact
            original form, accompanied by English versions from the 1914
            translation by H.
            <RiDoubleQuotesR style={{ color: "rgb(188, 137, 42)" }} />
          </p>
          <div className="title">
            <h4>Nahom Asfaw</h4>
            <h5>job tittle</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
