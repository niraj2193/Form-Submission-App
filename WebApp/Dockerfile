# Use Node.js image as the base image
FROM node:current-alpine

## Update the package list and upgrade OpenSSL
RUN apk add openssl

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY frontend .

# Expose the port the app runs on
EXPOSE 3000
# EXPOSE 80
# EXPOSE 443

ARG DEPLOYMENT_ENVIRONMENT
ENV DEPLOYMENT_ENVIRONMENT=${DEPLOYMENT_ENVIRONMENT}

# Use the argument in subsequent instructions
RUN echo "The value of ARG DEPLOYMENT_ENVIRONMENT is: $DEPLOYMENT_ENVIRONMENT"


# Command to run the application
CMD npm run start:$DEPLOYMENT_ENVIRONMENT
