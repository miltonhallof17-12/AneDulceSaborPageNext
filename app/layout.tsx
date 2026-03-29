import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import AnalyticsTracker from "@/components/AnalyticsTracker";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#D85C56",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ane-dulce-sabor.vercel.app"),
  title: {
    default: "Ane Dulce Sabor - Dulces Artesanales",
    template: "%s | Ane Dulce Sabor",
  },
  description:
    "Dulces artesanales elaborados con amor y los mejores ingredientes. Descubre nuestra selección de tortas, postres y tentaciones.",
  authors: [{ name: "Ane Dulce Sabor" }],
  creator: "Ane Dulce Sabor",
  publisher: "Ane Dulce Sabor",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://ane-dulce-sabor.vercel.app",
    siteName: "Ane Dulce Sabor",
    title: "Ane Dulce Sabor - Dulces Artesanales",
    description:
      "Dulces artesanales elaborados con amor y los mejores ingredientes. Descubre nuestra selección de tortas, postres y tentaciones.",
    images: [
      {
        url: "/Logo.webp",
        width: 1200,
        height: 630,
        alt: "Ane Dulce Sabor - Dulces Artesanales",
      },
    ],
  },
  alternates: {
    canonical: "https://ane-dulce-sabor.vercel.app",
  },
  icons: {
    icon: "/Logo.webp",
    shortcut: "/Logo.webp",
    apple: "/Logo.webp",
  },
  manifest: "/manifest.json",
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        {children}

        {/* Google Analytics */}
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )}

        <AnalyticsTracker />
      </body>
    </html>
  );
}