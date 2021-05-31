import { MigrationInterface, QueryRunner } from 'typeorm';

export default class RelationLessonClass1622464270213
  implements MigrationInterface
{
  name = 'RelationLessonClass1622464270213';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "lesson" ADD "classeId" uuid`);
    await queryRunner.query(
      `ALTER TABLE "lesson" ADD CONSTRAINT "FK_f8129e3c7eacda851f01f054f96" FOREIGN KEY ("classeId") REFERENCES "class"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "lesson" DROP CONSTRAINT "FK_f8129e3c7eacda851f01f054f96"`,
    );
    await queryRunner.query(`ALTER TABLE "lesson" DROP COLUMN "classeId"`);
  }
}
