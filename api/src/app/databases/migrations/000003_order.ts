import {Knex} from "knex";
import { TableName } from "../tableName";



export const up = async (knex: Knex) => {
try {
	await knex.schema.createTable(TableName.ordem, (table) => {
			table.bigIncrements('id').primary().notNullable().unique().index();
			table.string('table').notNullable().index();
			table.string('status').notNullable().index().defaultTo('WAITING');
			table.integer('products')
				.notNullable()
				.index()
				.references('id')
				.inTable(TableName.produto)
				.onDelete('SET NULL')
				.onUpdate('CASCADE');

			table.timestamps({defaultToNow: true, useCamelCase: true, useTimestamps: true});
		})
} catch (error) {
	console.log('eerro ao migrar a tabela ordem');

}


}


export const down = async (knex: Knex) => {
	await knex.schema.dropTable(TableName.ordem);
}