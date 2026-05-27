import React, { useState } from "react";
import axios from "axios";

function AddPet() {
  const [pet, setPet] = useState({
    name: "",
    type: "",
    age: "",
  });

  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setPet({
      ...pet,
      [e.target.name]: e.target.value,
    });
  };

  const savePet = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", pet.name);
    formData.append("type", pet.type);
    formData.append("age", pet.age);
    formData.append("image", image);

    setIsSubmitting(true);
    try {
      await axios.post("http://localhost:1212/pets/add", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Pet Added Successfully");
      setPet({ name: "", type: "", age: "" });
      setImage(null);
    } catch (error) {
      console.log(error);
      alert("Upload Failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 border border-gray-200/70 dark:border-gray-700 dark:bg-gray-800/60 dark:text-white rounded-lg mb-4 focus:outline-none transition-colors duration-300";

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto bg-white/80 dark:bg-gray-900/40 backdrop-blur rounded-2xl shadow-lg p-8 transition-colors duration-300 border border-gray-100 dark:border-gray-800">
        <h2 className="text-3xl font-bold mb-6 dark:text-white">
          Add New Pet
        </h2>

        <form onSubmit={savePet}>
          <div className="mb-4 text-left">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Pet Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Pet Name"
              className={inputClass}
              value={pet.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4 text-left">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Pet Type
            </label>
            <input
              type="text"
              name="type"
              placeholder="Pet Type"
              className={inputClass}
              value={pet.type}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-4 text-left">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Pet Age
            </label>
            <input
              type="number"
              name="age"
              placeholder="Pet Age"
              className={inputClass}
              value={pet.age}
              onChange={handleChange}
              min={0}
              required
            />
          </div>

          <div className="mb-6 text-left">
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">
              Pet Image
            </label>
            <input
              type="file"
              className="w-full px-4 py-3 border border-gray-200/70 dark:border-gray-700 dark:bg-gray-800/60 dark:text-white rounded-lg mb-0 focus:outline-none transition-colors duration-300"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">
              Upload a clear photo to improve listing quality.
            </p>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-primary hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition shadow-md ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? "Adding..." : "Add Pet"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddPet;

