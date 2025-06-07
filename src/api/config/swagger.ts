import swaggerJsdoc from "swagger-jsdoc";
import { CONFIG_PROPERTIES } from "config";

const protocol = CONFIG_PROPERTIES.HTTPS ? 'https' : 'http'



const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "My API",
      version: "1.0.0",
      description: "K8S Project documentation",
    },
    servers: [
      {
        url: `${protocol}/${CONFIG_PROPERTIES.HOST}:${CONFIG_PROPERTIES.PORT}`
      },
    ],
  },
  apis: ["./src/api/controllers/*.ts"],
}


export const swaggerSpec = swaggerJsdoc(options);