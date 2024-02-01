FROM node:18.2.0-slim

# 앱 디렉터리 생성
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install pm2 -g

COPY . .

EXPOSE 3300

CMD [ "pm2-runtime", "start", "index.js", "-i", "8" ]