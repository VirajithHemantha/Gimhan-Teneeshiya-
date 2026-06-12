import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv, type Plugin} from 'vite';

const SHARE_IMAGE_PATH = '/2026.07.16-20260612T100209Z-3-001/my/RWP01402.jpg';
const DEFAULT_SITE_URL = 'https://gimhan-teneeshiya-weddinginvitation.vercel.app';

function getSiteUrl(env: Record<string, string>): string {
  const configured = env.VITE_SITE_URL?.trim();
  if (configured) return configured.replace(/\/$/, '');
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return DEFAULT_SITE_URL;
}

function siteMetaPlugin(siteUrl: string): Plugin {
  const shareImageUrl = siteUrl ? `${siteUrl}${SHARE_IMAGE_PATH}` : SHARE_IMAGE_PATH;

  return {
    name: 'site-meta',
    transformIndexHtml(html) {
      let result = html
        .replaceAll('%SHARE_IMAGE_URL%', shareImageUrl)
        .replaceAll('%SHARE_IMAGE_PATH%', SHARE_IMAGE_PATH);

      if (siteUrl) {
        result = result.replaceAll('%SITE_URL%', siteUrl);
      } else {
        result = result.replace(/^\s*<meta property="og:url"[^>]*\/>\s*\n/m, '');
      }

      return result;
    },
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  const siteUrl = getSiteUrl(env);

  return {
    plugins: [react(), tailwindcss(), siteMetaPlugin(siteUrl)],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
