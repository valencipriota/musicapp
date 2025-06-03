import SongForm from "./components/SongForm";

export default function Home() {
  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>🎵 Tu Letterboxd musical</h1>
      <p>Puntúa una canción, dejá tu review y descubrí lo que otros opinan.</p>

      <SongForm />
    </main>
  );
}
