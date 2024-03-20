import { Knex } from "knex";
import {resolve } from 'path';


export const development: Knex.Config = {
	client: 'sqlite3',
	useNullAsDefault: true,
	connection: {
		filename: resolve(__dirname, '..', 'db', 'water_db.sqlite'),
	},
	migrations: {
		directory: resolve(__dirname, '..', 'migrations')
	},
	seeds: {
		directory: resolve(__dirname, '..', 'seeders')
	},
	pool: {
		afterCreate: (conn: any, done: Function) => {
			conn.run('PRAGMA foreign_keys = ON');
			done();
		}
	}

};

export const production: Knex.Config  = {
	...development,
};

export const tests: Knex.Config  = {
	...development,
	connection: ':memory'
};