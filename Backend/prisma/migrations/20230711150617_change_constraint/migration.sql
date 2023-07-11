-- DropForeignKey
ALTER TABLE "Usuario" DROP CONSTRAINT "Usuario_equipeId_fkey";

-- DropIndex
DROP INDEX "Usuario_equipeId_key";

-- AlterTable
ALTER TABLE "Usuario" ALTER COLUMN "equipeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "Usuario" ADD CONSTRAINT "Usuario_equipeId_fkey" FOREIGN KEY ("equipeId") REFERENCES "Equipe"("id") ON DELETE SET NULL ON UPDATE CASCADE;
