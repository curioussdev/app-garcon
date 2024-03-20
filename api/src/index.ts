import express, { Express } from "express";
import {resolve} from 'path';
import { router } from './router';


class App{
	readonly app: Express;

	constructor(){
		this.app = express();

		this.middleware();
		this.routes();

	}


	middleware() {
		this.app.use((req, res, next) => {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Methods', '*');
			res.setHeader('Access-Control-Allow-Headers', '*');
			next()
		});
		this.app.use('/uploads', express.static(resolve(__dirname, '..', 'uploads')));
		this.app.use(express.json());
	};

	routes() {
		this.app.use(router);
	};
}

export const app = new App().app;

