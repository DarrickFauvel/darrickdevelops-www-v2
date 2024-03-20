/*
  Warnings:

  - The primary key for the `Project` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `project_id` on the `Project` table. All the data in the column will be lost.
  - Added the required column `id` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Skills" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Project" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "slug" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "titleLong" TEXT NOT NULL,
    "subtitle" TEXT NOT NULL,
    "client" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "stack" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "solutionUrl" TEXT NOT NULL,
    "liveUrl" TEXT NOT NULL,
    "repoUrl" TEXT NOT NULL,
    "isFeatured" BOOLEAN NOT NULL
);
INSERT INTO "new_Project" ("category", "client", "description", "image", "isFeatured", "liveUrl", "repoUrl", "slug", "solutionUrl", "stack", "subtitle", "title", "titleLong") SELECT "category", "client", "description", "image", "isFeatured", "liveUrl", "repoUrl", "slug", "solutionUrl", "stack", "subtitle", "title", "titleLong" FROM "Project";
DROP TABLE "Project";
ALTER TABLE "new_Project" RENAME TO "Project";
CREATE UNIQUE INDEX "Project_slug_key" ON "Project"("slug");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "Category_title_key" ON "Category"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Skills_title_key" ON "Skills"("title");
