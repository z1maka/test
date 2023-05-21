/*
  Warnings:

  - You are about to drop the column `filename` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Image` table. All the data in the column will be lost.
  - Added the required column `alt` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `data` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "filename",
DROP COLUMN "url",
ADD COLUMN     "alt" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "data" BYTEA NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
