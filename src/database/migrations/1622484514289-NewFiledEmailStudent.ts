import {MigrationInterface, QueryRunner} from "typeorm";

export class NewFiledEmailStudent1622484514289 implements MigrationInterface {
    name = 'NewFiledEmailStudent1622484514289'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" ADD "email" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "student" DROP COLUMN "email"`);
    }

}
