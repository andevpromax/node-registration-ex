# Use the official Node.js image
FROM node:alpine

# Create and change to the app directory
WORKDIR /app

# Copy the rest of the application code
COPY . /app

# Install dependencies
RUN npm install

# Expose the application port
EXPOSE 3000

# Run the application
CMD ["node", "src/index.js"]
