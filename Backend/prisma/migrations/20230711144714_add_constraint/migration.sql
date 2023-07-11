/*
  Warnings:

  - You are about to drop the `Formulario` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[equipeId]` on the table `Usuario` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `equipeId` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "equipeId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "Formulario";

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_equipeId_key" ON "Usuario"("equipeId");

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_equipeId_fkey" FOREIGN KEY ("equipeId") REFERENCES "Equipe"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
