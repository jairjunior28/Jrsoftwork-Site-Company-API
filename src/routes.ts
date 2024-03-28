import express,{Request,Response} from 'express';
import { prisma } from './repositories/UserRepository';
const routes = express.Router();
routes.get('/', (req:Request, res:Response) => {
    prisma.$connect();
    res.json({ 'message': 'Route `/` from API JR Softwork - Site Company.' })
} 
);
// routes.post('/entrar', userControler.signInValidation, UsuariosController.signIn);
//route 404 validation
routes.use( (req:Request, res:Response) => {
    res.json({'message': 'Route Not found.'})
}
); 

export default routes;