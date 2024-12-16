
import "./styles/globals.css"

export const metadata = {
  title: "Simple CRUD App",
  description: "Next.js CRUD App with App Router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-gray-100">
        <div className="container mx-auto p-4">{children}</div>
      </body>
    </html>
  );
}