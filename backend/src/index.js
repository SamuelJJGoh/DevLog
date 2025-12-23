import dotenv from 'dotenv'

dotenv.config({
    path: '.env'
});

const startServer = async () => {
    try {
        const { default: app } = await import("./app.js");
        const { sessionDB, resourceDB } = await import("./config/database.js");

        await sessionDB.asPromise();
        await resourceDB.asPromise();

        app.on("error", (error) => {
            console.log("ERROR", error);
            throw error;
        });

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port: ${process.env.PORT}`)
        })
    } catch (error) {
        console.log("MongoDB connection failed!", error)
    }
}

startServer()
