import React from "react";

export default function AnimalCards({ animals, onClick }) {
  return (
    <div style={styles.grid}>
      {animals.map((animal) => (
        <div
          key={animal.id}
          style={styles.card}
          onClick={() => onClick(animal)}
        >
          <img
            src={require(`../assets/img/${animal.image}`)}
            alt={animal.name}
            style={styles.image}
          />
        </div>
      ))}
    </div>
  );
}

const styles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "10px",
  },
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    cursor: "pointer",
  },
  image: { width: "100%", height: "100px", objectFit: "cover" },
};
