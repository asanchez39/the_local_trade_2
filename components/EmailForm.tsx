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
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
      />
      <button type="submit" className="w-full px-3 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none">
        Subscribe to Updates
      </button>
      {message && <p className="text-sm text-center text-green-600 bg-green-100 p-2 rounded">{message}</p>}
    </form>
  )
}