import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'The Purple Movement',
    short_name: 'Purple Movement',
    description: 'Beyond Syllabus, Beyond Gatekeepers, Beyond Borders. A global collective of purposeful changemakers.',
    start_url: '/',
    display: 'standalone',
    background_color: '#050511',
    theme_color: '#9333ea',
    icons: [
      {
        src: '/logos/logo_pm.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logos/logo_pm.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
