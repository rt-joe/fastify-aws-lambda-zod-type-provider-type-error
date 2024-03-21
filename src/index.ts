import fastifyLambda from "@fastify/aws-lambda";
import { fastify } from "fastify";
import type { ZodTypeProvider } from "fastify-type-provider-zod";

const app = fastify().withTypeProvider<ZodTypeProvider>();

export const handler = fastifyLambda(app);
