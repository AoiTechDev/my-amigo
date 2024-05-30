import { migrate } from "drizzle-orm/postgres-js/migrator";

import { db } from "./index";

export const migrateDB = async () => {
  console.log("migrating database");
  await migrate(db, {migrationsFolder: "drizzle"});
  console.log("database migrated");
};

migrateDB();
