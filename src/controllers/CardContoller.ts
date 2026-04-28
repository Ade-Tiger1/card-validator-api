import type { Request, Response } from "express";
import { validateCard } from "../services/CardService"

export function validateCardHandler(req: Request, res: Response) {
  try {
    const { cardNumber } = req.body;

    const result = validateCard(cardNumber);

    return res.status(200).json(result);
  } catch (error: any) {
    return res.status(400).json({
      error: error.message,
    });
  }
}