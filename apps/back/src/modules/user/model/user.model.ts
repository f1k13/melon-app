import { z } from "zod";

export const userAuthSchema = z.object({
  initData: z.string().min(1),
});

export type TUserAuthDto = z.infer<typeof userAuthSchema>;

export const userDtoSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  photoUrl: z.string().optional(),
  username: z.string().min(1),
  id: z.number().min(1),
  authDate: z.string().optional(),
});

export type TUserDto = z.infer<typeof userDtoSchema>;

export const userProfileSchema = z.object({
  userId: z.string().min(1),
  birthday: z.date(),
  nickname: z.string(),
  bio: z.string(),
});

export type TUserProfileDto = z.infer<typeof userProfileSchema>;
