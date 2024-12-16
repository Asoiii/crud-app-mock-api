"use client"

import { getDetail } from '../../../services/api';
import { useParams } from 'next/navigation';

interface Doctor {
  name: string;
  specialty: string;
  contact: string;
  // Tambahkan properti lain sesuai dengan respons dari API
}

const DoctorDetailPage = async () => {
  const { id } = useParams();
  const doctor = await getDetail('datadokter', id as string);

  // Pastikan doctor memiliki tipe yang sesuai
  const typedDoctor = doctor as Doctor;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Detail Dokter</h1>
      <div className="border p-4 rounded">
        {Object.entries(typedDoctor).map(([key, value]) => (
          <p key={key} className="mb-2">
            <strong className="capitalize">{key}:</strong> {value}
          </p>
        ))}
      </div>
    </div>
  );
};

export default DoctorDetailPage;
