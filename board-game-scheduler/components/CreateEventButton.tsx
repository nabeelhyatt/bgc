'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export default function CreateEventButton() {
  const [open, setOpen] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    setOpen(false)
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="mb-4">Create New Event</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create New Event</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="title">Event Title</Label>
            <Input id="title" required />
          </div>
          <div>
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" required />
          </div>
          <div>
            <Label htmlFor="time">Time</Label>
            <Input id="time" type="time" required />
          </div>
          <div>
            <Label htmlFor="game">Game</Label>
            <Input id="game" required />
          </div>
          <div>
            <Label>Event Type</Label>
            <RadioGroup defaultValue="open">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="open" id="open" />
                <Label htmlFor="open">Open</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="invite" id="invite" />
                <Label htmlFor="invite">Invite Only</Label>
              </div>
            </RadioGroup>
          </div>
          <div>
            <Label htmlFor="minPlayers">Minimum Players</Label>
            <Input id="minPlayers" type="number" min="1" required />
          </div>
          <div>
            <Label htmlFor="maxPlayers">Maximum Players</Label>
            <Input id="maxPlayers" type="number" min="1" required />
          </div>
          <Button type="submit">Create Event</Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

