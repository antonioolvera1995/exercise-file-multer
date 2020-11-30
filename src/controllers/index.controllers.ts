import { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';

class IndexController {


    storage = multer.diskStorage({

        destination: (req, file, cb) => {
            cb(null, path.join(__dirname, './../uploads/'));
        },

        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }

    });

    upload = multer({ storage: this.storage });



    async index(req: Request, res: Response) {



        try {
            

            res.send(req.file);


        } catch (error) {
            res.send(error);
        }



    }


}


export const indexController = new IndexController();