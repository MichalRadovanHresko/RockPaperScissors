import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const emptySourceMapMiddleware = {
  name: "empty-source-map-middleware",
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url?.endsWith(".map")) {
        res.setHeader("Content-Type", "application/json");
        res.end(
          JSON.stringify({
            version: 3,
            file: "empty.js",
            sources: ["empty.js"],
            sourcesContent: [""],
            names: [],
            mappings: "",
          }),
        );
        return;
      }
      next();
    });
  },
};

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), emptySourceMapMiddleware],
});
