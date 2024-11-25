export interface Event {
  id: number
  title: string
  date: string
  time: string
  host: string
  game: string
  playerCount: {
    min: number
    max: number
  }
  confirmedPlayers: number
  isOpen: boolean
  status: 'open' | 'full' | 'needs_players'
}

