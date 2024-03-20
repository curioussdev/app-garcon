import knex, { Knex } from 'knex';
import { development, production, tests } from './Environment';


function OPT(): Knex.Config {
	switch (process.env.NODE_ENV) {
		case 'production':
			return production;
		case 'tests':
			return tests;
		default:
			return development;
	}
}

export const database = knex(OPT());