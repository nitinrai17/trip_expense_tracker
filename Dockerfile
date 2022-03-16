FROM node:alpine as builder

WORKDIR '/app'

COPY ./package.json  ./

RUN npm install

COPY . .

RUN npm run build


FROM nginx

EXPOSE 80

EXPOSE 443

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

COPY ./nginx/nginx.key /etc/nginx/nginx.key

COPY ./nginx/nginx-certificate.crt /etc/nginx/nginx-certificate.crt

COPY --from=builder /app/build /usr/share/nginx/html