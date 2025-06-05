import { getRouter } from "../config/config";
import { HTTP_STATUSES } from "../config/types";


export const clusterController = getRouter()


// returns clusters assigned to the user based on ID FROM JWT
clusterController.get('', (req, res) => {
  const mockedObject = [
    {
      name: 'EKS',
      server: "http://localhost",
      status: 'connected',
    }
  ]
  res.status(HTTP_STATUSES.OK).json(mockedObject)
})

// returns details about a cluster based on ID
clusterController.get('/:clusterId', (req, res ) => {

})