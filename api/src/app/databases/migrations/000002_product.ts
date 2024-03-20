import {Knex} from "knex";
import { TableName } from "../tableName";



export const up = async (knex: Knex) => {
	try {
		await knex.schema.createTable(TableName.produto, (table) => {
			table.bigIncrements('id').primary().notNullable().unique().index();
			table.string('name').notNullable().index();
			table.string('description').notNullable().index();
			table.string('imagePath').index().defaultTo('');
			table.float('price').notNullable().index();
			table.integer('category')
				.notNullable()
				.index()
				.references('id')
				.inTable(TableName.categoria)
				.onDelete('SET NULL')
				.onUpdate('CASCADE');

			table.string('ingredients').notNullable().index();

			table.timestamps({defaultToNow: true, useCamelCase: true, useTimestamps: true});
		})
	} catch (error) {
		console.log('erro ao migrar a tabela produto');

	}
}


export const down = async (knex: Knex) => {
	await knex.schema.dropTable(TableName.produto);
}