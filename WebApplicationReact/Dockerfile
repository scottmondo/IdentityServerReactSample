FROM node:18-alpine

RUN apk add --no-cache ca-certificates && update-ca-certificates

WORKDIR /src

COPY "./WebApplicationReact" .
RUN ls -la

RUN npm install

RUN npm i -g serve

COPY . .

RUN npm run build

EXPOSE 7003

CMD [ "npm", "run", "prod" ]