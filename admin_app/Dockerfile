# Use the official Node 20 image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /admin

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the port that the app will run on
EXPOSE 3002

# Define the command to run the app
CMD ["npm", "start"]
