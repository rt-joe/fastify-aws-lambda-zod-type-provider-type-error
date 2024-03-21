## Steps to Reproduce

With node v20 installed

```
git clone https://github.com/rt-joe/fastify-aws-lambda-zod-type-provider-type-error
cd fastify-aws-lambda-zod-type-provider-type-error
npm install
npm run type
```

## Workaround

```typescript
export const handler = fastifyLambda(app as unknown as FastifyInstance);
```