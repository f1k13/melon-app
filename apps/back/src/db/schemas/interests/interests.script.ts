import { db } from "@back/db";
import interests from "./interests.json";
import { interestsSchema } from "./interests.schema";

async function insert() {
  await db.insert(interestsSchema).values(interests);
}

insert().catch((e) => {
  console.error("Ошибка:", e);
});
