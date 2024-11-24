import React, { useState, useEffect } from "react";
import AnimalsDb from "./data/AnimalsDb"; // Import the animal data
import "./App.css"; // For styling

function App() {
  const [currentAnimal, setCurrentAnimal] = useState(null);
  const [result, setResult] = useState("");
  const [shuffledAnimals, setShuffledAnimals] = useState([]);

  // Function to shuffle animals and set a random one as the current animal
  const startGame = () => {
    const shuffled = [...AnimalsDb].sort(() => Math.random() - 0.5);
    setShuffledAnimals(shuffled);
    const randomAnimal =
      shuffled[Math.floor(Math.random() * shuffled.length)];
    setCurrentAnimal(randomAnimal);
    setResult(""); // Reset result
  };

  // Handle user's selection
  const handleAnimalClick = (selectedAnimal) => {
    if (selectedAnimal.name === currentAnimal.name) {
      setResult("Win!");
    } else {
      setResult("Lose!");
    }
  };

  // Start the game on the first render
  useEffect(() => {
    startGame();
  }, []);

  return (
    <div className="App">
      <h1>Animal Matching Game</h1>
      {currentAnimal && (
        <div>
          <h2>Find the animal: {currentAnimal.name}</h2>
        </div>
      )}
      <div className="animal-grid">
        {shuffledAnimals.map((animal, index) => (
          <div
            key={index}
            className="animal-card"
            onClick={() => handleAnimalClick(animal)}
          >
            <img src={animal.image} alt={animal.name} />
            <p>{animal.name}</p>
          </div>
        ))}
      </div>
      {result && <h3>Result: {result}</h3>}
      <button onClick={startGame}>Restart Game</button>
    </div>
  );
}

export default App;
