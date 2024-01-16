import path from 'node:path';
import http from 'node:http';
import express from 'express';
import mongoose from 'mongoose';
import { Server } from 'socket.io';

import { router } from './router';

/* 'mongodb+srv://billadas:billadas2023@cluster0.yzte6mi.mongodb.net/?retryWrites=true&w=majority' */


const app = express();
const server = http.createServer(app);
export const io = new Server(server); // habilitando o app por intermédio do server http nativo do node

mongoose.connect('mongodb+srv://billadas:billadas2023@cluster0.yzte6mi.mongodb.net/?retryWrites=true&w=majority')
	.then(() => {
		const port = 3001;

		app.use((req, res, next) => {
			res.setHeader('Access-Control-Allow-Origin', '*');
			res.setHeader('Access-Control-Allow-Methods', '*');
			res.setHeader('Access-Control-Allow-Headers', '*');

			next()
		});

		app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));
		app.use(express.json()); // transforma os arquivos da requisição em json. EX: icon de Pizza 🍕
		app.use(router);

		server.listen(port, () => {
			console.log(`MongoDB Connected 🚀Server running on http://localhost:${port}`);
		});

	})
	.catch((e) => {
		console.log('Erro ao conectar com Banco de Dados', e);
	});















