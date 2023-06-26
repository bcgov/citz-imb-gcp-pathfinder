# base image
FROM node:18-alpine

# main directory
WORKDIR /app

# Copy all the directory
COPY . .

#Commands to run
RUN npm install

#Expose a port
EXPOSE 5050

# command to run
CMD ["node", "server.js"]