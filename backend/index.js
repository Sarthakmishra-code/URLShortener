import app from "./src/app.js";
import dotenv from 'dotenv';
import connectDb from "./src/config/db.js";

const PORT = process.env.PORT || 3000;
dotenv.config({});
connectDb()
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
.catch((error) => {
    console.error(`Failed to connect to the database: ${error.message}`);
});