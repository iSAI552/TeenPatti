import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config(
    {
        path: ".env"
    }
);

// connectDB()
// .then(() => {
//     const activePort = process.env.PORT || 8000;
//     app.on("error", (error) => {
//         console.error("Error starting the server", error);
//         throw error;
//     });
//     app.listen(activePort, () => {
//         console.log(`Server listening on port ${activePort}`);
//     })
// })
// .catch((error) => {
//     console.error("MongoDB connection failed !!!", error);
//     process.exit(1);
// });