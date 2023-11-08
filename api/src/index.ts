import express from 'express';
import mongoose from 'mongoose';
import { router } from './router';

mongoose.connect('mongodb+srv://billadas:billadas2023@cluster0.yzte6mi.mongodb.net/?retryWrites=true&w=majority')
	.then(() => {
		const app = express();
		const port = 3001;

		app.use(express.json()); // transforma os arquivos da requisição em json. EX: icon de Pizza 🍕
		app.use(router);

		app.listen(port, () => {
			console.log(`MongoDB Connected 🚀Server running now on http://localhost:${port}`);
		});

	})
	.catch(() => {
		console.log('Erro ao conectar Banco de Dados')
	})















