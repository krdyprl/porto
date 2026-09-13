import localFont from "next/font/local";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageProvider";
import { LoaderProvider } from "./components/LoaderProvider";
import ScrollProgress from "./components/ScrollProgress";
import SmoothScroll from "./components/SmoothScroll";
import AuroraBackground from "./components/AuroraBackground";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { profile, siteUrl, contacts } from "@/data/portfolio";

const inter = localFont({
  src: "./fonts/InterRegular.woff",
  variable: "--font-inter",
  weight: "100 900",
});

const titleFull = `${profile.name} — ${profile.role.id}`;
const description = `${profile.name} — ${profile.role.id}. ${profile.tagline.id}`;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: titleFull, template: `%s | ${profile.name}` },
  description,
  keywords: [
    profile.name,
    profile.brand,
    "portfolio",
    "web developer",
    ...new Set([...profile.roles.id, ...profile.roles.en]),
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: profile.name,
    title: titleFull,
    description,
    locale: "id_ID",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: profile.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: titleFull,
    description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

// Data terstruktur (schema.org Person) untuk rich result di Google.
const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  url: siteUrl,
  jobTitle: profile.role.en,
  sameAs: contacts.filter((c) => c.key !== "email").map((c) => c.url),
};

// ponytail: anti-flash dark mode — set class sebelum paint, hindari kedip putih
const themeScript = `
(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <SmoothScroll />
        <AuroraBackground />
        <ScrollProgress />
        <LanguageProvider>
          <LoaderProvider>
            <div className="max-w-6xl mx-auto md:flex md:gap-10 md:px-6">
              <Navbar />
              <div className="flex-1 min-w-0">
                <main>{children}</main>
                <Footer />
              </div>
            </div>
          </LoaderProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
