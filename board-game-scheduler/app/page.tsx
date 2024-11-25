import Calendar from '@/components/Calendar'
import EventList from '@/components/EventList'
import AddEventForm from '@/components/AddEventForm'

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Calendar</h2>
          <Calendar />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
          <EventList />
          <h2 className="text-2xl font-semibold mt-8 mb-4">Add New Event</h2>
          <AddEventForm />
        </div>
      </div>
    </main>
  )
}

