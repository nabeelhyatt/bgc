import { NextResponse } from 'next/server'

let events = [
  { id: 1, title: 'Catan Night', date: '2023-06-15', attendees: ['Alice', 'Bob', 'Charlie'], description: 'Join us for a night of Catan!' },
  { id: 2, title: 'Pandemic Session', date: '2023-06-22', attendees: ['David', 'Eve', 'Frank'], description: 'Can we save the world from disease?' },
]

export async function GET() {
  return NextResponse.json(events)
}

export async function POST(request: Request) {
  const newEvent = await request.json()
  const id = events.length + 1
  const eventWithId = { ...newEvent, id }
  events.push(eventWithId)
  return NextResponse.json(eventWithId, { status: 201 })
}

