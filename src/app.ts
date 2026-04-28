import express from "express";
import { validateCardHandler } from "./controllers/CardContoller";

const app = express();

app.use(express.json());

app.post("/validate-card", validateCardHandler);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});