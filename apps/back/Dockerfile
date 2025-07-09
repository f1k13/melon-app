# Используем официальный Node образ
FROM node:20-alpine

# Рабочая директория
WORKDIR /app

# Копируем package.json и package-lock.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем весь исходный код
COPY . .

# Собираем проект (если нужно)
RUN npm run build

# Пробрасываем порт (Fastify по умолчанию 3000)
EXPOSE 3000

# Команда запуска (можно через tsx, но в проде обычно js)
CMD ["node", "dist/server.js"]