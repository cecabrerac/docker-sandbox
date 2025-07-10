# Use Node.js base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy server and static files
COPY server.js ./
COPY public ./public

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
