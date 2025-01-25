import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TMusic - La Communauté Musicale Discord pour Chanteurs et Musiciens',
  description: 'Rejoignez TMusic, la communauté Discord dédiée à la musique et au chant. Participez à des soirées karaoké, concours de chant, et bien plus encore !',
  keywords: 'Communauté musicale Discord, Serveur Discord chant, Soirées karaoké en ligne, Concours de chant Discord, Salon de chant Discord, Communauté rap Discord, Événements musicaux en ligne, Communauté chanteurs Discord, Discord musique et chant',
  icons: {
    icon: '/favicon.ico', // Chemin du favicon
    shortcut: '/favicon.ico', // Pour compatibilité
    apple: '/apple-touch-icon.png', // Optionnel pour appareils Apple
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.tmusic.fr/',
    title: 'TMusic - La Communauté Musicale Discord pour Chanteurs et Musiciens',
    description: 'Rejoignez TMusic, la communauté Discord dédiée à la musique et au chant. Participez à des soirées karaoké, concours de chant, et bien plus encore !',
    images: [
      {
        url: 'https://www.tmusic.fr/images/TMUSICLOGO.png',
        width: 1200,
        height: 630,
        alt: 'Logo TMusic',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        {/* Lien explicite vers le favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
