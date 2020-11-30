import {Router} from 'express';
import { indexController } from '../controllers/index.controllers';
import multer from 'multer';
import path from 'path';

class IndexRouter {

    router:Router = Router();

    
    storage = multer.diskStorage({

        destination: (req, file, cb) => {
         
            cb(null, path.join(__dirname, `./../uploads/avatar${req.params.id}`));
        },

        filename: (req, file, cb) => {
            
            var ext = path.extname(file.originalname);
            if(ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') {
                throw new Error('Only images are allowed');
            }

            cb(null, file.originalname);
        }

    });

    upload = multer({ storage: this.storage });

    constructor() {

        this.router.post('/users/:id/avatar', this.upload.single('file'), indexController.index);

        
    }


}


export const indexRouter = new IndexRouter();