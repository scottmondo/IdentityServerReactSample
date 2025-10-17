FROM node:18-alpine

RUN apk add --no-cache ca-certificates && update-ca-certificates

WORKDIR /src

COPY "./WebApplication" .
RUN ls -la

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 7002

CMD [ "npm", "run", "prod" ]