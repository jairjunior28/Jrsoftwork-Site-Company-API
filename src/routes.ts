import express,{Request,Response} from 'express'

const routes = express.Router();
routes.get('/', (req:Request, res:Response) => {
    res.json({ 'message': 'Route `/` from API JR Softwork - Site Company.' })
}
);
//route 404 validation
routes.use( (req:Request, res:Response) => {
    res.json({'message': 'Route Not found.'})
}
);

export default routes;