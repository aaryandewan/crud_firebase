import { db } from "../initFirebase";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  onSnapshot,
  query,
} from "firebase/firestore";

export const addPerson = async (formValues) => {
  try {
    const docRef = await addDoc(collection(db, "New Data"), {
      name: formValues.name,
      age: formValues.age,
      gender: formValues.gender,
      favoriteNumber: formValues.favoriteNumber,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getStuff = async () => {
  const q = query(collection(db, "New Data"));
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const cities = [];
    querySnapshot.forEach((doc) => {
      cities.push(doc.data().name);
    });
    //   return cities;
    console.log("Current names are : ", cities.join(", "));
  });
};
