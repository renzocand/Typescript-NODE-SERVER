import { Router, Request,Response } from "express";

const router:Router = Router();

import {indexController} from '../controllers/indexController'

router.get('/', indexController.index)

router.get('/add', (req:Request,res:Response)=>{
    return res.send('FORM')
})

router.get('/about', (req,res)=>{
    return res.render('about')
})

export default router;