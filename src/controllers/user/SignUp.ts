import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as yup from 'yup';

import { addUser } from 'src/repositories/UserRepository';
// import { validation } from '../../shared/middleware';
// import { IUsuario } from '../../database/models';


// interface IBodyProps extends Omit<IUsuario, 'id'> { }

// export const signUpValidation = validation((getSchema) => ({
//   body: getSchema<IBodyProps>(yup.object().shape({
//     nome: yup.string().required().min(3),
//     senha: yup.string().required().min(6),
//     email: yup.string().required().email().min(5),
//   })),
// }));

export const signUp = async (req: Request, res: Response) => {
  const result = await addUser(req.body);

  if (result instanceof Error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      errors: {
        default: result.message
      }
    });
  }

  return res.status(StatusCodes.CREATED).json(result);
};
