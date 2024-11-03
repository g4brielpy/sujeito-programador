import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [nutri, setNutri] = useState([]);
  const URL = "https://sujeitoprogramador.com/rn-api/?api=posts";

  useEffect(() => {
    const fetchAPI = fetch(URL)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <>
      <h1>Requisições HTPPS com React</h1>
    </>
  );
}

export default App;
