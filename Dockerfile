FROM node:current-slim

WORKDIR /usr/src/app
COPY package.json .

RUN npm install
RUN npm install -g pm2

COPY . .
RUN npm run build

EXPOSE 8080

CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]
