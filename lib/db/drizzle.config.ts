import "dotenv/config";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "src/schema/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    // @ts-ignore
    url: process.env.DATABASE_URL,
  },
});