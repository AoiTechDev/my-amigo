import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  schema: "./src/db/schema",
  dialect: "postgresql",
  out: "./drizzle",
  dbCredentials: {
    url: process.env.NEXT_PUBLIC_SUPABASE_URL!,
  },
  verbose: true,
  strict: true,
});
