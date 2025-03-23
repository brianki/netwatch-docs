# Use the official Node.js Alpine image for a small, efficient container
FROM node:18-alpine 

# Set the working directory inside the container
WORKDIR /app  

# Copy package.json and package-lock.json first for better caching
COPY package*.json ./  


COPY fumadocs.config.ts ./ 

# Install dependencies
RUN npm install  

# Copy the rest of the project files
COPY . .  

# Build the application
RUN npm run build  

# Expose the port used by Next.js
EXPOSE 3000  

# Start the Next.js application
CMD ["npm", "run", "start"]
