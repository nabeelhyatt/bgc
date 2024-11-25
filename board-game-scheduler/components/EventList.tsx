'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface Event {
  id: number
  title: string
  date: string
  attendees: string[]
}

const initialEvents: Event[] = [
  { id: 1, title: 'Catan Night', date: '2023-06-15', attendees: ['Alice', 'Bob', 'Charlie'] },
  { id: 2, title: 'Pandemic Session', date: '2023-06-22', attendees: ['David', 'Eve', 'Frank'] },
]

export default function EventList() {
  const [events] = useState<Event[]>(initialEvents)

  return (
    <div className="space-y-4">
      {events.map((event) => (
        <Card key={event.id}>
          <CardHeader>
            <CardTitle>{event.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-2">{event.date}</p>
            <div className="flex flex-wrap gap-2">
              {event.attendees.map((attendee) => (
                <Badge key={attendee} variant="secondary">
                  {attendee}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

