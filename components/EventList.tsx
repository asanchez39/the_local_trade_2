import { Button } from "@/components/ui/button"
import { CalendarIcon } from "@heroicons/react/24/outline"

const placeholderEvents = [
  { id: 1, name: "Introduction to Woodworking", date: "June 15, 2023", url: "#" },
  { id: 2, name: "Advanced Joinery Techniques", date: "June 22, 2023", url: "#" },
  { id: 3, name: "Furniture Design Workshop", date: "July 1, 2023", url: "#" },
  { id: 4, name: "Wood Finishing Masterclass", date: "July 8, 2023", url: "#" },
]

export default function EventList() {
  return (
    <ul className="space-y-4">
      {placeholderEvents.map((event) => (
        <li
          key={event.id}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-zinc-50 p-4 rounded-lg"
        >
          <div className="flex items-start mb-2 sm:mb-0">
            <CalendarIcon className="h-5 w-5 text-zinc-500 mr-2 mt-1" />
            <div>
              <h3 className="font-medium text-zinc-800">{event.name}</h3>
              <p className="text-sm text-zinc-500">{event.date}</p>
            </div>
          </div>
          <Button asChild className="mt-2 sm:mt-0">
            <a href={event.url}>Register</a>
          </Button>
        </li>
      ))}
    </ul>
  )
}