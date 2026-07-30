import type { Metadata, Viewport } from 'next'
import { Nunito, Quicksand } from 'next/font/google'
import { profile, siteUrl } from '@/data/content'
import { assetUrl } from '@/lib/assetUrl'
import './globals.css'
import './sections.css'

const displayFont = Quicksand({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-display-family',
  display: 'swap',
})

const bodyFont = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body-family',
  display: 'swap',
})

/**
 * Applies the visitor's saved theme before first paint to avoid a flash.
 * Dark is the default until they pick otherwise, regardless of OS preference.
 */
const themeScript = `
(function(){try{
document.documentElement.dataset.theme=localStorage.getItem('theme')==='light'?'light':'dark';
}catch(e){document.documentElement.dataset.theme='dark';}})();
`

const title = `${profile.fullName} — Generative AI Engineer`
const description =
  'Portfolio of Kithuni Devma Wickramasinghe — Generative AI Engineer and Computer Science & Engineering graduate of the University of Moratuwa, working on machine learning, LLM evaluation, and data science.'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.fullName, url: siteUrl }],
  creator: profile.fullName,
  keywords: [
    'Kithuni Wickramasinghe',
    'Kithuni Devma',
    'Kithuni Devma Wickramasinghe',
    'Generative AI Engineer',
    'Machine Learning Engineer Sri Lanka',
    'Data Science University of Moratuwa',
    'LLM evaluation',
    'Knowledge graphs',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'profile',
    url: siteUrl,
    siteName: `${profile.fullName} — Portfolio`,
    title,
    description,
    firstName: profile.firstName,
    lastName: profile.lastName,
    images: [
      {
        url: `${siteUrl}/user.webp`,
        alt: profile.fullName,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: [`${siteUrl}/user.webp`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: { icon: assetUrl('logo.png') },
}

export const viewport: Viewport = {
  themeColor: '#0c0b0a',
}

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.fullName,
  alternateName: [profile.name, 'Kithuni Devma'],
  url: siteUrl,
  image: `${siteUrl}/user.webp`,
  email: `mailto:${profile.email}`,
  telephone: profile.phone,
  jobTitle: 'Generative AI Engineer',
  description: profile.about,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Colombo',
    addressCountry: 'LK',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'University of Moratuwa',
    sameAs: 'https://uom.lk/',
  },
  worksFor: { '@type': 'Organization', name: 'Arcadea Group' },
  knowsAbout: [
    'Generative AI',
    'Machine Learning',
    'Data Science',
    'Large Language Model evaluation',
    'Knowledge graphs',
    'Python',
  ],
  sameAs: profile.socials.map((social) => social.href),
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${displayFont.variable} ${bodyFont.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
