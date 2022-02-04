import express from "express";
const router = express.Router();

import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {
  // res.send("hello from express!");
  res.sendFile(path.join(__dirname, "../views/index.html"));
});





router.use((req, res) => {
  console.log('page does not exist');
//   res.sendFile(path.join(__dirname, "../views/404.html"));
})


export default router;
