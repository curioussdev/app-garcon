import {Knex} from "knex";
import { TableName } from "../tableName";

export const up = async (knex: Knex) => {
	try {
		await knex.schema.createTable(TableName.categoria, (table) => {
			table.bigIncrements('id').primary().index();
			table.string('name').notNullable().index();
			table.string('icon').notNullable().index();
			table.timestamps({defaultToNow: true, useCamelCase: true, useTimestamps: true});
		})
	} catch (error) {
		console.log('Erro ao migrar a tabela categotia');

	}
}


export const down = async (knex: Knex) => {
	await knex.schema.dropTable(TableName.categoria);
}