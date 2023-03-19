import express from "express";
const router = express.Router();
import {
    Test,
    getController,
    addController,
    deleteController,
    updateController
} from "../controller/todoController.js"

// Routes
router.get('/', Test);
router.post('/add-todo',addController);
router.get('/get-todo',getController);
router.delete('/todo/:id',deleteController);
router.patch('/update-todo/:id',updateController)

export default router;