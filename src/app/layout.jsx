import { Archivo } from "next/font/google";
import "./globals.css";
import { Footer } from "./components/Footer";
import Navbar from "./components/Hamburger";


const work = Archivo({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "Pulse",
  description: "E-commerce webapp (Capstone)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className= {`max-w-[2000px] ${work.className}`}>
        <div className=" bg-white inset-x-0 z-[1] fixed">
        <Navbar />
        </div>

        <div className="min-h-screen">
        {children}
        </div>


        <Footer />
        </body>
    </html>
  );
}
