'use client'

import { useState, useEffect } from 'react'

interface Event {
  id: number
  title: string
  date: string
  attendees: string[]
  description?: string
}

export function useEvents() {
  const [events, setEvents] = useState<Event[]>([])

  useEffect(() => {
    fetchEvents()
  }, [])

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/events')
      if (!response.ok) {
        throw new Error('Failed to fetch events')
      }
      const data = await response.json()
      setEvents(data)
    } catch (error) {
      console.error('Error fetching events:', error)
    }
  }

  const addEvent = async (newEvent: Omit<Event, 'id'>) => {
    try {
      const response = await fetch('/api/events', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newEvent),
      })
      if (!response.ok) {
        throw new Error('Failed to add event')
      }
      const addedEvent = await response.json()
      setEvents([...events, addedEvent])
    } catch (error) {
      console.error('Error adding event:', error)
      throw error
    }
  }

  return { events, addEvent }
}

