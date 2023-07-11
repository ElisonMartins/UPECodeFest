/*
  Warnings:

  - Added the required column `participarCurso` to the `Usuario` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Usuario" ADD COLUMN     "participarCurso" BOOLEAN NOT NULL;
