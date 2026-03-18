FROM node:22-alpine AS client-builder
WORKDIR /app/client

COPY app/client/package*.json ./
RUN npm ci --no-audit --no-fund
COPY app/client/ ./
RUN npm run build

FROM node:22-alpine AS server-deps
WORKDIR /app/server

COPY app/server/package*.json ./
RUN npm ci --omit=dev --no-audit --no-fund

FROM node:22-alpine
WORKDIR /app/server

COPY app/server/ ./
COPY --from=server-deps /app/server/node_modules ./node_modules

COPY --from=client-builder /app/client/dist ./client/dist

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000
CMD ["node", "server.js"]
