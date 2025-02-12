import Image from "next/image"
import EventList from "@/components/EventList"
import EmailForm from "@/components/EmailForm"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-100 to-white">
      <main className="container mx-auto px-4 py-8">
        <div className="relative w-full h-auto aspect-[3/1] mb-8">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/header-HmTkI49uqTSmgNu5Zgr17eJGcefyBi.png"
            alt="TLT workshop banner"
            width={1200}
            height={400}
            priority
            className="rounded-lg shadow-md object-cover w-full"
          />
        </div>
        <div className="w-full max-w-2xl mx-auto mb-12">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/THE%20LOCAL%20TRADE_rev2%201%20(1)-yDmCkOC8JRaM38wU8THrjICvL87EWe.png"
            alt="THE LOCAL TRADE"
            width={800}
            height={120}
            className="w-full h-auto"
            priority
          />
          <p className="mt-6 text-center text-2xl text-zinc-800 font-light">
            Woodworking classes hosted in Marin County
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-zinc-800">Upcoming Events</h2>
            <EventList />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-zinc-800">Stay Updated</h2>
            <EmailForm />
          </div>
        </div>
      </main>
    </div>
  )
}