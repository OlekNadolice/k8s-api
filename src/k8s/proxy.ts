 import * as k8s from "@kubernetes/client-node"
import { KubernetesClusterConfig } from "./types";


function getKubernetesProxyObject(config: KubernetesClusterConfig): k8s.CoreV1Api {
    const {clusters, users, contexts, currentContext} = config
    const kc =  new k8s.KubeConfig();
    kc.loadFromOptions({clusters, users, contexts, currentContext})
    return  kc.makeApiClient(k8s.CoreV1Api)
   
 
}



// const client = getKubernetesProxyObject({clusters , users, contexts, currentContext})
// console.log(client)

