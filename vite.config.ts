import { VitePWA } from "vite-plugin-pwa";
import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), VitePWA({ 
    registerType: 'autoUpdate',
    workbox: {
        clientsClaim: true,
        skipWaiting: true }
      })
    ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
