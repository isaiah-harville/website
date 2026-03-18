FROM node:24-alpine AS builder
ARG APP_NAME
WORKDIR /workspace

COPY package.json ./
COPY pnpm-lock.yaml ./
COPY pnpm-workspace.yaml ./
COPY packages ./packages
COPY apps ./apps

RUN test -n "$APP_NAME"

RUN corepack pnpm install --frozen-lockfile
RUN corepack pnpm --dir /workspace/apps/${APP_NAME} build

FROM node:24-alpine
ARG APP_NAME

WORKDIR /app/server

COPY deploy/server/package.json ./package.json
RUN corepack pnpm install --prod --no-frozen-lockfile

COPY deploy/server/server.js ./server.js
COPY --from=builder /workspace/apps/${APP_NAME}/dist ./client/dist

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

USER node

CMD ["node", "server.js"]
