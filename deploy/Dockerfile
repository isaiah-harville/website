FROM node:22-alpine AS builder
ARG APP_NAME
WORKDIR /workspace

COPY package*.json ./
COPY packages ./packages
COPY apps ./apps

RUN test -n "$APP_NAME"

WORKDIR /workspace/apps/${APP_NAME}
RUN npm install --no-audit --no-fund
RUN npm run build

FROM node:22-alpine AS server-deps
WORKDIR /app/server

COPY deploy/server/package.json ./package.json
RUN npm install --omit=dev --no-audit --no-fund

FROM node:22-alpine
ARG APP_NAME
WORKDIR /app/server

COPY deploy/server/package.json ./package.json
COPY deploy/server/server.js ./server.js
COPY --from=server-deps /app/server/node_modules ./node_modules
COPY --from=builder /workspace/apps/${APP_NAME}/dist ./client/dist

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
CMD ["node", "server.js"]
