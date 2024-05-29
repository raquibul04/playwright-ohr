# Use the official Playwright image as the base image
FROM mcr.microsoft.com/playwright:v1.23.1-focal

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of your application code into the container
COPY . .

# Install Playwright dependencies and browsers
RUN npx playwright install-deps
RUN npx playwright install

# Specify the command to run your tests
CMD npx playwright test
