FROM node:18-alpine AS builder

WORKDIR /app

COPY . .

RUN yarn install

COPY . .

RUN ["yarn", "build"]


FROM nginx:alpine

WORKDIR /usr/share/nginx/html

COPY --from=builder /app/build .

CMD ["nginx", "-g", "daemon off;"]