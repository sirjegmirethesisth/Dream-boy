# syntax=docker/dockerfile:1
FROM node:18-bullseye-slim

WORKDIR /app

# Install deps first (better layer caching)
COPY package*.json ./
RUN npm ci --omit=dev

# Copy the rest of the code
COPY . .

# Ensure we use the clean install inside the image, not any committed deps
RUN rm -rf node_modules

CMD ["node", "index.js"]
