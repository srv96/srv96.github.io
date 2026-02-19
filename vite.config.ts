import { defineConfig } from 'vite';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import Sitemap from 'vite-plugin-sitemap';

export default defineConfig({
    root: './',
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
    },
    server: {
        port: 3000,
        open: true,
    },
    plugins: [
        ViteImageOptimizer({
            /* pass your config */
            png: { quality: 80 },
            jpeg: { quality: 80 },
            webp: { quality: 80 },
            avif: { quality: 80 },
        }),
        Sitemap({ hostname: 'https://srv96.github.io' }),
    ],
});
