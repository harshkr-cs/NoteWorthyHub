import mongoose from "mongoose";
import { MONGODB_URI } from "./config.js";

// try {
//   const db = await mongoose.connect(MONGODB_URI);
//   console.log("Connected to ", db.connection.name);
// } catch (error) {
//   console.error(error);
// }


mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  mongoose.set('strictQuery', true); // Enforcing strict mode for queries
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected");
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose is disconnected");
});

