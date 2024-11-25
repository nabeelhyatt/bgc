'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function AddEventForm() {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')
  const [attendees, setAttendees] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send this data to your backend
    console.log('New event:', { title, date, attendees: attendees.split(',').map(a => a.trim()) })
    // Reset form
    setTitle('')
    setDate('')
    setAttendees('')
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="title">Event Title</Label>
        <Input
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="date">Date</Label>
        <Input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </div>
      <div>
        <Label htmlFor="attendees">Attendees (comma-separated)</Label>
        <Input
          id="attendees"
          value={attendees}
          onChange={(e) => setAttendees(e.target.value)}
          placeholder="e.g. Alice, Bob, Charlie"
        />
      </div>
      <Button type="submit">Add Event</Button>
    </form>
  )
}

