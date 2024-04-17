import Navbar from "../components/Navbar";
import "../globals.css";

export const metadata = {
  title: "Lexardi Lab | Journal",
  description: " ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-yellow-100">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
