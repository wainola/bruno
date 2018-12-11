FROM node:8.12.0
RUN mkdir -p /usr/server
WORKDIR /usr/server
COPY package*.json ./
RUN npm install --silent
RUN npm install -g nodemon

COPY . .
EXPOSE 9000
EXPOSE 3000
CMD ["npm", "run", "dev"]
