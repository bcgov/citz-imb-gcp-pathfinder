# base image
FROM node:18-alpine AS base

# main directory
WORKDIR /api

# Copy all the directory
COPY . .

#Commands to run
RUN npm install


# Add typescript
RUN npm i -D typescript@5.0.4

# Complete JavaScript Build
RUN npm run build


FROM node:18-alpine as prod
ENV NODE_ENV=production

# Add curl for health check
RUN apk --update --no-cache add curl

WORKDIR /api

# copy and install dependencies
COPY package.json .
RUN npm i 

# Copy dist folder with JS files
COPY --from=base /api/dist .

# Run the api
CMD ["node", "server.js"]
