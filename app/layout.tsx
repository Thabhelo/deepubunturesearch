import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/providers/theme-provider'
import { HotkeyProvider } from '@/components/providers/hotkey-provider'
import { ToastProvider } from '@/components/providers/toast-provider'
import { Navigation } from '@/components/ui/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Deep Ubuntu Research | Breakthrough AI for Africa & Beyond',
  description: 'Deep Ubuntu Research develops cutting-edge AI solutions for Africa and beyond. Featuring Deep Ubuntu AI foundation models and innovative tools like cowcow for offline-first data capture.',
  keywords: ['AI', 'Africa', 'Machine Learning', 'Deep Learning', 'Ubuntu', 'Research', 'Foundation Models'],
  authors: [{ name: 'Deep Ubuntu Research' }],
  creator: 'Deep Ubuntu Research',
  publisher: 'Deep Ubuntu Research',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  metadataBase: new URL('https://deepubuntu.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://deepubuntu.com',
    title: 'Deep Ubuntu Research | Breakthrough AI for Africa & Beyond',
    description: 'Deep Ubuntu Research develops cutting-edge AI solutions for Africa and beyond. Featuring Deep Ubuntu AI foundation models and innovative tools like cowcow for offline-first data capture.',
    siteName: 'Deep Ubuntu Research',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Deep Ubuntu Research - Breakthrough AI for Africa & Beyond',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Deep Ubuntu Research | Breakthrough AI for Africa & Beyond',
    description: 'Deep Ubuntu Research develops cutting-edge AI solutions for Africa and beyond.',
    images: ['/og-image.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <HotkeyProvider>
            <ToastProvider>
              <Navigation />
              <div className="pt-16">
                {children}
              </div>
            </ToastProvider>
          </HotkeyProvider>
        </ThemeProvider>
      </body>
    </html>
  )
} 