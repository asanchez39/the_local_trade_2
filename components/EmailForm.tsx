"use client"

import { useState } from "react"

export default function EmailForm() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the email to your server
    setMessage(`Thank you! ${email} has been subscribed to our events newsletter.`)
    setEmail("")
  }

  return (
    <div>
      <p className="text-red-500 mb-4">Temporary text: Email form update check</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-3 py-2 text-gray-700 border border-black rounded-lg focus:outline-none focus:border-blue-500"
        />
        <button
          type="submit"
          className="w-full px-3 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none border border-blue-600"
        >
          Subscribe to Updates
        </button>
        {message && <p className="text-sm text-center text-green-600 bg-green-100 p-2 rounded">{message}</p>}
      </form>
    </div>
  )
}
