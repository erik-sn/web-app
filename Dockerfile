#
# ---- Base Node ----
FROM node:10.16.0-alpine AS base
# set working directory
WORKDIR /code
# copy all code here
COPY . .

#
# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN npm set progress=false
# install ALL node_modules, including 'devDependencies'
RUN npm install

#
# ---- Test ----
FROM dependencies AS test
RUN  npm run lint && npm run test

#
# ---- Build ----
# install only production files
FROM dependencies AS build

RUN npm run build

#
# ---- Release ----
FROM build AS release

# next.js runs on port 3000
EXPOSE 3000
# start runs the express server with production environment variable
CMD npm run start