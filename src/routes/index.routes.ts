import { Router } from 'express';
import { indexController } from '../controllers/index.controllers';


class IndexRouter {

    router: Router = Router();


   

    constructor() {

        this.router.post('/users/:id/avatar', indexController.upload.single('file'), indexController.index);


    }


}


export const indexRouter = new IndexRouter();