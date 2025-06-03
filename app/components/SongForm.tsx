'use client'
import { useState } from 'react'
import { supabase } from '../../supabaseClient'

export default function SongForm() {
  const [song, setSong] = useState('')
  const [rating, setRating] = useState(2.5)
  const [review, setReview] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const { error } = await supabase.from('reviews').insert([{ song, rating, review }])

    if (error) {
      console.error(error)
      setStatus('error')
    } else {
      setStatus('success')
      setSong('')
      setRating(2.5)
      setReview('')
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
      <label>
        🎧 Nombre de la canción:
        <input value={song} onChange={(e) => setSong(e.target.value)} required />
      </label>
      <br />
      <label>
        ⭐ Puntaje (0 a 5): {rating}
        <input
          type="range"
          min="0"
          max="5"
          step="0.25"
          value={rating}
          onChange={(e) => setRating(parseFloat(e.target.value))}
        />
      </label>
      <br />
      <label>
        📝 Review:
        <textarea value={review} onChange={(e) => setReview(e.target.value)} required />
      </label>
      <br />
      <button type="submit">Enviar</button>
      {status === 'success' && <p style={{ color: 'green' }}>✅ ¡Review enviada y guardada!</p>}
      {status === 'error' && <p style={{ color: 'red' }}>❌ Hubo un error. Revisá la consola.</p>}
    </form>
  )
}
