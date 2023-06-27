
# Base Image
FROM node:18-alpine as build

# Directory
WORKDIR /app

# Copy then install dependencies
COPY package.json .
RUN npm install

# Copy files excluding node modules
COPY . .

# Exposing default port
EXPOSE 5173

# Run dev environment
RUN npm run build

# Nginx base image
FROM nginx:1.17.8-alpine

# copy build files
COPY --from=build /app/dist /usr/share/nginx/html

# Replace ngnx config files 
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# Expose default port
EXPOSE 80

# Run Nginx server
CMD ["nginx", "-g", "daemon off;"]