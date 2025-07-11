import { FastifyReply, FastifyRequest } from "fastify";

export interface ICtx {
  req: FastifyRequest;
  reply: FastifyReply;
}

export function bindController<T extends object>(instance: T) {
  return function <K extends keyof T>(method: K) {
    const controller = instance[method];

    if (typeof controller !== "function") {
      throw new Error(`${String(method)} is not a function`);
    }

    return (req: FastifyRequest, reply: FastifyReply) =>
      (controller as Function).call(instance, { req, reply });
  };
}
