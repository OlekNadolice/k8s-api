import "reflect-metadata";
import { Container } from "inversify";

import '@controllers/AuthController'
import '@controllers/UserController'
import '@controllers/ClusterController'


import AuthService from "@services/AuthService";


import UserRepository from "@repositories/UserRepository";

const TYPES = {
  AuthService: Symbol.for("AuthService"),
  UserRepository: Symbol.for("UserRepository")
};


const container = new Container();

container.bind<AuthService>(TYPES.AuthService).to(AuthService)
container.bind<UserRepository>(TYPES.UserRepository).to(UserRepository)

export { container, TYPES };