FROM node:current-slim

# Set the working directory.
WORKDIR /usr/src/app

# Copy the file from your host to your current location.
COPY package.json .

# Run the command inside your image filesystem.
RUN npm install
RUN npm install -g pm2

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .
RUN npm run build

# Add metadata to the image to describe which port the container is listening on at runtime.
EXPOSE 14001

# Run the specified command within the container.
CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]
