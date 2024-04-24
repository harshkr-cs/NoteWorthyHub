import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 4000;
export const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://harshwwe555:3LgQpp423ZYvPYwq@cluster0.xnolxxq.mongodb.net/notesDatabase";
