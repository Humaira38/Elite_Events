import express from 'express'; 
import graphqlHTTP from 'graphql-http'; // Corrected import
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import reviewRouter from "./router/reviewRouter.js";
import chatbotRouter from "./router/chatbotRouter.js"; // Import the chatbot router
import userRouter from "./router/userRouter.js";
import packageRouter from "./router/packageRouter.js";
import { schema } from './graphql/schema.js'; 
import path from 'path';
import { fileURLToPath } from 'url';
import cors from "cors";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: "./config/config.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use('/images', cors(), express.static(path.join(__dirname, 'public/images')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define routes
app.use("/api/v1/message", messageRouter);
app.use("/api/v1/reviews", reviewRouter); 
app.use("/api/v1/chatbot", chatbotRouter);  
app.use("/api/v1/users", userRouter);
app.use("/api/v1/packages", packageRouter);

// Set up the GraphQL route
app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true, 
}));

dbConnection();

export default app;
