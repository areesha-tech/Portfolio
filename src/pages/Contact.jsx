import {
  FaEnvelope,
  FaLocationDot,
  FaCircleCheck,
} from "react-icons/fa6";

function Contact() {
  return (
    <section className="min-h-[90vh] bg-base px-4 py-16 sm:px-6 sm:py-20 lg:px-10 xl:px-12">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">

        {/* LEFT — CONTACT INFO */}
        <div className="flex flex-col justify-center">

          <p className="mb-4 text-xs font-medium uppercase tracking-[0.3em] text-primary sm:text-sm">
            Get In Touch
          </p>

          <h2 className="max-w-xl text-4xl font-bold leading-tight text-sec sm:text-5xl lg:text-6xl">
            Let's work
            <span className="text-primary"> together.</span>
          </h2>

          <p className="mt-5 max-w-lg text-base leading-7 text-gray-400 sm:mt-6 sm:text-lg sm:leading-8">
            Have a project in mind, a question, or just want to say hello?
            Feel free to reach out. I’m always open to discussing new ideas,
            creative projects, and opportunities.
          </p>

          {/* CONTACT DETAILS */}
          <div className="mt-8 flex flex-col gap-6 sm:mt-12 sm:gap-7">

            {/* EMAIL */}
            <div className="flex min-w-0 items-center gap-4 sm:gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 sm:h-12 sm:w-12">
                <FaEnvelope className="text-primary" size={20} />
              </div>

              <div className="min-w-0">
                <p className="text-sm text-gray-500">Email</p>

                <a
                  href="mailto:areeshakhan7757@gmail.com"
                  className="break-all text-sm text-sec transition hover:text-primary "
                >
                  areeshakhan7757@gmail.com
                </a>
              </div>
            </div>

            {/* LOCATION */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 sm:h-12 sm:w-12">
                <FaLocationDot className="text-primary" size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Location</p>
                <p className="text-sm text-sec ">
                  Mirpurkhas, Pakistan
                </p>
              </div>
            </div>

            {/* AVAILABILITY */}
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 sm:h-12 sm:w-12">
                <FaCircleCheck className="text-primary" size={20} />
              </div>

              <div>
                <p className="text-sm text-gray-500">Availability</p>
                <p className="text-sm text-sec ">
                  Available for freelance work
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT — CONTACT FORM */}
        <div className="flex w-full items-center">
          <form
            className="w-full rounded-2xl border border-white/10 bg-white/[0.02] p-5 sm:rounded-3xl sm:p-8 lg:p-7 xl:p-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="mb-6 sm:mb-8">
              <h3 className="text-xl font-semibold text-sec sm:text-2xl">
                Send me a message
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Fill out the form and I'll get back to you soon.
              </p>
            </div>

            {/* NAME + EMAIL */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">

              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-gray-400"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="John Doe"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-sec outline-none transition placeholder:text-gray-600 focus:border-primary sm:text-base"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-gray-400"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="john@example.com"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-sec outline-none transition placeholder:text-gray-600 focus:border-primary sm:text-base"
                />
              </div>

            </div>

            {/* SUBJECT */}
            <div className="mt-5">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm text-gray-400"
              >
                Subject
              </label>

              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="Let's work together"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-sec outline-none transition placeholder:text-gray-600 focus:border-primary sm:text-base"
              />
            </div>

            {/* MESSAGE */}
            <div className="mt-5">
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-gray-400"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project..."
                required
                className="w-full resize-y rounded-xl border border-white/10 bg-white/5 px-4 py-3.5 text-sm text-sec outline-none transition placeholder:text-gray-600 focus:border-primary sm:text-base"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl bg-primary px-6 py-3.5 font-medium text-black transition hover:opacity-90 sm:mt-7 sm:py-4"
            >
              Send Message
              <span aria-hidden="true">→</span>
            </button>

          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;
