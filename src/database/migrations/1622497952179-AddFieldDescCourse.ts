import {MigrationInterface, QueryRunner} from "typeorm";

export class AddFieldDescCourse1622497952179 implements MigrationInterface {
    name = 'AddFieldDescCourse1622497952179'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course" ADD "description" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "course" DROP COLUMN "description"`);
    }

}
