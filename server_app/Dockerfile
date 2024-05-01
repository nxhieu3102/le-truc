# Use the official Node 20 image as the base image
FROM node:20

# Set the working directory inside the container
WORKDIR /server

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install
RUN npm uninstall bcrypt
RUN npm install bcrypt


# Copy the rest of the application code to the working directory
COPY . .

# Expose the port on which your Express app will run
EXPOSE 8000

# Start the Express app
CMD [ "npm", "start" ]
