'use client';
import { useRouter } from 'next/navigation';
import DoctorForm from '../components/DoctorForm';
import { createData } from '../services/api';

const AddDoctorPage = () => {
  const router = useRouter();

  const handleSubmit = async (data: any) => {
    await createData('datadokter', data);
    router.push('/doctors'); // Mengarahkan ke halaman data dokter setelah menambah
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Tambah Dokter</h1>
      <DoctorForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddDoctorPage;
