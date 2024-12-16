'use client';
import { useState } from 'react';

const DoctorForm = ({ initialData, onSubmit }: { initialData?: any; onSubmit: (data: any) => void }) => {
  const [formData, setFormData] = useState(
    initialData || {
      nama: '',
      umur: '',
      gender: '',
      spesialis: '',
      telepon: '',
      alamat: '',
      email: '',
    }
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={(e) => { e.preventDefault(); onSubmit(formData); }}>
      {Object.keys(formData).map((key) => (
        <div key={key} className="mb-4">
          <label className="block text-gray-700 capitalize">{key}</label>
          <input
            type="text"
            name={key}
            value={formData[key]}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
      ))}
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
    </form>
  );
};

export default DoctorForm;
