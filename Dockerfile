# Используем базовый образ Node.js для сборки приложения
FROM node:18 as build

# Создаем рабочий каталог
WORKDIR /app

# Копируем package.json и package-lock.json в рабочий каталог
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Устанавливаем Angular CLI глобально
RUN npm install -g @angular/cli

# Копируем весь проект в рабочий каталог
COPY . .

# Собираем Angular приложение для production
RUN npm run build --configuration=production

# Используем базовый образ Nginx для сервера
FROM nginx:latest

# Копируем конфигурацию Nginx в контейнер
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Копируем собранное приложение из предыдущего этапа
COPY --from=build /app/dist/weather /usr/share/nginx/html

# Открываем порт 80
EXPOSE 80

# Запускаем Nginx
CMD ["nginx", "-g", "daemon off;"]
