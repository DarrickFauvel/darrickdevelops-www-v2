-- CreateTable
CREATE TABLE "Project" (
    "project_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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

-- CreateIndex
CREATE UNIQUE INDEX "Project_slug_key" ON "Project"("slug");
