FROM node:lts-alpine3.19 as builder

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json

RUN npm i

FROM node:lts-alpine3.19

WORKDIR /app
COPY --from=builder /app/node_modules ./node_modules
COPY . .

RUN npm run build 

EXPOSE 3000

CMD ["npm", "run", "start"]
