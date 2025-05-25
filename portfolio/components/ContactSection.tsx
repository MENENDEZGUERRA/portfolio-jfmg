import { Head } from "$fresh/runtime.ts";

export default function ContactSection() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/contact.css" />
      </Head>

      <section id="contact" class="py-12 bg-gray-50">
        <div class="contact-container">
          {/* Aqu[i ta Formulario */}
          <form class="contact-form">
            <h2 class="text-3xl font-bold mb-6">Contact Me</h2>
            
            <div class="form-group">
              <label class="form-label" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                class="form-input"
                placeholder="John Doe"
              />
            </div>

            <div class="form-group">
              <label class="form-label" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                class="form-input"
                placeholder="john@example.com"
              />
            </div>

            <div class="form-group">
              <label class="form-label" htmlFor="message">Message</label>
              <textarea
                id="message"
                class="form-input form-textarea"
                placeholder="Write your message here..."
              ></textarea>
            </div>

            <button type="submit" class="submit-button">
              Send Message
            </button>
          </form>

          {/* Imagen */}
          <img
            src="/images/contact-illustration.jpg"
            alt="Contact illustration"
            class="contact-image"
          />
        </div>
      </section>
    </>
  );
}