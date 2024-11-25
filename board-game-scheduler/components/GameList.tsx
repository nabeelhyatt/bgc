'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Game } from '@/types/Game'

export default function GameList() {
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    // In a real app, this would be an API call
    setGames([
      {
        id: 1,
        name: 'Catan',
        minPlayers: 3,
        maxPlayers: 4,
        genres: ['Strategy', 'Resource Management'],
      },
      {
        id: 2,
        name: 'Pandemic',
        minPlayers: 2,
        maxPlayers: 4,
        genres: ['Cooperative', 'Strategy'],
      },
      // Add 18 more games here...
    ])
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {games.map((game) => (
        <Card key={game.id}>
          <CardHeader>
            <CardTitle>{game.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Players: {game.minPlayers} - {game.maxPlayers}</p>
            <div className="mt-2">
              {game.genres.map((genre) => (
                <Badge key={genre} className="mr-2 mb-2">{genre}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

