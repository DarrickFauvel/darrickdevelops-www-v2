import Database from "better-sqlite3"

export const db = new Database("database.db", options)

db.pragma("journal_mode = WAL")
