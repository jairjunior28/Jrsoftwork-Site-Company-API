import express,{Request,Response} from 'express';
import { prisma } from '../repositories/UserRepository';
import swaggerUi from "swagger-ui-express";
const swaggerOutput:{} = './swagger_output.json';


const routes = express.Router();
routes.get('/', (req:Request, res:Response) => {
    prisma.$connect();
    res.json({ 'message': 'Route `/` from API JR Softwork - Site Company.' })
} 
);
routes.post('/signup',(req:Request,res:Response)=>{
    console.log(req.body);
    res.json(req.body)
})
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));
// routes.post('/entrar', userControler.signInValidation, UsuariosController.signIn);
//route 404 validation
routes.use( (req:Request, res:Response) => {
    res.json({'message': 'Route Not found.'})
}
); 

export default routes;