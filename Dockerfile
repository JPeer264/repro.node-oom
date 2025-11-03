# Use Node.js LTS version
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy package files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile --prod

# Copy application files
COPY . .

# Expose the port
EXPOSE 3000

# Start the application
CMD ["pnpm", "start"]

