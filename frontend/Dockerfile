# Stage 1: Build the React app
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the built app with a static server
FROM node:18-alpine

WORKDIR /app

COPY --from=build /app/build .
COPY serve.json .

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", ".", "-l", "3000"]