// scripts/init-db.js
import { openDB } from "../lib/database.mjs";

async function init() {
  const db = await openDB();
  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
      username TEXT PRIMARY KEY,
      age INTEGER,
      gender TEXT,
      occupation TEXT,
      marital_status TEXT,
      living_situation TEXT,
      social_support INTEGER,
      community_engagement INTEGER,
      relationship_satisfaction INTEGER,
      loneliness INTEGER,
      mood INTEGER,
      anxiety INTEGER,
      sleep_quality INTEGER,
      energy_levels INTEGER,
      concentration INTEGER,
      enjoyment_of_life INTEGER
    );
  `);
  console.log("Database initialized");
}

init();
