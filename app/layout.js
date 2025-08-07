import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Hanif's Portfolio",
  description: "Hanif As's Portfolio Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`w-full h-screen ${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
