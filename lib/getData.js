import sql from "better-sqlite3"
const db = sql("database.db")

export async function getProjects() {
  await new Promise((resolve) => setTimeout(resolve, 5000))

  // throw new Error('Loading projects failed');
  return db.prepare("SELECT * FROM projects").all()
}

export function getProject(slug) {
  return db.prepare("SELECT * FROM projects WHERE slug = ?").get(slug)
}
