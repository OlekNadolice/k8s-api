import { injectable } from "inversify"
import Controller from "./AbstractController"



@injectable()
class ClusterController extends Controller {
   constructor() {
    super()
   }

   initRouter() {
    this.router.get('', )
    this.router.get(':clusterId', )
   }

  
}

export default ClusterController


