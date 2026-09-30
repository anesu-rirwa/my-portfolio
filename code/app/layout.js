import { Geist, Geist_Mono, Bricolage_Grotesque } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SocialRail from '@/components/SocialRail';
import { site } from '@/data/data';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });
const bricolage = Bricolage_Grotesque({ variable: '--font-bricolage', subsets: ['latin'] });

const title = `${site.name} | ${site.role}`;
const description =
  'Data & AI Engineer in Harare, Zimbabwe, building data systems, business intelligence and applied machine learning for mining, industrial and healthcare organisations.';

export const metadata = {
  metadataBase: new URL(site.url),
  title,
  description,
  authors: [{ name: site.name, url: site.url }],
  keywords: [
    'Anesu Rirwa',
    'Data Engineer',
    'AI Engineer',
    'Machine Learning',
    'Business Intelligence',
    'Power BI',
    'Next.js',
    'Kordel Data',
    'Zimbabwe',
    'Harare',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    title,
    description,
    url: site.url,
    siteName: site.name,
    locale: 'en_ZW',
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title, description },
};

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#faf9f6' },
    { media: '(prefers-color-scheme: dark)', color: '#0e0c14' },
  ],
};

// Runs before paint so a saved dark preference never flashes light. Light is the default.
const themeScript = `(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark')}}catch(e){}})();`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} font-sans antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-accent-fg"
        >
          Skip to content
        </a>
        <Nav />
        <SocialRail />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
