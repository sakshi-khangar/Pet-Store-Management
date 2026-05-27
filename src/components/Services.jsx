import React from "react";

function Services() {
  const services = [
    {
      title: "Grooming & Spa",
      description:
        "Tailored grooming sessions that keep fur soft, skin healthy, and tails wagging.",
      accent: "bg-violet-100 text-violet-700",
      icon: "✂️",
    },
    {
      title: "Wellness Checkups",
      description:
        "Regular vet screenings and wellness plans to protect every pet's long-term health.",
      accent: "bg-sky-100 text-sky-700",
      icon: "🩺",
    },
    {
      title: "Training Help",
      description:
        "Positive reinforcement training for puppies and older pets to build better behavior.",
      accent: "bg-emerald-100 text-emerald-700",
      icon: "🐾",
    },
  ];

  return (
    <section className="space-y-10">
      <div className="rounded-[28px] border border-primary-border bg-gradient-to-r from-primary/10 via-white to-primary-light p-8 shadow-sm dark:border-primary/20 dark:bg-slate-950">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            Premium Care
          </span>
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
            Pet Services with loving care
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-lg">
            From grooming to medical support, Happy Paws helps every pet feel happy and healthy.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {services.map((service) => (
          <article
            key={service.title}
            className="rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-950"
          >
            <div className={`inline-flex h-14 w-14 items-center justify-center rounded-3xl ${service.accent}`}>
              <span className="text-2xl">{service.icon}</span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold text-slate-900 dark:text-white">
              {service.title}
            </h2>
            <p className="mt-3 text-slate-600 dark:text-slate-300">{service.description}</p>
          </article>
        ))}
      </div>

      <div className="rounded-[28px] border border-slate-200/70 bg-slate-50 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
              Visit us for reliable pet care
            </h3>
            <p className="mt-4 text-slate-600 dark:text-slate-300">
              We are dedicated to providing a safe, warm environment for pets and owners alike.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl bg-primary/10 p-5 text-primary shadow-sm shadow-primary/10">
              <h4 className="font-semibold">Same-day grooming</h4>
              <p className="mt-2 text-sm text-slate-700 dark:text-slate-200">
                Expert grooming without the wait.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-100 p-5 dark:bg-slate-900">
              <h4 className="font-semibold text-slate-900 dark:text-white">
                Transparent pricing
              </h4>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                Clear service plans with no surprise fees.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
