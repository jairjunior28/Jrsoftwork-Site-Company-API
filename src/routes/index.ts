import express,{Request,Response} from 'express';
import { addUser, prisma } from '../repositories/UserRepository';
import swaggerUi from "swagger-ui-express";
const swaggerOutput:{} = './swagger_output.json';
import * as yup from 'yup';
import { validation } from 'src/services/Validation';

// import { validation } from 'src/services/Validation';//middleware of validation
// import { validation } from 'src/services/Validation';


const routes = express.Router();
routes.get('/', (req:Request, res:Response) => {
    prisma.$connect();
    res.json({ 'message': 'Route `/` from API JR Softwork - Site Company.' })
} 
);
routes.post('/signup',async(req:Request,res:Response)=>{
   
const result=
    await  addUser(req.body);
    // console.log(req.body);
     res.json(result)
})
routes.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));
// routes.post('/entrar', userControler.signInValidation, UsuariosController.signIn);
//route 404 validation
routes.use( (req:Request, res:Response) => {
    res.json({'message': 'Route Not found.'})
}
); 

export default routes;