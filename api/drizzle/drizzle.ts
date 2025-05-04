import { drizzle } from "drizzle-orm/node-postgres";
import config from "../src/lib/config";

import { neon } from "@neondatabase/serverless";

const sql = neon(config.env.databaseUrl!);

// @ts-ignore
export const db = drizzle({ client: sql });
