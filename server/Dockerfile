FROM node:12

# Define Git Branch
ARG env_file

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Define .env based on git branch
COPY ${env_file} .env

# Build app
RUN npm run build

# Set environmental variable
ENV NODE_ENV production

EXPOSE 8080
CMD [ "node", "dist/index.js" ]
USER node
