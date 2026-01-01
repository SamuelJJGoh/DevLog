import { Router } from "express";
import { createSession, getSessions, getSession, updateSession, deleteSession } from "../controllers/session.controller.js";

const router = Router();

router
    .route("/")
    .post(createSession)
    .get(getSessions)
router
    .route("/:id")
    .get(getSession)
    .patch(updateSession)
    .delete(deleteSession)

export default router;