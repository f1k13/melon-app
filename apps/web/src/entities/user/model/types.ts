import z from "zod";

export const userSchema = z.object({
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  photoUrl: z.string().optional(),
  tgUsername: z.string().min(1),
  tgId: z.number().min(1),
  authDate: z.string().optional(),
  createdAt: z.date(),
});

export type TUser = z.infer<typeof userSchema>;

export const userProfileSchema = z.object({
  userId: z.string().min(1),
  birthday: z.date(),
  nickname: z.string(),
  bio: z.string(),
  createdAt: z.date(),
  id: z.string(),
});

export type TUserProfile = z.infer<typeof userProfileSchema>;

export interface IUserProfile {
  user: TUser;
  profile: TUserProfile;
}
export type TUserAuthResponse = IUserProfile & {
  token: string;
};
