import { Metadata } from 'next';
import './globals.scss';
import { Inter } from 'next/font/google';
import Shell from '../components/shell/shell';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Logistics UK Tech Test',
  description: 'Tech test for Logisitics UK by Connor Broxton',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Shell>
          {children}
        </Shell>
      </body>
    </html>
  );
}
