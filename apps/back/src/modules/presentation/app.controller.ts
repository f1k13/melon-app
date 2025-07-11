import { ZodSchema } from "zod";

export class AppController {
  protected validateZod<T>(schema: ZodSchema<T>, data: unknown) {
    try {
      return schema.parse(data);
    } catch (error) {
      throw error;
    }
  }
}
