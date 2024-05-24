import { Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Footer } from "./components/Footer";


const work = Work_Sans({ subsets: ["latin"], weight: ['400'] });

export const metadata = {
  title: "Choice",
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
