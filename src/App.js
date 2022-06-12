import React, { useState, useEffect } from "react";
import { collection, addDoc, getDocs, doc } from "firebase/firestore";
import { db } from "./initFirebase";

import Form from "./components/userForm";
import DisplayContent from "./components/displayContent";

export default function App() {
  const [ids, setIds] = useState([]);

  useEffect(() => {
    // callApi();
  }, []);

  return (
    <div>
      <Form />
      <DisplayContent />
    </div>
  );
}
