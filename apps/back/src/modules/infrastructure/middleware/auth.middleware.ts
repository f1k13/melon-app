import * as jwt from "jsonwebtoken";
import { envConfig } from "@back/env";
import { FastifyReply, FastifyRequest } from "fastify";

export class AuthMiddleware {
  private secretKey: string;

  constructor() {
    this.secretKey = envConfig.SECRET_KEY;
  }
  public async handle(req: FastifyRequest, reply: FastifyReply) {
    try {
      const authHeader = req.headers.authorization;

      if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return reply.status(401).send({ message: "Не авторизован" });
      }
      const token = authHeader.split(" ")[1];

      const decoded = jwt.verify(token, this.secretKey);
      // @ts-ignore
      req.user = { userId: decoded.id };
    } catch (error) {
      console.error(error, "ERROR IN AUTHMIDDLEWARE");
    }
  }
}
