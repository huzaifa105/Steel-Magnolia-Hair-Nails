import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post("/api/booking", (req, res) => {
    const { name, email, phone, service, date, time, notes } = req.body;
    console.log("Booking Received:", { name, email, phone, service, date, time, notes });
    
    // Simulate processing delay
    setTimeout(() => {
      res.json({ 
        success: true, 
        message: `Thank you, ${name}! Your appointment for ${service} on ${date} at ${time} has been requested. We will contact you shortly to confirm.` 
      });
    }, 1000);
  });

  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    console.log("Contact Form Received:", { name, email, subject, message });
    
    setTimeout(() => {
      res.json({ 
        success: true, 
        message: `Thank you for reaching out, ${name}. We've received your message regarding "${subject}" and will get back to you soon.` 
      });
    }, 1000);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
