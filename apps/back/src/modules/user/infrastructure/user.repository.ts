import { db, TDB } from "@back/db";
import { eq } from "drizzle-orm";
import { TUserDto, TUserProfileDto } from "../model/user.model";
import {
  userConfigSchema,
  userProfileSchema,
} from "@back/db/schemas/user/user.schema";

export class UserRepository {
  db: TDB;

  constructor(db: TDB) {
    this.db = db;
  }

  public async getUserByTgId(tgId: string) {
    const [user] = await this.db
      .select()
      .from(userConfigSchema)
      .where((it) => eq(it.tgId, tgId));
    return user;
  }
  public async createUser(dto: TUserDto) {
    const [user] = await this.db
      .insert(userConfigSchema)
      .values({
        tgId: String(dto.id),
        tgUsername: dto.username,
        firstName: dto.firstName,
        lastName: dto.lastName,
        photoUrl: dto.photoUrl,
        authDate: dto.authDate,
      })
      .returning();
    return user;
  }
  public async createUserProfile(dto: TUserProfileDto) {
    const [user] = await this.db
      .insert(userProfileSchema)
      .values({
        ...dto,
        userId: dto.userId!,
      })
      .returning();
    return user;
  }
  public async updateUserProfileByUserId(dto: TUserProfileDto) {
    const [user] = await this.db
      .update(userProfileSchema)
      .set(dto)
      .where(eq(userProfileSchema.userId, dto.userId))
      .returning();

    return user;
  }
  public async getUserById(id: string) {
    const [user] = await this.db
      .select({
        user: userConfigSchema,
        profile: userProfileSchema,
      })
      .from(userConfigSchema)
      .where((it) => eq(it.user.id, id))
      .leftJoin(userConfigSchema, eq(userProfileSchema.userId, id));
    return user;
  }
}
