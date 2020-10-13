import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602602174537 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: 'images',
      columns: [
        {
          name: 'id',
          type: 'integer',
          unsigned: true,
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        {
          name: 'path',
          type: 'varchar',
        },
        {
          name: 'orphanage_id',
          type: 'integer',
        }
      ],
      foreignKeys: [
        {
          name: 'ImageOrphanage', // Nome da chave estrangeira
          columnNames: ['orphanage_id'], // Coluna que irá fazer o relacionamento
          referencedTableName: 'orphanages', // Tabela que ela está se relacionado
          referencedColumnNames: ['id'], // Qual a coluna na tabela orphanages ela está se relacionando
          onUpdate: 'CASCADE', 
          onDelete: 'CASCADE',
        }
      ]

    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('images')
  }

}
