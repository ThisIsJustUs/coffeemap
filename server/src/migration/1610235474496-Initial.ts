import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1610235474496 implements MigrationInterface {
    name = 'Initial1610235474496';

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `CREATE TABLE "User" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "role" character varying NOT NULL, "image" character varying, CONSTRAINT "UQ_4a257d2c9837248d70640b3e36e" UNIQUE ("email"), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `CREATE TABLE "Shop" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "location" character varying NOT NULL, "image" character varying, "userId" integer NOT NULL, CONSTRAINT "PK_dae0b45de0d0d98634f08788633" PRIMARY KEY ("id"))`
        );
        await queryRunner.query(
            `ALTER TABLE "Shop" ADD CONSTRAINT "FK_eb54f3890b6376579100ef14318" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
            `ALTER TABLE "Shop" DROP CONSTRAINT "FK_eb54f3890b6376579100ef14318"`
        );
        await queryRunner.query(`DROP TABLE "Shop"`);
        await queryRunner.query(`DROP TABLE "User"`);
    }
}
