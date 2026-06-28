import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = "https://ernestootaqui.com";
const siteTitle =
  "Ernesto Otaqui | Business Operations, Revenue Operations & Data Analytics";
const siteDescription =
  "Portfolio of Ernesto Otaqui, focused on business operations, revenue operations, data analytics, SQL, Python, automation, and scalable systems.";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Ernesto Otaqui",
  },
  description: siteDescription,
  keywords: [
    "Ernesto Otaqui",
    "Business Operations",
    "Revenue Operations",
    "Data Analytics",
    "SQL",
    "Python",
    "Process Optimization",
    "Automation",
    "Scalable Systems",
    "Operations Portfolio",
  ],
  authors: [{ name: "Ernesto Otaqui", url: siteUrl }],
  creator: "Ernesto Otaqui",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "Ernesto Otaqui Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: siteTitle,
    description: siteDescription,
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ernesto Otaqui",
  url: siteUrl,
  jobTitle: "Business Operations, Revenue Operations, and Data Analytics",
  knowsAbout: [
    "Business Operations",
    "Revenue Operations",
    "Data Analytics",
    "SQL",
    "Python",
    "Process Optimization",
    "Automation",
    "Scalable Systems",
  ],
  sameAs: ["https://linkedin.com/in/ernesto995", "https://github.com/neto995"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
