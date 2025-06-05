import { Head } from "$fresh/runtime.ts";

export default function ContactSection() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/styles/contact.css" />
        <script 
          src="https://unpkg.com/@dotlottie/player-component@2.7.12/dist/dotlottie-player.mjs" 
          type="module" 
        />
      </Head>

      <section id="contact" class="py-12 bg-gray-50">
        <div class="contact-container">
          {/* Contact Form */}
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

          {/* Lottie Animation - Updated container */}
          <div class="contact-animation">
            <dotlottie-player
              src="https://lottie.host/0538b75c-598d-43af-838d-1451d4673969/Csj77LGLbO.lottie"
              background="transparent"
              speed="1"
              loop
              autoplay
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </section>
    </>
  );
}