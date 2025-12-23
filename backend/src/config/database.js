import mongoose from "mongoose"
import { SESSION_DB_NAME, RESOURCE_DB_NAME } from "./constants.js";

const baseUri = process.env.MONGODB_URI;

const sessionDB = mongoose.createConnection(`${baseUri}/${SESSION_DB_NAME}`);
const resourceDB = mongoose.createConnection(`${baseUri}/${RESOURCE_DB_NAME}`);

sessionDB.on("connected", () => {
    console.log(`\n Session DB connected! ${sessionDB.host}`);
})

resourceDB.on("connected", () => {
    console.log(`\n Resource DB connected! ${resourceDB.host}`);
})

sessionDB.on("error", (error) => {
    console.error("Session DB connection failed!", error);
})

resourceDB.on("error", (error) => {
    console.error("Resource DB connected failed!", error);
})

export { sessionDB, resourceDB };