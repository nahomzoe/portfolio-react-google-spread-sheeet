import React from "react";
import { db } from "../firebase.config";
import { useEffect, useState } from "react";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import Star from "./Star";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { useParams } from "react-router-dom";

const TestimonialCard = ({ testimony }) => {
  const testimoniesFetchRef = collection(db, "testimonies");
  const [testimonies, setTestimonies] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    onSnapshot(testimoniesFetchRef, (snapshot) => {
      const singleTestimony = snapshot.docs.find(
        (doc) => doc.id === id
      );
      setTestimonies({
        id: singleTestimony.id,
        viewing: false,
        ...singleTestimony.data(),
      });

      console.log(snapshot);
    });
  }, []);

  return (
    <div className="wrapper">
      <div className="card back-face">
        <img src={testimony.imageUrl} />
        <Star />
        <div className="info">
          <p>
            <RiDoubleQuotesL style={{ color: "rgb(188, 137, 42)" }} />{" "}
            {testimony.testimony}
            <RiDoubleQuotesR style={{ color: "rgb(188, 137, 42)" }} />
          </p>
          <div className="title">
            <h4>{testimony.fullName}</h4>
            <h5>{testimony.jobTitle}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
