import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/features/languages/context/LanguageContext";
import Header from "@/features/navigation/components/Header";
import Footer from "@/components/Blocks/Footer";
import { PlaceRatingProvider } from "@/features/places/usePlaceRating";
import { Analytics } from "@vercel/analytics/next";
export const metadata: Metadata = {
  title: "Gulv Mestere AS",
  description: "Vi leverer gulvløsninger av høy kvalitet raskt og presist.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased font-helvetica`}>
        <PlaceRatingProvider>
          <LanguageProvider>
            <Header />
            {children}
            <Footer />
          </LanguageProvider>
        </PlaceRatingProvider>
      </body>
      <Analytics />
    </html>
  );
}
