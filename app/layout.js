
import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export const metadata = {
  title: "radR Platform",
  description: "Revolutionising Retail",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">

      <body>
        <Navbar/>
        <main className="relative overflow-hidden"> 
          {children}
        </main>
        <ScrollToTop/>
        <Footer/>
      </body>
    </html>
  );
}
