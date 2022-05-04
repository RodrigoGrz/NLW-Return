import { Router } from "express";
import { PrismaFeedbacksRepository } from "./repositories/prisma/prismaFeedbacksRepository";
import { SubmitFeedbackUseCase } from "./useCases/SubmitFeedbackUseCase";
import { NodeMailMailUtils } from "./utils/nodemailer/NodeMailerMailUtils";

const router = Router();

router.post("/feedbacks", async (request, response) => {
    const { type, comment, screenshot } = request.body;

    const prismaFeedbacksRepository = new PrismaFeedbacksRepository();
    const nodemailerMailUtils = new NodeMailMailUtils();
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(prismaFeedbacksRepository, nodemailerMailUtils);

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    });

    return response.status(201).send();
});

export { router };