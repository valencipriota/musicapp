import { useState, useEffect } from "react";

export default function SongForm() {
  const [song, setSong] = useState("");
  const [rating, setRating] = useState(2.5);
  const [review, setReview] = useState("");
  const [success, setSuccess] = useState(false);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem("reviews");
    if (stored) setReviews(JSON.parse(stored));
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    const newReview = { song, rating, review };
    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem("reviews", JSON.stringify(updated));
    setSuccess(true);
    setSong("");
    setRating(2.5);
    setReview("");
    setTimeout(() => setSuccess(false), 3000);
  }

  return (
    <div style={{ maxWidth: 500, margin: "0 auto", fontFamily: "sans-serif" }}>
      <form onSubmit={handleSubmit}>
        <label>
          <span role="img" aria-label="note">🎵</span> Nombre de la canción:
          <input value={song} onChange={e => setSong(e.target.value)} required style={{ width: "100%" }} />
        </label>

        <label>
          <span role="img" aria-label="star">⭐</span> Puntaje (0 a 5): {rating.toFixed(2)}
          <input type="range" min="0" max="5" step="0.25" value={rating} onChange={e => setRating(parseFloat(e.target.value))} style={{ width: "100%" }} />
        </label>

        <label>
          <span role="img" aria-label="review">📝</span> Review:
          <textarea value={review} onChange={e => setReview(e.target.value)} required style={{ width: "100%" }} />
        </label>

        <button type="submit" style={{ marginTop: 10 }}>Enviar</button>
      </form>

      {success && <p style={{ color: "green" }}>✅ ¡Review enviada!</p>}

      <hr />
      <h2>Canciones puntuadas</h2>
      {reviews.length === 0 && <p>No hay canciones aún.</p>}
      <ul>
        {reviews.map((r, i) => (
          <li key={i} style={{ marginBottom: 10 }}>
            <strong>{r.song}</strong> — ⭐ {r.rating}/5<br />
            <em>{r.review}</em>
          </li>
        ))}
      </ul>
    </div>
  );
}
