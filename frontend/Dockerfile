FROM node:22-alpine3.18 AS Dev

ENV NODE_ENV=dev

WORKDIR /usr/src/front_end

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN npm run build

CMD ["sh", "-c", "npm run dev"]
