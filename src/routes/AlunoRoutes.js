import express from "express";
import {
    getAllAlunos,
    getAlunoById,
    createAluno,
    updateAluno,
    deleteAlunoById
} from "../controller/AlunoController.js";

const router = express.Router();

router.get("/", getAllAlunos);
router.get("/:id", getAlunoById);
router.post("/", createAluno);
router.put("/:id", updateAluno);
router.delete("/:id", deleteAlunoById);

export default router;