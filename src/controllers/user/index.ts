// import * as signIn from './SignIn';
import { StatusCodes } from 'http-status-codes';
import { addUser } from 'src/repositories/UserRepository';
import { Request, Response } from 'express';


const UserControllersignUp = 
  // ...signIn,
    async (req: Request, res: Response) => {
    const result = await addUser(req.body);

    if (result instanceof Error) {
      return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
        errors: {
          default: result.message
        }
      });
    }

    return res.status(StatusCodes.CREATED).json(result);
  }

export default UserController;