import express from "express"

const app = express();

app.use(express.json());

import sessionRouter from "./routes/session.route.js";
import resourceRouter from "./routes/resource.route.js";

app.use("/v1/sessions", sessionRouter);
app.use("/v1/resources", resourceRouter);

// examples : http://localhost:4000/v1/sessions
//            http://localhost:4000/v1/sessions/:id

app.use((req, res) => {
    return res.status(404).json({
        error: "Not Found"
    })
})

export default app;