import { getRouter } from "./config";

export const clusterController = getRouter()


clusterController.get("/clusters", (req,res) => {
  res.send('heloo friend')
})