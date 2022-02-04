import express from "express";
import router from "./routes/index.js";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use("/", router);


app.listen(port, () => {
  console.log(`Server running at port: ${port}/`);
});
