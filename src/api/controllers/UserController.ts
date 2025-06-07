import { getRouter } from "../config/config";

export const userController = getRouter()

// upload kubeconfig
userController.post('{userId}/kubeconfig', () => {})