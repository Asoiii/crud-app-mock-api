import Link from 'next/link';
import { getDoctors } from '../services/doctorService';
import DeleteDoctorButton from '../components/DeleteDoctorButton';  // Import the Client Component

interface Doctor {
  id: string;
  nama: string;
  spesialis: string;
}

const DoctorsPage = async () => {
  const doctors: Doctor[] = await getDoctors(); 

  const doctorList = Array.isArray(doctors) ? doctors : [];
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Data Dokter</h1>
        <Link href="/doctors/add" className="px-4 py-2 bg-green-500 text-white rounded">Tambah Dokter</Link>
      </div>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Nama</th>
            <th className="border p-2">Spesialis</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {doctorList.map((doctor: Doctor) => (
            <tr key={doctor.id}>
              <td className="border p-2">{doctor.nama}</td>
              <td className="border p-2">{doctor.spesialis}</td>
              <td className="border p-2">
                <Link href={`/doctors/${doctor.id}/detail`} className="text-blue-500 mr-2">Detail</Link>
                <Link href={`/doctors/${doctor.id}/edit`} className="text-yellow-500 mr-2">Edit</Link>
                {/* Use the DeleteDoctorButton component here */}
                <DeleteDoctorButton doctorId={doctor.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DoctorsPage;
