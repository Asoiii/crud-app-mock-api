"use client"; // Needed for interactive components

import { useState } from "react";

type FormProps = {
  onSubmit: (data: Record<string, string>) => void;
  initialData?: Record<string, string>;
};

export default function Form({ onSubmit, initialData = {} }: FormProps) {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name || ""}
        onChange={handleChange}
        className="w-full p-2 border rounded"
      />
      <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700">
        Submit
      </button>
    </form>
  );
}
