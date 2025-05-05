# Use official Node.js LTS base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy only package.json and package-lock.json
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Optional: expose port (good habit)
EXPOSE 3000

# Run the app
CMD ["node", "src/service.js"]
