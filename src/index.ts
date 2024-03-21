import fastifyLambda from "@fastify/aws-lambda";
import { fastify } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";

const app = fastify().withTypeProvider<ZodTypeProvider>();

export const handler = fastifyLambda(app); //type error here on app

// workaround
// export const handler = fastifyLambda(app as unknown as FastifyInstance);
