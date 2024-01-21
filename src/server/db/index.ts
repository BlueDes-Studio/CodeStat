import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";

import { env } from "@/env";
import * as schema from "./schema";

export const db = drizzle(
  postgres(env.DATABASE_URL, {
    prepare: false,
  }),
  { schema },
);
