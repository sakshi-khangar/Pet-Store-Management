import Hero from "../components/Hero";
import Auth from "../components/Auth";
import AddPet from "../components/AddPet";
import PetList from "../components/PetList";

function Home() {
  return (
    <div className="space-y-14">
      <Hero />

      <section className="grid gap-10 lg:grid-cols-[1fr_360px]">
        <div className="rounded-[28px] border border-gray-200/70 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Welcome to Happy Paws</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300 leading-8">
            We connect loving families with happy, healthy pets while making care easy and enjoyable for every owner.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-3xl border border-gray-200 p-5 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">Adoption support</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">A simplified adoption experience for pets and people alike.</p>
            </div>
            <div className="rounded-3xl border border-gray-200 p-5 dark:border-gray-700">
              <h3 className="font-semibold text-gray-900 dark:text-white">Trusted experts</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-300">Care and advice from pet professionals you can rely on.</p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <Auth />
          <div className="rounded-[28px] border border-gray-200/70 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-950">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Why choose us</h3>
            <p className="mt-4 text-gray-600 dark:text-gray-300">Enjoy fast bookings, caring staff, and a community that loves pets as much as you do.</p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <AddPet />
        <PetList />
      </section>
    </div>
  );
}

export default Home;
