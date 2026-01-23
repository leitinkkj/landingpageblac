import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Poppins, Anton } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';

// Font optimization - usando next/font para eliminar FOUT e melhorar LCP
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
  variable: '--font-poppins',
  preload: true,
});

// Fonte Anton otimizada com next/font
const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-headline',
  preload: true,
});

// Fallback para Anton (headline font) - carregada via CSS para fallback
const headlineFont = {
  variable: '--font-headline',
};

export const metadata: Metadata = {
  title: 'Black Shoppe - O Maior Marketplace de Atacado e Varejo do Brasil',
  description: 'O maior marketplace de atacado e varejo com os melhores preços do Brás e fronteira do Paraguai. Acesso a +500 fornecedores verificados.',
  keywords: ['atacado', 'varejo', 'marketplace', 'fornecedores', 'brás', 'paraguai', 'lojista', 'revenda'],
  authors: [{ name: 'Black Shoppe' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Black Shoppe - O Maior Marketplace de Atacado e Varejo do Brasil',
    description: 'O maior marketplace de atacado e varejo com os melhores preços do Brás e fronteira do Paraguai.',
    type: 'website',
    locale: 'pt_BR',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`dark ${poppins.variable} ${anton.variable}`} suppressHydrationWarning>
      <head>
        {/* DNS Prefetch e Preconnect para recursos críticos */}
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.utmify.com.br" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://i.imgur.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://api.dicebear.com" crossOrigin="anonymous" />

        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://cdn.utmify.com.br" />
        <link rel="dns-prefetch" href="https://i.imgur.com" />
        <link rel="dns-prefetch" href="https://api.dicebear.com" />
      </head>
      <body className={poppins.className} style={{ fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}>
        {children}
        <Toaster />

        {/* Meta Pixel Code - afterInteractive otimizado */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1326401629528608');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1326401629528608&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        {/* UTMFY Script - afterInteractive para garantir rastreamento de links em SPAs */}
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
