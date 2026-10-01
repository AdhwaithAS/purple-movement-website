import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Join the Movement',
  description:
    'Become part of The Purple Movement — a global force of changemakers, innovators, and leaders creating a borderless future. Take the pledge and connect with purposeful minds worldwide.',
  alternates: {
    canonical: '/join',
  },
  openGraph: {
    title: 'Join The Purple Movement | Take the Pledge',
    description:
      'Become part of The Purple Movement — a global force of changemakers, innovators, and leaders creating a borderless future. Connect with purposeful minds worldwide.',
    url: '/join',
    type: 'website',
  },
  twitter: {
    title: 'Join The Purple Movement | Take the Pledge',
    description:
      'Become part of The Purple Movement — a global force of changemakers, innovators, and leaders creating a borderless future.',
  },
};

export default function JoinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
