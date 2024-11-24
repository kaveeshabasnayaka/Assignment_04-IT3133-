import React from "react";

export default function Result({ result, onPlayAgain }) {
  return (
    <div style={styles.container}>
      {result && <h3>{result}</h3>}
      <button onClick={onPlayAgain} style={styles.button}>
        Play Again
      </button>
    </div>
  );
}

const styles = {
  container: { marginTop: "20px" },
  button: { padding: "10px 20px", cursor: "pointer", borderRadius: "4px" },
};