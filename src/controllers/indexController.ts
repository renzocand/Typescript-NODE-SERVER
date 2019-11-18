import {Request,Response} from 'express'

class IndexController {

   public index (req:Request,res:Response){
        res.render('index.hbs', {title:'BIENVENIDO'})
    }
}

export const indexController = new IndexController();


