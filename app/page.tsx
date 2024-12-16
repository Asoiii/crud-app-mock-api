import Link from "next/link";
import NavbarComponent from "./components/NavbarComponent";

export default function HomePage() {
  return (
    <>
      <NavbarComponent />
      <div className="space-y-4 mt-20">
        <h1 className="text-2xl font-bold">Welcome Data Base</h1>
        <p>Select a section to manasge:</p>
        <div className="space-x-4">
          <Link href="/patients" className="text-blue-500 hover:underline">
            Manage Patients
          </Link>
          <Link href="/doctors" className="text-blue-500 hover:underline">
            Manage Doctors
          </Link>
        </div>
      </div>
    </>
  );
}
