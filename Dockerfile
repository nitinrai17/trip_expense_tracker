FROM node:alpine as builder

WORKDIR '/app'

COPY ./package.json  ./

RUN npm install -g npm@8.3.1 --force

RUN npm install -g npm@latest --force

COPY . .

RUN npm run build


FROM nginx

EXPOSE 80

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY --from=builder /app/build /usr/share/nginx/html