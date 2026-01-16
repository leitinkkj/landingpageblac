import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Poppins } from 'next/font/google';
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
    <html lang="pt-BR" className={`dark ${poppins.variable}`} suppressHydrationWarning>
      <head>
        {/* Preconnect para recursos críticos - antes de qualquer outro recurso */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* DNS Prefetch para recursos de terceiros (não-críticos) */}
        <link rel="dns-prefetch" href="https://connect.facebook.net" />
        <link rel="dns-prefetch" href="https://cdn.utmify.com.br" />
        <link rel="dns-prefetch" href="https://i.imgur.com" />
        <link rel="dns-prefetch" href="https://api.dicebear.com" />

        {/* Fonte Anton para headlines - com display=swap para não bloquear render */}
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={poppins.className} style={{ fontFamily: 'var(--font-poppins), system-ui, sans-serif' }}>
        {children}
        <Toaster />

        {/* Meta Pixel Code - afterInteractive para não bloquear hidratação */}
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

        {/* UTMFY Script - lazyOnload para não bloquear nada */}
        <Script
          src="https://cdn.utmify.com.br/scripts/utms/latest.js"
          data-utmify-prevent-xcod-sck
          data-utmify-prevent-subids
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
