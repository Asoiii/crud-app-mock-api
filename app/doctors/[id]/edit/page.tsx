'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import DoctorForm from '../../../components/DoctorForm';
import { getDetail, updateData } from '../../../services/api';

const EditDoctorPage = () => {
  const router = useRouter();
  const { id } = useParams();
  const [initialData, setInitialData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDetail('datadokter', id as string);
      setInitialData(data);
    };
    fetchData();
  }, [id]);

  const handleSubmit = async (data: any) => {
    await updateData('datadokter', id as string, data);
    router.push('/doctors');
  };

  return (
    <div>
      <h1 className="text-2xl mb-4">Edit Dokter</h1>
      {initialData && <DoctorForm initialData={initialData} onSubmit={handleSubmit} />}
    </div>
  );
};

export default EditDoctorPage;
