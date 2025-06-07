import { PrismaClient } from '@prisma/client';
import { injectable } from 'inversify';

@injectable()
class UserRepository {
  private prisma: PrismaClient;

  public constructor() {
    this.prisma = new PrismaClient();
  }
}

export default UserRepository;
