import { Router } from "express";
import { createResource, getResources, getResource, updateResource, deleteResource } from "../controllers/resource.controller.js";

const router = Router();

router
    .route("/")
    .post(createResource)
    .get(getResources)
router
    .route("/:id")
    .get(getResource)
    .patch(updateResource)
    .delete(deleteResource)

export default router;