FROM node:16

WORKDIR /app

COPY . .

RUN npm install -g pnpm

RUN pnpm i

RUN pnpm run build

EXPOSE 50005

CMD ["pnpm", "start:prod"]