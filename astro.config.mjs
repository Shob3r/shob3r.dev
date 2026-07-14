import tailwindcss from '@tailwindcss/vite';
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
    vite: {
        plugins: [tailwindcss()]
    },
    fonts: [
        {
            name: "Commissioner",
            cssVariable: "--font-serif",
            provider: fontProviders.bunny(),
            subsets: ["latin"],
            weights: ["400 700"]
        },
        {
            name: "JetBrains Mono",
            cssVariable: "--font-mono",
            provider: fontProviders.bunny(),
            subsets: ["latin"],
            weights: ["400"]
        },
    ]
});
