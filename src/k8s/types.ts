 export type KubernetesClusterConfig = {
   clusters: ClusterInfo[],
   users: UserInfo[],
   contexts: ContextInfo[],
   currentContext: string
 }

 export type ClusterInfo = {
    name: string,
    cluster: {
        server:string,
        certificateAuthority?: string,
        insecureSkipTlsVerify?: boolean,
        proxyUrl?: string;
        tlsServerName?: string;
        'certificate-authority-data': string,
        'insecure-skip-tls-verify'?: boolean,       
    }
 }

 export type UserInfo = {
  name: String,
  user: {
    'client-certificate-data'?: string; // certyfikat klienta w base64
    'client-key-data'?: string;         // klucz prywatny klienta w base64
    token?: string;                 // token do uwierzytelniania (np. Bearer token)
    username?: string;              // nazwa użytkownika (dla podstawowego uwierzytelniania)
    password?: string;              // hasło (dla podstawowego uwierzytelniania)
    authProvider?: {
      name: string;                // nazwa dostawcy uwierzytelniania (np. oidc)
      config?: Record<string, string>
  }
}}

 export type ContextInfo = {
    name: string;
    context: {
    cluster: string;
    user: string;
    namespace?: string; 
    extensions?: any[]; 
  };
 }


