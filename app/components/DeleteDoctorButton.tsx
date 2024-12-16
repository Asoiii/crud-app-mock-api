'use client';  // This marks the component as a Client Component
import { useState } from 'react';
import { deleteDoctor } from '../services/doctorService';

interface DeleteDoctorButtonProps {
  doctorId: string;
}

const DeleteDoctorButton = ({ doctorId }: DeleteDoctorButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteDoctor(doctorId);
      // You can handle success (e.g., show a notification or remove from UI)
      alert('Doctor deleted successfully');
    } catch (error) {
      alert('Error deleting doctor');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="text-red-500"
      disabled={isLoading}
    >
      {isLoading ? 'Deleting...' : 'Delete'}
    </button>
  );
};

export default DeleteDoctorButton;
