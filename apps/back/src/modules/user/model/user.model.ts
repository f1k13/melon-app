import { z } from "zod";

export const userAuthSchema = z.object({
  initData: z.string().min(1),
});

export type TUserAuthDto = z.infer<typeof userAuthSchema>;
