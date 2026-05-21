import { Outfit } from "next/font/google";
import "./globals.css";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

const geistSans = Outfit({
  subsets: ["latin"],
});



export const metadata = {
  title: "PetShop",
  description: "Pet care and adoption center",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable}h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">

        <Navbar />

        <main>{children}</main>

        <Footer />

      </body>
    </html>
  );
}
