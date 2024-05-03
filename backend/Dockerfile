FROM node:20-alpine3.17 AS Dev

ENV NODE_ENV=dev

WORKDIR /usr/src/back_end

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

#RUN npm run build

CMD ["sh", "-c", "npm run dev"]
