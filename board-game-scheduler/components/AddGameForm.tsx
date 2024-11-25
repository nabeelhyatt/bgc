'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Game } from '@/types/Game'

interface AddGameFormProps {
  onAddGame: (game: Omit<Game, 'id'>) => void
}

export default function AddGameForm({ onAddGame }: AddGameFormProps) {
  const [name, setName] = useState('')
  const [minPlayers, setMinPlayers] = useState('')
  const [maxPlayers, setMaxPlayers] = useState('')
  const [genres, setGenres] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onAddGame({
      name,
      minPlayers: parseInt(minPlayers),
      maxPlayers: parseInt(maxPlayers),
      genres: genres.split(',').map(genre => genre.trim())
    })
    setName('')
    setMinPlayers('')
    setMaxPlayers('')
    setGenres('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Game Name</Label>
        <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="minPlayers">Minimum Players</Label>
        <Input id="minPlayers" type="number" value={minPlayers} onChange={(e) => setMinPlayers(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="maxPlayers">Maximum Players</Label>
        <Input id="maxPlayers" type="number" value={maxPlayers} onChange={(e) => setMaxPlayers(e.target.value)} required />
      </div>
      <div>
        <Label htmlFor="genres">Genres (comma-separated)</Label>
        <Input id="genres" value={genres} onChange={(e) => setGenres(e.target.value)} required />
      </div>
      <Button type="submit">Add Game</Button>
    </form>
  )
}

