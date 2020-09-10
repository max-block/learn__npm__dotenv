import dotenv from "dotenv";


dotenv.config(); // create .env file with DATABASE_URL=mongodb://localhost

const DATABASE_URL = process.env.DATABASE_URL;

console.log(DATABASE_URL);