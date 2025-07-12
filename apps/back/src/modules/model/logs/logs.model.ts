import { EModule } from "@back/enums/module.enum";
import z from "zod";

export const logsSchema = z.object({
  text: z.string(),
  module: z.nativeEnum(EModule),
});

export type TLogsDto = z.infer<typeof logsSchema>;
