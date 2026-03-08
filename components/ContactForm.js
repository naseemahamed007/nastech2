"use client"
import { useState } from "react"
import { supabase } from "../lib/supabaseClient"

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { error } = await supabase.from("contacts").insert([formData])
    if (error) {
      alert("Error submitting form: " + error.message)
    } else {
      alert("Form submitted successfully!")
      setFormData({ name: "", email: "", message: "" })
    }
  }

  return (
    <section className="p-10 bg-gray-800 text-white">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 rounded text-black"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 rounded text-black"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-2 rounded text-black"
        />
        <button type="submit" className="bg-blue-600 px-4 py-2 rounded text-white">
          Submit
        </button>
      </form>
    </section>
  )
}
