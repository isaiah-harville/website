FROM node:24-alpine AS client-builder
WORKDIR /app/client

COPY app/client/package*.json ./
RUN npm install
COPY app/client/ ./
RUN npm run build

FROM node:24-alpine
WORKDIR /app/server

COPY app/server/package*.json ./
RUN npm install --omit=dev

COPY app/server/ ./

COPY --from=client-builder /app/client/build ./client/build

ENV NODE_ENV=production
ENV PORT=6000
EXPOSE 6000
CMD ["node", "server.js"]
