#FROM node:alpine as build
#WORKDIR /usr/src/app
#COPY package*.json ./
#RUN npm install
#COPY . .
#RUN npm run build --configuration=production
#FROM nginx:alpine
#COPY --from=build /usr/src/app/dist/weather/browser /usr/share/nginx/html
#COPY ./nginx.conf /etc/nginx/conf.d/default.conf
#EXPOSE 80
#CMD ["nginx", "-g", "daemon off;"]

FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install && npm install -g @angular/cli
COPY . .
RUN npm run build --configuration=production
EXPOSE 8080
CMD ["node", "app.js"]
