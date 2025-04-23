import { useState } from "react";

export default function CreateListingForm() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    price: "",
    size: "",
    theme: "",
    description: "",
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "photo") {
      setForm((prev) => ({ ...prev, photo: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    // You can send this form data to your backend using FormData
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md bg-white p-4 md:p-8 md:rounded-2xl dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">Create New T-Shirt Listing</h2>
      <form className="my-8 space-y-4" onSubmit={handleSubmit}>
        
        <div>
          <label className="block mb-1 font-medium">T-shirt Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-2 rounded bg-neutral-100 dark:bg-neutral-800 dark:text-white"
            placeholder="e.g. Streetwear Oversized Tee"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full p-2 rounded bg-neutral-100 dark:bg-neutral-800 dark:text-white"
          >
            <option value="">Select Category</option>
            <option value="men">Men</option>
            <option value="women">Women</option>
            <option value="unisex">Unisex</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Price (₹)</label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            className="w-full p-2 rounded bg-neutral-100 dark:bg-neutral-800 dark:text-white"
            placeholder="e.g. 699"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Size</label>
          <select
            name="size"
            value={form.size}
            onChange={handleChange}
            className="w-full p-2 rounded bg-neutral-100 dark:bg-neutral-800 dark:text-white"
          >
            <option value="">Select Size</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">Theme</label>
          <select
            name="theme"
            value={form.theme}
            onChange={handleChange}
            className="w-full p-2 rounded bg-neutral-100 dark:bg-neutral-800 dark:text-white"
          >
            <option value="">Select Theme</option>
            <option value="anime">Anime</option>
            <option value="marvel">Marvel</option>
            <option value="sports">Sports</option>
            <option value="quotes">Quotes</option>
          </select>
        </div>

        <div>
          <label className="block mb-1 font-medium">T-shirt Photo</label>
          <input
            type="file"
            name="photo"
            accept="image/*"
            onChange={handleChange}
            className="w-full bg-neutral-100 dark:bg-neutral-800 text-white file:bg-neutral-600 file:text-white file:px-4 file:py-2 file:rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Description</label>
          <textarea
            name="description"
            rows="3"
            value={form.description}
            onChange={handleChange}
            className="w-full p-2 rounded bg-neutral-100 dark:bg-neutral-800 dark:text-white"
            placeholder="Tell something about the T-shirt..."
          ></textarea>
        </div>

        <button
          type="submit"
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-md hover:shadow-lg"
        >
          Create Listing →
        </button>
      </form>
    </div>
  );
}
