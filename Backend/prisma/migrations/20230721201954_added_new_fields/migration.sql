/*
  Warnings:

  - You are about to drop the column `nome` on the `Equipe` table. All the data in the column will be lost.
  - Added the required column `nomeEquipe` to the `Equipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cursoFaculdade` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `faculdadeNome` to the `Usuario` table without a default value. This is not possible if the table is not empty.
  - Added the required column `periodoFaculdade` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Equipe" DROP COLUMN "nome",
ADD COLUMN     "dataCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "nomeEquipe" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "cursoFaculdade" TEXT NOT NULL,
ADD COLUMN     "faculdadeNome" TEXT NOT NULL,
ADD COLUMN     "periodoFaculdade" INTEGER NOT NULL;
