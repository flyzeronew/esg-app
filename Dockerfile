FROM node:20.18.0-alpine3.19 as builder

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm install -g npm@latest && \
    npm i

FROM node:20.18.0-alpine3.19

WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .

RUN npm install -g npm@latest && \
    npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
