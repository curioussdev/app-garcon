import http from 'node:http';
import { Server } from 'socket.io';

import { app } from '..';
import { database } from '../app/databases'

const PORT = process.env.PORT ?? 3300;


const server = http.createServer(app);
export const io = new Server(server); // habilitando o app por intermédio do server http nativo do node



database.migrate.latest().then((d)=> {
	console.log('database connect with success', d)
	app.emit('active');
}).then().catch((err)=> {
	console.log('erro ao connectar database', err);
})

app.on("active", ()=> {
	server.listen(PORT, () => {
		console.log(`MongoDB Connected 🚀Server running on http://localhost:${PORT}`);
	});
})

















