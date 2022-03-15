import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { ToastProvider, useToasts } from "react-toast-notifications";

import "react-toastify/dist/ReactToastify.css";
const Form = () => {
  const { addToast } = useToasts();
  const [name, setName] = useState("");
  const [charName, setCharName] = useState("");
  const [height, setHeight] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = async (name) => {
    const url = `https://swapi.dev/api/people/?search=${name}`;
    const data = await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.results.length === 0) {
          addToast("Not a Character", { appearance: "error" });
          console.log(data);
          setHeight("");
        } else {
          setHeight(data.results[0].height);
          setCharName(data.results[0].name);
        }
      })
      .catch((error) => addToast(`error: ${error}`));

    // console.log(data);
  };

  return (
    <div className="container starwars">
      <h1 className="text-center">Star Wars the Height?</h1>
      <form className="form text-center">
        <label htmlFor="fname">Name:</label>
        <br />
        <input
          type="text"
          id="fname"
          name="fname"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <br />
        <button
          type="button"
          className="btn btn-warning mt-3"
          onClick={() => handleSubmit(name)}
        >
          Search
        </button>
      </form>
      {height && (
        <h2 className="text-center mt-5">
          Height of {charName} is {height} cm.
        </h2>
      )}

      {<ToastContainer /> && error}
    </div>
  );
};

export default Form;
