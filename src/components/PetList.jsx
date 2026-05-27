import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

function PetList() {
  const [pets, setPets] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    loadPets();
  }, []);

  const loadPets = async () => {
    setIsLoading(true);
    setError("");
    try {
      const result = await axios.get("http://localhost:1212/pets/all");
      setPets(Array.isArray(result.data) ? result.data : []);
    } catch (e) {
      console.log(e);
      setError("Failed to load pets. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const filteredPets = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return pets;
    return pets.filter((pet) => (pet.name || "").toLowerCase().includes(q));
  }, [pets, search]);

  const inputClass =
    "w-full px-4 py-3 border border-gray-200/70 dark:border-gray-700 dark:bg-gray-800/60 dark:text-white rounded-lg mb-8 focus:outline-none transition-colors duration-300";

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-center text-3xl font-bold dark:text-white">
          Available Pets
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
          Browse, search, and manage listings.
        </p>
      </div>

      <input
        type="text"
        placeholder="Search Pet..."
        className={inputClass}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {error && (
        <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-900 text-red-700 dark:text-red-200">
          {error}
        </div>
      )}

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
            >
              <div className="h-64 bg-gray-100 dark:bg-gray-700 animate-pulse" />
              <div className="p-6">
                <div className="h-5 bg-gray-100 dark:bg-gray-700 animate-pulse rounded" />
                <div className="h-4 mt-3 bg-gray-100 dark:bg-gray-700 animate-pulse rounded" />
                <div className="h-4 mt-3 bg-gray-100 dark:bg-gray-700 animate-pulse rounded" />
                <div className="h-10 mt-6 bg-gray-100 dark:bg-gray-700 animate-pulse rounded-full" />
              </div>
            </div>
          ))}
        </div>
      ) : filteredPets.length === 0 ? (
        <div className="py-16 text-center">
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            No pets found
          </p>
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            Try a different search term.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPets.map((pet) => (
            <div
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition border border-gray-100 dark:border-gray-700"
              key={pet.id}
            >
              <img
                src={`http://localhost:1212/uploads/${pet.imageName}`}
                alt={pet.name}
                className="w-full h-64 object-cover"
              />

              <div className="p-6 text-center">
                <h4 className="text-xl font-bold mb-2 dark:text-white">
                  {pet.name}
                </h4>

                <p className="text-gray-600 dark:text-gray-300 mb-1">
                  Type: <span className="font-semibold">{pet.type}</span>
                </p>

                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Age: <span className="font-semibold">{pet.age}</span>
                </p>

                <button
                  className="bg-primary hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full transition shadow-sm hover:shadow-md"
                  type="button"
                  onClick={() => alert("Details view not implemented yet.")}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default PetList;

