import React from "react";
import { db } from "../firebase.config";
import { useEffect, useState } from "react";
import { collection, onSnapshot, doc, deleteDoc } from "firebase/firestore";
import Star from "./Star";
import TestimonialCard from "./TestimonialCard";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";

const AllTestimonial = () => {
  const testimoniesFetchRef = collection(db, "testimonies");
  const [testimonies, setTestimonies] = useState([]);

  useEffect(() => {
    onSnapshot(testimoniesFetchRef, (snapshot) => {
      const fetchedData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setTestimonies(fetchedData);
    });
  }, []);

  return (
    <div className="grid">
      {testimonies &&
        testimonies.map((testimony) => (
          <TestimonialCard testimony={testimony} />
        ))}
    </div>
  );
};

export default AllTestimonial;
