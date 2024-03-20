import multer from "multer";
import {resolve} from 'path';


export const upload = multer({
	storage: multer.diskStorage({
		destination(req, file, callback) {
			callback(null, resolve(__dirname, '..', 'uploads'));
		},
		//definir o nome padrão do arquivos feitos upload com o stimeStamp do Date.now()
		filename(req, file, callback){
			callback(null, `${Date.now()}-${file.originalname}`)
		},
	}),
});