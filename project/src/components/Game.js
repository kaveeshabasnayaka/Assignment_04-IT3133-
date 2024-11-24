import React, { useState, useEffect } from "react";
import animals from "../data/AnimalsDb";
import "../assets/css/GameStyles.css";

export default function Game() {
  const [targetAnimal, setTargetAnimal] = useState(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    getRandomAnimal();
  }, []);

  const getRandomAnimal = () => {
    const randomIndex = Math.floor(Math.random() * animals.length);
    setTargetAnimal(animals[randomIndex]);
    setResult("");
  };

  const handleAnimalClick = (animal) => {
    if (animal.name.toLowerCase() === targetAnimal.name.toLowerCase()) {
      setResult("WIN");
    } else {
      setResult("LOSE");
    }
  };

  return (
    <div className="game-wrapper">
      <div className="header">
        <h1>ANIMAL MATCHING GAME</h1>
      </div>

      <div className="game-container">
        <div className="column result-column ">
          <div className="animal-grid-header"><h2>Result</h2></div>
          <span style={{ color: result === "WIN" ? "orange" : "orange" }}>
            {result}
          </span>
        </div>

       
        <div className="column name-column">
          <div className="animal-grid-header"><h2>Animal Name</h2></div>
          {targetAnimal ? targetAnimal.name.toUpperCase() : "Loading..."}
        </div>


        <div className="column grid-column">
          <div className="animal-grid-header"><h2>Select the Animal</h2></div>
          <div className="animal-grid">
            {animals.map((animal) => (
              <div
                key={animal.id}
                className="card"
                onClick={() => handleAnimalClick(animal)}
              >
                <img
                  src={require(`../assets/img/${animal.image}`)}
                  alt={animal.name}
                  className="image"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


