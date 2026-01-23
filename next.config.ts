
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },



  // Otimização de imagens para melhor performance
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 ano de cache
    unoptimized: false,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.imgur.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'fontmeme.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Compressão Brotli/Gzip habilitada
  compress: true,

  // PoweredByHeader desabilitado para menor payload
  poweredByHeader: false,

  // Desabilitar source maps em produção para menor bundle
  productionBrowserSourceMaps: false,

  // Strict mode para otimizações do React
  reactStrictMode: true,

  // Headers de cache e performance para assets estáticos
  async headers() {
    return [
      // Assets estáticos com cache agressivo
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif|woff|woff2|ttf|otf)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Build assets do Next.js
      {
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Fontes locais
      {
        source: '/fonts/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // CSS e JS com cache
      {
        source: '/:all*(css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Página principal - cache curto para atualizações
      {
        source: '/',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, stale-while-revalidate=86400',
          },
        ],
      },
    ];
  },

  // Experimental: otimizações avançadas
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    // Package imports optimization para reduzir bundle size
    optimizePackageImports: [
      'lucide-react',
      'framer-motion',
      'three',
      '@radix-ui/react-slot',
      'clsx',
      'tailwind-merge'
    ],
  },



  // Webpack configurations para otimização de bundle
  // Webpack configurations comentadas para evitar conflito com Turbopack (Next.js 16 default)
  /*
  webpack: (config, { isServer }) => {
    // Otimização para módulos grandes
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 244000,
          cacheGroups: {
            // Bundle separado para Three.js (carregado dinamicamente)
            three: {
              test: /[\\/]node_modules[\\/]three[\\/]/,
              name: 'three',
              chunks: 'async',
              priority: 20,
            },
            // Bundle separado para Framer Motion
            framerMotion: {
              test: /[\\/]node_modules[\\/]framer-motion[\\/]/,
              name: 'framer-motion',
              chunks: 'all',
              priority: 15,
            },
            // Vendor bundle para outras dependências
            vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              chunks: 'all',
              priority: 10,
            },
          },
        },
      };
    }
    return config;
  },
  */
};

export default nextConfig;
