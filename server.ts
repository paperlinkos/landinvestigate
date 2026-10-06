import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production' || process.env.CI;

async function startServer() {
  const app = express();
  const port = process.env.PORT || 3000;

  app.use(express.json());

  if (!isProduction) {
    // Create Vite server in middleware mode
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    // In production, serve static files from dist
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(distPath, 'index.html'));
    });
  }

  const server = app.listen(Number(port), '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${port}`);
  });

  server.on('error', (err: any) => {
    if (err.code === 'EADDRINUSE' && !process.env.PORT) {
      const fallbackPort = 3001;
      console.log(`Port ${port} in use, falling back to http://localhost:${fallbackPort}`);
      app.listen(fallbackPort, '0.0.0.0', () => {
        console.log(`Server running on http://localhost:${fallbackPort}`);
      });
    } else {
      console.error('Server error:', err);
    }
  });
}

startServer();

