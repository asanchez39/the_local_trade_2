"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

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
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="bg-zinc-50"
      />
      <Button type="submit" className="w-full">
        Subscribe to Updates
      </Button>
      {message && <p className="text-sm text-center text-green-600 bg-green-100 p-2 rounded">{message}</p>}
    </form>
  )
}