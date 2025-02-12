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
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-zinc-500 mr-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <div>
              <h3 className="font-medium text-zinc-800">{event.name}</h3>
              <p className="text-sm text-zinc-500">{event.date}</p>
            </div>
          </div>
          <a href={event.url} className="mt-2 sm:mt-0 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none">
            Register
          </a>
        </li>
      ))}
    </ul>
  )
}