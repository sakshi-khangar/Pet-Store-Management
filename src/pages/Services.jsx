import React from "react";

function Services() {
  return (
    <section className="space-y-10">
      <div className="rounded-[28px] border border-gray-200/70 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            Premium Care
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
            Pet Services with loving care
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg">
            From grooming to medical support, Happy Paws helps every pet feel happy and healthy.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <article className="rounded-[28px] border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 transition hover:-translate-y-1">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Grooming & Spa</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Tailored grooming sessions that keep fur soft, skin healthy, and tails wagging.
          </p>
        </article>

        <article className="rounded-[28px] border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 transition hover:-translate-y-1">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Wellness Checkups</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Regular vet screenings and wellness plans to protect every pet's long-term health.
          </p>
        </article>

        <article className="rounded-[28px] border border-gray-200/80 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-950 transition hover:-translate-y-1">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Training Help</h2>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Positive reinforcement training for puppies and older pets to build better behavior.
          </p>
        </article>
      </div>

      <div className="rounded-[28px] border border-gray-200/70 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Visit us for reliable pet care</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              We are dedicated to providing a safe, warm environment for pets and owners alike.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl bg-primary/10 p-5 text-primary">
              <h4 className="font-semibold">Same-day grooming</h4>
              <p className="mt-2 text-sm text-gray-700 dark:text-gray-200">Expert grooming without the wait.</p>
            </div>
            <div className="rounded-3xl bg-gray-100 p-5 dark:bg-gray-900">
              <h4 className="font-semibold text-gray-900 dark:text-white">Transparent pricing</h4>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Clear service plans with no surprise fees.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
