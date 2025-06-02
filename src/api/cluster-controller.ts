import { getRouter } from "./config";

export const clusterController = getRouter()



clusterController.get('', (req,res) => {
  res.send('heloo friend')
})