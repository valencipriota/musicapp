"use client";

import { useState } from "react";

export default function SongForm() {
  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(2.5);
  const [review, setReview] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Canción:", title);
    console.log("Puntaje:", rating);
    console.log("Review:", review);
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "2rem" }}>
      <div>
        <label>🎧 Nombre de la canción:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ display: "block", width: "100%", marginBottom: "1rem" }}
        />
      </div>

      <div>
        <label>⭐ Puntaje (0 a 5): {rating}</label>
        <input
          type="range"
          min="0"
          max="5"
          step="0.25"
          value={rating}
          onChange={(e) => setRating(parseFloat(e.target.value))}
          style={{ width: "100%", marginBottom: "1rem" }}
        />
      </div>

      <div>
        <label>💬 Review:</label>
        <textarea
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={4}
          style={{ width: "100%", marginBottom: "1rem" }}
        />
      </div>

      <button type="submit">Enviar</button>

      {submitted && (
        <p style={{ marginTop: "1rem", color: "green" }}>
          ✅ ¡Review enviada! (la consola del navegador la tiene)
        </p>
      )}
    </form>
  );
}
