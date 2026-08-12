import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NIVALSU Proyectos y Servicios',
  description:
    'Soluciones en estructuras metálicas y servicios generales.',

  openGraph: {
    title: 'NIVALSU Proyectos y Servicios',
    description:
      'Soluciones en estructuras metálicas y servicios generales.',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'NIVALSU Proyectos y Servicios',
    description:
      'Soluciones en estructuras metálicas y servicios generales.',
    images: ['https://bolt.new/static/og_default.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}