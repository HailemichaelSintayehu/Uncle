# Use lightweight Node image for building
FROM node:18-alpine 
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install --legacy-peer-deps
COPY . .

# Build the Next.js app
RUN npm run build

# FROM node:18-alpine
# WORKDIR /app
# COPY --from=builder /app/.next ./.next
# COPY --from=builder /app/public ./public

# RUN npm install -g serve
EXPOSE 3000

# CMD ["serve", "-s", "-l", "3000", "./public"]


CMD ["npm", "run", "start"]
