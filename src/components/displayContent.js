import React, { useState, useEffect } from "react";
import { db } from "../initFirebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";

function DisplayContent() {
  const [content, setContent] = useState([]);

  const getStuff = async () => {
    const q = query(collection(db, "New Data"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const cities = [];
      querySnapshot.forEach((doc) => {
        cities.push(doc.data().name);
      });
      setContent(cities);
      //   return cities;
      console.log("Current names are : ", cities.join(", "));
    });
  };
  useEffect(() => {
    getStuff();
  }, []);

  return (
    <div>
      {content.map((item) => {
        return <h1>{item}</h1>;
      })}
    </div>
  );
}

export default DisplayContent;
