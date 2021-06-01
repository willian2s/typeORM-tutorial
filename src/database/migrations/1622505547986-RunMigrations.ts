import {MigrationInterface, QueryRunner} from "typeorm";

export class RunMigrations1622505547986 implements MigrationInterface {
    name = 'RunMigrations1622505547986'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "student" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "key" integer NOT NULL, "email" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "universityId" uuid, CONSTRAINT "UQ_a56c051c91dbe1068ad683f536e" UNIQUE ("email"), CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "university" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "cnpj" character varying NOT NULL, "professors" integer NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_f191b37f51b363b817675453696" UNIQUE ("cnpj"), CONSTRAINT "PK_d14e5687dbd51fd7a915c22ac13" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "course" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying(100) NOT NULL, "description" integer, "duration" integer NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "universityId" uuid, CONSTRAINT "UQ_30d559218724a6d6e0cc4f26b0e" UNIQUE ("name"), CONSTRAINT "PK_bf95180dd756fd204fb01ce4916" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "lesson" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "coursesId" uuid, CONSTRAINT "PK_0ef25918f0237e68696dee455bd" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "content" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "description" character varying NOT NULL, "linkContent" character varying NOT NULL, "created_At" TIMESTAMP NOT NULL DEFAULT now(), "updated_At" TIMESTAMP NOT NULL DEFAULT now(), "lessonId" uuid, CONSTRAINT "REL_0b349f6b8ca7f05eed39ffb956" UNIQUE ("lessonId"), CONSTRAINT "PK_6a2083913f3647b44f205204e36" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student_courses_course" ("studentId" uuid NOT NULL, "courseId" uuid NOT NULL, CONSTRAINT "PK_14a911a16ab76c78f1fe6368a92" PRIMARY KEY ("studentId", "courseId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_29e49d9ad51ffb927f488f0802" ON "student_courses_course" ("studentId") `);
        await queryRunner.query(`CREATE INDEX "IDX_d13666d470035a399961e1d08c" ON "student_courses_course" ("courseId") `);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_d51c79e7ce60bfee43622bdd705" FOREIGN KEY ("universityId") REFERENCES "university"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "course" ADD CONSTRAINT "FK_81baebb85fd36de51634573ceed" FOREIGN KEY ("universityId") REFERENCES "university"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "lesson" ADD CONSTRAINT "FK_192194c76e790b8434327783dae" FOREIGN KEY ("coursesId") REFERENCES "course"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "content" ADD CONSTRAINT "FK_0b349f6b8ca7f05eed39ffb956d" FOREIGN KEY ("lessonId") REFERENCES "lesson"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_courses_course" ADD CONSTRAINT "FK_29e49d9ad51ffb927f488f0802e" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student_courses_course" ADD CONSTRAINT "FK_d13666d470035a399961e1d08cb" FOREIGN KEY ("courseId") REFERENCES "course"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
        await queryRunner.query(`CREATE TABLE "query-result-cache" ("id" SERIAL NOT NULL, "identifier" character varying, "time" bigint NOT NULL, "duration" integer NOT NULL, "query" text NOT NULL, "result" text NOT NULL, CONSTRAINT "PK_6a98f758d8bfd010e7e10ffd3d3" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "query-result-cache"`);
        await queryRunner.query(`ALTER TABLE "student_courses_course" DROP CONSTRAINT "FK_d13666d470035a399961e1d08cb"`);
        await queryRunner.query(`ALTER TABLE "student_courses_course" DROP CONSTRAINT "FK_29e49d9ad51ffb927f488f0802e"`);
        await queryRunner.query(`ALTER TABLE "content" DROP CONSTRAINT "FK_0b349f6b8ca7f05eed39ffb956d"`);
        await queryRunner.query(`ALTER TABLE "lesson" DROP CONSTRAINT "FK_192194c76e790b8434327783dae"`);
        await queryRunner.query(`ALTER TABLE "course" DROP CONSTRAINT "FK_81baebb85fd36de51634573ceed"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_d51c79e7ce60bfee43622bdd705"`);
        await queryRunner.query(`DROP INDEX "IDX_d13666d470035a399961e1d08c"`);
        await queryRunner.query(`DROP INDEX "IDX_29e49d9ad51ffb927f488f0802"`);
        await queryRunner.query(`DROP TABLE "student_courses_course"`);
        await queryRunner.query(`DROP TABLE "content"`);
        await queryRunner.query(`DROP TABLE "lesson"`);
        await queryRunner.query(`DROP TABLE "course"`);
        await queryRunner.query(`DROP TABLE "university"`);
        await queryRunner.query(`DROP TABLE "student"`);
    }

}
