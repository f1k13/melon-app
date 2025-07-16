import { interestsSchema } from "./interests/interests.schema";
import { logsSchema } from "./logs/logs.schema";
import {
  userConfigSchema,
  userProfileSchema,
  userToInterest,
} from "./user/user.schema";

export const schemas = {
  userProfileSchema,
  userConfigSchema,
  logsSchema,
  interestsSchema,
  userToInterest,
};
