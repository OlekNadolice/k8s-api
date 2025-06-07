import { injectable } from 'inversify';

@injectable()
class AuthService {
  async registerUser(email: String, password: String): Promise<void> {}
}

export default AuthService;
