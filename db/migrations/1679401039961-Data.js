module.exports = class Data1679401039961 {
    name = 'Data1679401039961'

    async up(db) {
        await db.query(`CREATE TABLE "contract" ("id" character varying NOT NULL, CONSTRAINT "PK_17c3a89f58a2997276084e706e8" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "owner_contract_token" ("id" character varying NOT NULL, "owner_id" character varying, "contract_token_id" character varying, CONSTRAINT "PK_b148fd7a3d93e6252b04aa1b466" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_21166597f9cda2175f2611b340" ON "owner_contract_token" ("owner_id") `)
        await db.query(`CREATE INDEX "IDX_2a4471848adf3ee6b9be260324" ON "owner_contract_token" ("contract_token_id") `)
        await db.query(`CREATE TABLE "owner" ("id" character varying NOT NULL, CONSTRAINT "PK_8e86b6b9f94aece7d12d465dc0c" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "transfer" ("id" character varying NOT NULL, "timestamp" TIMESTAMP WITH TIME ZONE NOT NULL, "block" integer NOT NULL, "token_id" character varying, "contract_id" character varying, "from_id" character varying, "to_id" character varying, CONSTRAINT "PK_fd9ddbdd49a17afcbe014401295" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_b27b1150b8a7af68424540613c" ON "transfer" ("token_id") `)
        await db.query(`CREATE INDEX "IDX_8b5f51515a63064d5d10f9f0f3" ON "transfer" ("contract_id") `)
        await db.query(`CREATE INDEX "IDX_76bdfed1a7eb27c6d8ecbb7349" ON "transfer" ("from_id") `)
        await db.query(`CREATE INDEX "IDX_0751309c66e97eac9ef1149362" ON "transfer" ("to_id") `)
        await db.query(`CREATE INDEX "IDX_70ff8b624c3118ac3a4862d22c" ON "transfer" ("timestamp") `)
        await db.query(`CREATE INDEX "IDX_c116ab40c3b32ca2d9c1d17d8b" ON "transfer" ("block") `)
        await db.query(`CREATE TABLE "token" ("id" character varying NOT NULL, CONSTRAINT "PK_82fae97f905930df5d62a702fc9" PRIMARY KEY ("id"))`)
        await db.query(`CREATE TABLE "contract_token" ("id" character varying NOT NULL, "contract_id" character varying, "token_id" character varying, CONSTRAINT "PK_9e198747f976ab65189d6dde769" PRIMARY KEY ("id"))`)
        await db.query(`CREATE INDEX "IDX_0ac1528017fced48a1b13ea026" ON "contract_token" ("contract_id") `)
        await db.query(`CREATE INDEX "IDX_e8885f644fb350971563f5ff42" ON "contract_token" ("token_id") `)
        await db.query(`ALTER TABLE "owner_contract_token" ADD CONSTRAINT "FK_21166597f9cda2175f2611b3400" FOREIGN KEY ("owner_id") REFERENCES "owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "owner_contract_token" ADD CONSTRAINT "FK_2a4471848adf3ee6b9be260324a" FOREIGN KEY ("contract_token_id") REFERENCES "contract_token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_b27b1150b8a7af68424540613c7" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_8b5f51515a63064d5d10f9f0f30" FOREIGN KEY ("contract_id") REFERENCES "contract"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_76bdfed1a7eb27c6d8ecbb73496" FOREIGN KEY ("from_id") REFERENCES "owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "transfer" ADD CONSTRAINT "FK_0751309c66e97eac9ef11493623" FOREIGN KEY ("to_id") REFERENCES "owner"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "contract_token" ADD CONSTRAINT "FK_0ac1528017fced48a1b13ea026d" FOREIGN KEY ("contract_id") REFERENCES "contract"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
        await db.query(`ALTER TABLE "contract_token" ADD CONSTRAINT "FK_e8885f644fb350971563f5ff427" FOREIGN KEY ("token_id") REFERENCES "token"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
    }

    async down(db) {
        await db.query(`DROP TABLE "contract"`)
        await db.query(`DROP TABLE "owner_contract_token"`)
        await db.query(`DROP INDEX "public"."IDX_21166597f9cda2175f2611b340"`)
        await db.query(`DROP INDEX "public"."IDX_2a4471848adf3ee6b9be260324"`)
        await db.query(`DROP TABLE "owner"`)
        await db.query(`DROP TABLE "transfer"`)
        await db.query(`DROP INDEX "public"."IDX_b27b1150b8a7af68424540613c"`)
        await db.query(`DROP INDEX "public"."IDX_8b5f51515a63064d5d10f9f0f3"`)
        await db.query(`DROP INDEX "public"."IDX_76bdfed1a7eb27c6d8ecbb7349"`)
        await db.query(`DROP INDEX "public"."IDX_0751309c66e97eac9ef1149362"`)
        await db.query(`DROP INDEX "public"."IDX_70ff8b624c3118ac3a4862d22c"`)
        await db.query(`DROP INDEX "public"."IDX_c116ab40c3b32ca2d9c1d17d8b"`)
        await db.query(`DROP TABLE "token"`)
        await db.query(`DROP TABLE "contract_token"`)
        await db.query(`DROP INDEX "public"."IDX_0ac1528017fced48a1b13ea026"`)
        await db.query(`DROP INDEX "public"."IDX_e8885f644fb350971563f5ff42"`)
        await db.query(`ALTER TABLE "owner_contract_token" DROP CONSTRAINT "FK_21166597f9cda2175f2611b3400"`)
        await db.query(`ALTER TABLE "owner_contract_token" DROP CONSTRAINT "FK_2a4471848adf3ee6b9be260324a"`)
        await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_b27b1150b8a7af68424540613c7"`)
        await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_8b5f51515a63064d5d10f9f0f30"`)
        await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_76bdfed1a7eb27c6d8ecbb73496"`)
        await db.query(`ALTER TABLE "transfer" DROP CONSTRAINT "FK_0751309c66e97eac9ef11493623"`)
        await db.query(`ALTER TABLE "contract_token" DROP CONSTRAINT "FK_0ac1528017fced48a1b13ea026d"`)
        await db.query(`ALTER TABLE "contract_token" DROP CONSTRAINT "FK_e8885f644fb350971563f5ff427"`)
    }
}