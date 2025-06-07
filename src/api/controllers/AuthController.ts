import AuthService from '@services/AuthService';
import { Request, Response } from 'express';
import { TYPES } from 'infrastructure/di/container';
import { inject } from 'inversify';
import { controller, httpPost, requestBody, response } from 'inversify-express-utils';

@controller('/auth')
class AuthController {
  constructor(@inject(AuthService) private authService: AuthService) {}

  @httpPost('/register')
  public async registerUser(@requestBody() reqBody: any, @response() res: Response): Promise<void> {
 
    res.json('asd');
  }

  public async loginUser(req: Request, res: Response) {}
}

export default AuthController;
