const sql = require("better-sqlite3")
const db = sql("database.db")
const { categories, projects, skills } = require("./dataset.js")

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS projects (
       project_id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       titleLong TEXT NOT NULL,
       subtitle TEXT NOT NULL,
       client TEXT NOT NULL,
       category TEXT NOT NULL,
       stack TEXT NOT NULL,
       description TEXT NOT NULL,
       image TEXT NOT NULL,
       solutionUrl TEXT NOT NULL,
       liveUrl TEXT NOT NULL,
       repoUrl TEXT NOT NULL,
       isFeatured BOOLEAN NOT NULL
    )`
).run()

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS categories (
      category_id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL UNIQUE,
      subtitle TEXT NOT NULL,
      category TEXT NOT NULL,
      description TEXT NOT NULL
   )`
).run()

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS skills (
      skill_id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL UNIQUE
   )`
).run()

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS projects_categories (
      project_id INT,
      category_id INT,
      PRIMARY KEY (project_id, category_id),
      FOREIGN KEY (project_id) REFERENCES projects(project_id),
      FOREIGN KEY (category_id) REFERENCES categories(category_id)
   )`
).run()

async function initProjectsData() {
  const stmt = db.prepare(`
      INSERT INTO projects VALUES (
         null,
         @slug,
         @title,
         @titleLong,
         @subtitle,
         @client,
         @category,
         @stack,
         @description,
         @image,
         @solutionUrl,
         @liveUrl,
         @repoUrl,
         @isFeatured
      )`)

  for (const project of projects) {
    stmt.run(project)
  }
}

async function initCategoriesData() {
  const stmt = db.prepare(`
      INSERT INTO categories VALUES (
         null,
         @title,
         @subtitle,
         @category,
         @description
      )`)

  for (const category of categories) {
    stmt.run(category)
  }
}

async function initSkillsData() {
  const stmt = db.prepare(`
      INSERT INTO skills VALUES (
         null,
         @title
      )`)

  for (const skill of skills) {
    stmt.run(skill)
  }
}

initCategoriesData()
initProjectsData()
initSkillsData()
