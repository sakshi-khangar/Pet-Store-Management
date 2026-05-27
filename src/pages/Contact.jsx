import React from "react";

function Contact() {
  return (
    <section className="space-y-10 text-gray-900 dark:text-white">
      <div className="rounded-[28px] border border-primary/20 bg-gradient-to-r from-primary/10 via-white to-primary-light/60 p-8 shadow-sm dark:border-primary/20 dark:bg-slate-950/90">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            Get in touch
          </span>
          <h1 className="mt-6 text-5xl font-bold tracking-tight text-primary dark:text-primary-light">
            Contact Happy Paws
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
            Have a question about pet adoption, services, or bookings? Send us a message and we&apos;ll respond quickly.
          </p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
        <div className="rounded-[28px] border border-gray-200/70 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <h2 className="text-2xl font-semibold text-primary dark:text-primary-light">Send us a message</h2>
          <form className="mt-8 space-y-6">
            <label className="block">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Name</span>
              <input
                type="text"
                className="mt-2 w-full rounded-3xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Email</span>
              <input
                type="email"
                className="mt-2 w-full rounded-3xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
                placeholder="you@example.com"
              />
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Message</span>
              <textarea
                rows="5"
                className="mt-2 w-full rounded-3xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-gray-950 dark:text-gray-100"
                placeholder="Tell us about your pet needs"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-3xl bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-hover"
            >
              Send message
            </button>
          </form>
        </div>

        <aside className="space-y-6 rounded-[28px] border border-primary/15 bg-primary/5 p-8 shadow-sm dark:border-primary/20 dark:bg-primary/10">
          <div>
            <h3 className="text-xl font-semibold text-primary dark:text-primary-light">Office hours</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-200">Mon–Fri: 9am–7pm</p>
            <p className="text-gray-700 dark:text-gray-200">Sat: 10am–4pm</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary dark:text-primary-light">Visit us</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-200">123 Paw Street, Petville</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary dark:text-primary-light">Contact details</h3>
            <p className="mt-2 text-gray-700 dark:text-gray-200">hello@happypaws.com</p>
            <p className="text-gray-700 dark:text-gray-200">+1 (555) 123-4567</p>
          </div>
        </aside>
      </div>
    </section>
  );
}

export default Contact;
