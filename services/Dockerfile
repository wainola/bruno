FROM node:8.12.0
RUN mkdir -p /usr/services
WORKDIR /usr/services
COPY package*.json ./
RUN npm install --silent
RUN npm install -g nodemon

COPY . .
CMD ["npm", "run", "dev"]
