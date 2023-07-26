/*
  Warnings:

  - You are about to drop the column `cursoNome` on the `Usuario` table. All the data in the column will be lost.
  - You are about to drop the column `participarCurso` on the `Usuario` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Equipe" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Equipe_id_seq";

-- AlterTable
ALTER TABLE "Usuario" DROP COLUMN "cursoNome",
DROP COLUMN "participarCurso";
