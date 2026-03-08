import Hero from "../components/Hero"
import Services from "../components/Services"
import ContactForm from "../components/ContactForm"

export default function Home() {
  return (
    <main>
      <Hero />
      <section id="services">
        <Services />
      </section>
      <section id="contact">
        <ContactForm />
      </section>
    </main>
  )
}
