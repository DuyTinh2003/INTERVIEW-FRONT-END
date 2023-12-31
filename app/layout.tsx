import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/modules/Header';

import './globals.css';
import AuthProvider from '@/components/modules/Authprovider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={inter.className}>
          <Header />
          <main className="bg-page bg-no-repeat bg-cover py-20">
            {children}
          </main>
        </body>
      </html>
    </AuthProvider>
  );
}
