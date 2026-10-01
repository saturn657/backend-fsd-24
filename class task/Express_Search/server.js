import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());

app.use("/files", express.static(path.join(__dirname, "files")));

app.listen(5000, () => {
  console.log("Server running on 5000");
});